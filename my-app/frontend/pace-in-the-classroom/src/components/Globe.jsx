import React, { useRef, useEffect } from 'react';
import { scaleLog, scaleLinear } from 'd3-scale';
import * as THREE from 'three';
import { interpolateTurbo, interpolateRdBu, interpolateYlGnBu } from 'd3-scale-chromatic';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../styling/Globe.css'; // Optional CSS file

function Globe({ data, dataType }) {
  const globeRef = useRef(null);
  const pointsRef = useRef(null);
  const geometryRef = useRef(new THREE.BufferGeometry());
  const positions = useRef([]);
  const colors = useRef([]);

  // Define valid ranges for different data types
  const validRanges = {
    chl: { min: 0.001, max: 20.0 },
    sst: { min: 0, max: 30 },
    carbon: { min: 0.01, max: 100 },
  };

  // Define color scales based on data type
  const colorScales = {
    chl: scaleLog().domain([validRanges.chl.min, validRanges.chl.max]).range([0, 1]),
    sst: scaleLinear().domain([validRanges.sst.min, validRanges.sst.max]).range([0, 1]),
    carbon: scaleLog().domain([validRanges.carbon.min, validRanges.carbon.max]).range([0, 1]),
  };

  // Define color interpolation functions based on data type
  const colorInterpolations = {
    chl: interpolateTurbo,
    sst: interpolateRdBu,
    carbon: interpolateYlGnBu,
  };

  useEffect(() => {
    // Defensive check: Ensure that dataType exists in validRanges
    if (!validRanges[dataType]) {
      console.error(`Invalid dataType: ${dataType}`);
      return;  // Prevent further execution if dataType is invalid
    }

    if (data && data.latitudes && data.longitudes && data.data_values.length > 0) {
      const { latitudes, longitudes, data_values } = data;
      
      const validMin = validRanges[dataType].min;
      const validMax = validRanges[dataType].max;
      const colorScale = colorScales[dataType];
      const colorInterpolation = colorInterpolations[dataType];

      // Clear existing positions and colors
      positions.current = [];
      colors.current = [];

      // Process all data at once
      for (let i = 0; i < latitudes.length; i++) {
        const lat = latitudes[i];
        const lon = longitudes[i];
        const value = data_values[i];  // Use corresponding data values

        const radius = 5;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        // Ensure values are within the valid range for coloring
        const scaledValue = Math.max(validMin, Math.min(value, validMax));
        const colorValue = colorScale(scaledValue);
        const color = new THREE.Color(colorInterpolation(colorValue));

        // Store the positions and colors
        positions.current.push(x, y, z);
        colors.current.push(color.r, color.g, color.b);
      }

      // Update geometry attributes in one go
      geometryRef.current.setAttribute('position', new THREE.Float32BufferAttribute(positions.current, 3));
      geometryRef.current.setAttribute('color', new THREE.Float32BufferAttribute(colors.current, 3));
      geometryRef.current.needsUpdate = true; // Notify Three.js to update the geometry
    }

    // Cleanup function to dispose of the geometry when the component unmounts
    return () => {
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }
    };
  }, [data, dataType]);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {data && data.data_values.length > 0 && (
        <points ref={pointsRef} geometry={geometryRef.current}>
          <pointsMaterial size={0.1} vertexColors />
        </points>
      )}
      <OrbitControls />
    </Canvas>
  );
}

export default Globe;
