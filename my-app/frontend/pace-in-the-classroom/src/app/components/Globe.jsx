import React, { useRef, useEffect, useState } from 'react';
import { scaleLog, scaleLinear } from 'd3-scale';
import * as THREE from 'three';
import { interpolateTurbo, interpolateRdBu, interpolateYlGnBu } from 'd3-scale-chromatic';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { shaderMaterial } from '@react-three/drei';
import '../styling/Globe.css';
// Custom shader material to blend the textures based on the mask, with no lighting interactions
const LandOnlyMaterial = shaderMaterial(
  {
    earthTexture: null,
    maskTexture: null,
    bumpTexture: null, // Bump texture for perturbing normals
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;  // Pass normal to fragment shader
    varying vec3 vPosition; // Pass world position to fragment shader for bump calculations
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);  // Transform normal to world space
      vPosition = (modelMatrix * vec4(position, 1.0)).xyz; // World position of the vertex
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader (shaded white land with actual bump mapping)
  `
  uniform sampler2D maskTexture;
  uniform sampler2D bumpTexture; // Bump texture for land
  varying vec2 vUv;
  varying vec3 vNormal;  // World-space normal
  varying vec3 vPosition; // World-space position of the fragment

  // Function to compute a simple bump effect based on texture data
  vec3 perturbNormal(vec3 normal, vec2 uv) {
    // Sample the bump texture to get the height (grayscale value)
    float height = texture2D(bumpTexture, uv).r; // Bump texture is assumed to be in grayscale
    
    // Compute tangent and bitangent for the bump mapping
    vec3 dp1 = dFdx(vPosition);
    vec3 dp2 = dFdy(vPosition);
    vec2 duv1 = dFdx(uv);
    vec2 duv2 = dFdy(uv);

    vec3 tangent = normalize(dp1 * duv2.t - dp2 * duv1.t);
    vec3 bitangent = normalize(dp2 * duv1.s - dp1 * duv2.s);
    
    // Perturb the normal based on the height data
    vec3 bumpedNormal = normalize(normal + height * (tangent + bitangent));
    
    return bumpedNormal;
  }

  void main() {
    vec4 mask = texture2D(maskTexture, vUv); // Sample mask texture

    // If the mask is black (land), render the land with white color and apply bump mapping
    if (mask.r < 0.5) { // Assuming the mask uses black for land and white for ocean
      vec3 perturbedNormal = perturbNormal(vNormal, vUv); // Apply bump mapping to get perturbed normal
      
      // Use the perturbed normal to calculate the brightness (diffuse shading effect)
      float brightness = dot(normalize(perturbedNormal), vec3(0.0, 0.0, 1.0)); // Lighting from above
      brightness = clamp(brightness, 0.5, 1.0); // Keep brightness between 0.5 and 1.0 to simulate shades of white

      // Set color to white with varying intensity based on bump mapping
      gl_FragColor = vec4(vec3(brightness), 1.0); // Output varying white color based on bump
    } else {
      discard; // Make ocean parts transparent
    }
  }
  `
);

extend({ LandOnlyMaterial });



