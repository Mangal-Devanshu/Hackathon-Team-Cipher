import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Fish = ({ temperature }) => {
    const fishRef = useRef();
    const directionRef = useRef(Math.random() < 0.5 ? 1 : -1);
    const [fishModels, setFishModels] = useState([]);
    const deathTemps = useRef([]);
    const fishDeadStatus = useRef([]); // Track if a fish is dead

    // Variables to control fish size, position, and speed
    const fishCount = 20;
    const baseSize = 0.025;
    const sizeVariation = 0.005;
    const fishAreaX = 150;
    const fishAreaZ = 150;
    const fishSpeed = 0.03;
    const fallSpeed = 0.05; // Speed at which fish fall towards the floor
    const floorY = -10; // Y-position where fish will "lie down"

    // Function to load fish models
    useEffect(() => {
        const loader = new GLTFLoader();
        const newFishModels = [];

        for (let i = 0; i < fishCount; i++) {
            loader.load('/models/Fish.glb', (gltf) => {
                const fishModel = gltf.scene;
                const randomScale = baseSize + Math.random() * sizeVariation;
                fishModel.scale.set(randomScale, randomScale, randomScale);
                fishModel.position.set(
                    Math.random() * fishAreaX - fishAreaX / 2,
                    Math.random() * -3 - 2,
                    Math.random() * fishAreaZ - fishAreaZ / 2
                );
                fishModel.rotation.y = directionRef.current === -1 ? Math.PI : 0;

                // Enable casting shadows for the fish model
                fishModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.material = new THREE.MeshStandardMaterial({
                            color: new THREE.Color(Math.random(), Math.random(), Math.random()),
                        });
                    }
                });

                // Add a random death temperature for each fish
                deathTemps.current.push(Math.random() * (34 - 30) + 30);
                fishDeadStatus.current.push(false); // Initially, all fish are alive

                // Add fish model to the scene
                if (fishRef.current) {
                    fishRef.current.add(fishModel);
                    newFishModels.push(fishModel);
                }
            });
        }
        setFishModels(newFishModels);
    }, [fishCount, baseSize, sizeVariation, fishAreaX, fishAreaZ]);

    // Frame-by-frame logic to move fish and make them fall to the floor if dead
    useFrame(() => {
        if (fishRef.current) {
            fishModels.forEach((fishModel, index) => {
                const deathTemp = deathTemps.current[index];
                const isDead = fishDeadStatus.current[index];

                if (temperature >= deathTemp) {
                    // Mark the fish as dead if it reaches the death temperature
                    fishDeadStatus.current[index] = true;
                }

                if (isDead) {
                    // If fish is dead, it falls to the floor and stays static
                    if (fishModel.position.y > floorY) {
                        fishModel.position.y -= fallSpeed; // Move down
                    } else {
                        fishModel.rotation.x = Math.PI / 2; // Rotate to lie flat on the floor
                    }
                } else {
                    // Continue moving the fish if alive
                    fishModel.position.z += fishSpeed * directionRef.current;
                    if (fishModel.position.z > fishAreaZ / 2 || fishModel.position.z < -fishAreaZ / 2) {
                        fishModel.position.set(
                            Math.random() * fishAreaX - fishAreaX / 2,
                            fishModel.position.y, // Keep the current Y-position
                            directionRef.current === 1 ? -fishAreaZ / 2 : fishAreaZ / 2
                        );
                    }
                }
            });
        }
    });

    return <group ref={fishRef} />;
};

export default Fish;