import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

const Seabed = () => {
    const seabedRef = useRef();

    // Load all textures for sand and caustics
    const [baseColor, normal, roughness, ao, height, caustics] = useLoader(THREE.TextureLoader, [
        '/textures/Seabed/Stylized_Sand_001_basecolor.jpg',
        '/textures/Seabed/Stylized_Sand_001_normal.jpg',
        '/textures/Seabed/Stylized_Sand_001_roughness.jpg',
        '/textures/Seabed/Stylized_Sand_001_ambientOcclusion.jpg',
        '/textures/Seabed/Stylized_Sand_001_height.png',
        '/textures/Seabed/Caustics.jpg' // Caustics texture for the water effect
    ]);

    // Variables to control seabed size and displacement intensity
    const seabedSize = [100, 100]; // Size of the seabed plane (width, height)
    const displacementScale = 0.5; // Adjust the height of the seabed surface

    // Animate the caustics texture
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        seabedRef.current.material.map.offset.x = time * 0.1;
        seabedRef.current.material.map.offset.y = time * 0.15;
        seabedRef.current.material.normalMap.offset.x = time * 0.05; // Optional for subtle distortion
    });

    useEffect(() => {
        // Set texture repeat and wrapping for caustics and other textures
        baseColor.wrapS = baseColor.wrapT = THREE.RepeatWrapping;
        normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
        roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
        ao.wrapS = ao.wrapT = THREE.RepeatWrapping;
        height.wrapS = height.wrapT = THREE.RepeatWrapping;
        caustics.wrapS = caustics.wrapT = THREE.RepeatWrapping;

        // Set the repeat size to fit the seabed
        baseColor.repeat.set(4, 4);
        normal.repeat.set(4, 4);
        roughness.repeat.set(4, 4);
        ao.repeat.set(4, 4);
        height.repeat.set(4, 4);
        caustics.repeat.set(4, 4);
    }, [baseColor, normal, roughness, ao, height, caustics]);

    return (
        <mesh
            ref={seabedRef}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -10, 0]}
            receiveShadow={true} // Enable seabed to receive shadows
        >
            <planeGeometry args={[seabedSize[0], seabedSize[1], 512, 512]} />
            <meshStandardMaterial
                map={baseColor}
                normalMap={normal}
                roughnessMap={roughness}
                aoMap={ao}
                displacementMap={height}
                displacementScale={displacementScale}
                side={THREE.DoubleSide}
                emissiveMap={caustics}
                emissiveIntensity={0.4}
                transparent={true}
            />
        </mesh>
    );
};

export default Seabed;