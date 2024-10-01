// SeaRock.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const SeaRock = () => {
    const rockRef = useRef();
    const [rockModels, setRockModels] = useState([]);

    const textureLoader = new THREE.TextureLoader();
    const rockTextures = {
        baseColor: textureLoader.load('/textures/SeaRocks/Sea_Rock_001_BaseColor.jpg'),
        normal: textureLoader.load('/textures/SeaRocks/Sea_Rock_001_Normal.jpg'),
        roughness: textureLoader.load('/textures/SeaRocks/Sea_Rock_001_Roughness.jpg'),
        ambientOcclusion: textureLoader.load('/textures/SeaRocks/Sea_Rock_001_AmbientOcclusion.jpg'),
        height: textureLoader.load('/textures/SeaRocks/Sea_Rock_001_Height.jpg'), // Height map texture
    };

    // Adjustable parameters for sea rocks
    const rockCount = 20; // Number of sea rocks
    const scaleRange = { min: 1, max: 2.5 }; // Scale range for rocks
    const positionXRange = { min: -40, max: 40 }; // Spread on the X-axis
    const positionZRange = { min: -40, max: 40 }; // Spread on the Z-axis
    const displacementScale = 0.3; // Height displacement scale

    useEffect(() => {
        const loader = new GLTFLoader();

        // Load rock models only once
        for (let i = 0; i < rockCount; i++) {
            loader.load('/models/SeaRock.glb', (gltf) => {
                const rockModel = gltf.scene;

                // Calculate bounding box to find the height of the rock model
                const box = new THREE.Box3().setFromObject(rockModel);
                const height = box.max.y - box.min.y + 0.2;

                // Randomize rock size and position
                const randomScale = Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
                rockModel.scale.set(randomScale, randomScale, randomScale);

                // Position the rock model based on its height to lay on the seabed
                rockModel.position.set(
                    Math.random() * (positionXRange.max - positionXRange.min) + positionXRange.min, // X-axis
                    -height * 3.5, // Position on Y-axis to rest on seabed
                    Math.random() * (positionZRange.max - positionZRange.min) + positionZRange.min  // Z-axis
                );

                // Apply textures to rock mesh
                rockModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            map: rockTextures.baseColor, // Base color texture
                            normalMap: rockTextures.normal, // Normal map texture
                            roughnessMap: rockTextures.roughness, // Roughness map texture
                            aoMap: rockTextures.ambientOcclusion, // Ambient occlusion map texture
                            displacementMap: rockTextures.height, // Height map texture
                            displacementScale: displacementScale, // Scale for the height displacement
                        });
                    }
                });

                if (rockRef.current) {
                    rockRef.current.add(rockModel);
                    setRockModels((prev) => [...prev, rockModel]);
                }
            });
        }
    }, []);

    return <group ref={rockRef} />;
};

export default SeaRock;