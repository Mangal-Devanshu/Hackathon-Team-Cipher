import React, { useRef, useEffect } from 'react';
import { scaleLog } from 'd3-scale'; // Correct import for scaleLog
import * as THREE from 'three';
import { interpolateTurbo } from 'd3-scale-chromatic'; // Correct import for Turbo color scale
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../styling/Globe.css'; // Optional CSS file

function Globe({ data }) {
  const globeRef = useRef(null);
  const pointsRef = useRef(null);
  const geometryRef = useRef(new THREE.BufferGeometry());
  const positions = useRef([]);
  const colors = useRef([]);

  // Define valid min and max values for OCI data
  const validMin = 0.001; // Given valid minimum value for chlorophyll
  const validMax = 20.0;  // Adjust this based on your data range for OCI

  // PACE-like Chlorophyll Color Scale (using logarithmic scale)
  const paceColorScale = scaleLog()
    .domain([validMin, validMax]) // Chlorophyll values range
    .range([0, 1]);

  useEffect(() => {
    if (data && data.latitudes && data.latitudes.length > 0) {
      const { latitudes, longitudes, chlorophyll_data } = data;

      // Clear existing positions and colors
      positions.current = [];
      colors.current = [];

      // Process all data at once
      for (let i = 0; i < latitudes.length; i++) {
        const lat = latitudes[i];
        const lon = longitudes[i];
        const chl = chlorophyll_data[i];

        const radius = 5;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        // Ensure chlorophyll values are within the valid range for coloring
        const scaledChl = Math.max(validMin, Math.min(chl, validMax));
        const colorValue = paceColorScale(scaledChl); // Get logarithmic scaled chlorophyll value
        const color = new THREE.Color(interpolateTurbo(colorValue)); // Convert to THREE.Color

        // Store the positions and colors
        positions.current.push(x, y, z);
        colors.current.push(color.r, color.g, color.b);
      }

      // Update geometry attributes in one go
      geometryRef.current.setAttribute('position', new THREE.Float32BufferAttribute(positions.current, 3));
      geometryRef.current.setAttribute('color', new THREE.Float32BufferAttribute(colors.current, 3));
      geometryRef.current.needsUpdate = true; // Notify Three.js to update the geometry
    }
  }, [data]); // Depend only on data

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }} // Camera settings
      style={{ width: '100%', height: '100vh' }} // Make canvas full screen
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {data && (
        <points ref={pointsRef} geometry={geometryRef.current}>
          <pointsMaterial size={0.1} vertexColors />
        </points>
      )}
      <OrbitControls /> {/* Add OrbitControls for interaction */}
    </Canvas>
  );
}

export default Globe;