function Globe({ data, dataType }) {
  const globeRef = useRef(null);
  const pointsRef = useRef(null);
  const geometryRef = useRef(new THREE.BufferGeometry());
  const positions = useRef([]);
  const colors = useRef([]);
  const [bumpTexture, setBumpTexture] = useState(null);
  const [earthTexture, setEarthTexture] = useState(null);
  const [maskTexture, setMaskTexture] = useState(null);

  const validRanges = {
    chl: { min: 0.001, max: 20.0 },
    sst: { min: 0, max: 30 },
    carbon: { min: 0.01, max: 100 },
  };

  const colorScales = {
    chl: scaleLog().domain([validRanges.chl.min, validRanges.chl.max]).range([0, 1]),
    sst: scaleLinear().domain([validRanges.sst.min, validRanges.sst.max]).range([0, 1]),
    carbon: scaleLog().domain([validRanges.carbon.min, validRanges.carbon.max]).range([0, 1]),
  };

  const colorInterpolations = {
    chl: interpolateTurbo,
    sst: interpolateRdBu,
    carbon: interpolateYlGnBu,
  };

  // Load textures using THREE.TextureLoader
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/new_textures/earth_color_10K_optimized.png', (texture) => {
      setEarthTexture(texture); // Full earth texture
    });
    loader.load('/new_textures/earth_landocean_4K_optimized.png', (texture) => {
      setMaskTexture(texture); // Mask texture (land/ocean separation)
    });
    loader.load('/new_textures/topography_5K_optimized.png', (texture) => {
      setBumpTexture(texture); // Bump map texture for topography
    });
  }, []);

  // Process data points
  useEffect(() => {
    if (!validRanges[dataType]) {
      console.error(`Invalid dataType: ${dataType}`);
      return;
    }

    if (data && data.latitudes && data.longitudes && data.data_values.length > 0) {
      const { latitudes, longitudes, data_values } = data;

      const validMin = validRanges[dataType].min;
      const validMax = validRanges[dataType].max;
      const colorScale = colorScales[dataType];
      const colorInterpolation = colorInterpolations[dataType];

      positions.current = [];
      colors.current = [];

      for (let i = 0; i < latitudes.length; i++) {
        const lat = latitudes[i];
        const lon = longitudes[i];
        const value = data_values[i];

        const radius = 5;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        const scaledValue = Math.max(validMin, Math.min(value, validMax));
        const colorValue = colorScale(scaledValue);
        const color = new THREE.Color(colorInterpolation(colorValue));

        positions.current.push(x, y, z);
        colors.current.push(color.r, color.g, color.b);
      }

      geometryRef.current.setAttribute('position', new THREE.Float32BufferAttribute(positions.current, 3));
      geometryRef.current.setAttribute('color', new THREE.Float32BufferAttribute(colors.current, 3));
      geometryRef.current.needsUpdate = true;
    }

    return () => {
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }
    };
  }, [data, dataType]);


  // Create a color scale for the legend
  const renderColorScale = () => {
    const colorInterpolation = colorInterpolations[dataType];
    const validMin = validRanges[dataType].min;
    const validMax = validRanges[dataType].max;

    // Create gradient stops
    const numSteps = 10;
    const steps = Array.from({ length: numSteps }, (_, i) => {
      const value = validMin + ((validMax - validMin) / numSteps) * i;
      const color = colorInterpolation(i / numSteps);
      return (
        <div
          key={i}
          className="color-step"
          style={{ backgroundColor: color }}
        >
          <span>{value.toFixed(2)}</span>
        </div>
      );
    });

    return (
      <div className="color-scale">
        <div className="color-steps">
          {steps}
        </div>
      </div>
    );
  };


  return (
    <div className="globe-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 85 }}
        style={{ width: '100%', height: '100vh' }}
        gl={{ toneMapping: THREE.NoToneMapping }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Plot points on the globe */}
        {data && data.data_values.length > 0 && (
          <points geometry={geometryRef.current} renderOrder={0}>
            <pointsMaterial size={0.024} vertexColors />
          </points>
        )}
        <mesh ref={globeRef} renderOrder={1}>
          <sphereGeometry args={[5, 64, 64]} />
          {earthTexture && maskTexture && bumpTexture ? (
            <landOnlyMaterial
              earthTexture={earthTexture}
              maskTexture={maskTexture}
              bumpTexture={bumpTexture}
              transparent={true}
              depthTest={false}
              depthWrite={false}
            />
          ) : (
            <meshStandardMaterial color="blue" />
          )}
        </mesh>
        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* Render the color scale */}
      {renderColorScale()}
      {/* Description box with dataset info */}
      <div className="data-info">
        <h2>Dataset: {dataType === 'chl' ? 'Chlorophyll Concentration' : dataType === 'sst' ? 'Sea Surface Temperature' : 'Carbon Concentration'}</h2>
        <p>This scale shows the concentration of {dataType === 'chl' ? 'chlorophyll, indicating phytoplankton biomass in the ocean' : dataType === 'sst' ? 'sea surface temperature, which affects marine ecosystems' : 'carbon, a key element in the ocean’s carbon cycle.'}</p>
        <p>High values indicate nutrient-rich or warmer waters, while low values represent nutrient-poor or cooler regions.</p>
      </div>
    </div>
  );
}

export default Globe;
