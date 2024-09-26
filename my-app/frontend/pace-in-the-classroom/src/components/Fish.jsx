import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Fish = ({ temperature }) => {
    const fishRef = useRef();
    const directionRef = useRef(Math.random() < 0.5 ? 1 : -1); // Random direction (1 = forward, -1 = backward)
    const [isAlive, setIsAlive] = useState(true); // Track fish state (alive or dead)

    const fishCount = 10; // Number of fish to spawn
    const fishModels = useRef([]);

    useEffect(() => {
        const loader = new GLTFLoader();

        // Load fish models
        for (let i = 0; i < fishCount; i++) {
            loader.load('/models/Fish.glb', (gltf) => {
                const fishModel = gltf.scene;

                // Randomize fish size and position
                const randomScale = Math.random() * 0.5 + 0.5; // Fish size variation
                const scaleFactor = 50;
                fishModel.scale.set(randomScale / scaleFactor, randomScale / scaleFactor, randomScale / scaleFactor);

                fishModel.position.set(
                    Math.random() * 20 - 10,  // X-axis random position
                    Math.random() * -3 - 2,   // Y-axis position (underwater, negative Y)
                    Math.random() * 20 - 10   // Z-axis random position
                );

                // Ensure fish faces positive Z by default, reverse direction if moving backward
                fishModel.rotation.y = directionRef.current === -1 ? Math.PI : 0;

                // Randomize color
                fishModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: new THREE.Color(Math.random(), Math.random(), Math.random()),
                        });
                    }
                });

                fishRef.current.add(fishModel);
                fishModels.current.push(fishModel);
            });
        }
    }, []);

    useFrame(() => {
        if (fishRef.current && isAlive) {
            fishModels.current.forEach((fishModel) => {
                // Move fish along the Z-axis based on direction
                fishModel.position.z += 0.03 * directionRef.current;

                // Add slight random vertical movement for realism
                fishModel.position.y += Math.sin(fishModel.position.z) * 0.005;

                // Respawn fish when they hit the boundary
                if (fishModel.position.z > 10 || fishModel.position.z < -10) {
                    fishModel.position.set(
                        Math.random() * 20 - 10,
                        Math.random() * -3 - 2, // Keep fish underwater
                        directionRef.current === 1 ? -10 : 10 // Respawn in the opposite direction
                    );
                }
            });

            // Kill fish if temperature too high (e.g., above 33°C)
            if (temperature > 33) {
                fishModels.current.forEach((fishModel) => {
                    fishModel.scale.set(0, 0, 0); // Shrink fish to simulate death
                });
                setIsAlive(false); // Update state to indicate fish are "dead"
            }
        }

        // Respawn fish if temperature drops below the death threshold
        if (temperature <= 33 && !isAlive) {
            fishModels.current.forEach((fishModel) => {
                fishModel.scale.set(
                    Math.random() * 0.5 + 0.5, // Reset fish scale
                    Math.random() * 0.5 + 0.5,
                    Math.random() * 0.5 + 0.5
                );
            });
            setIsAlive(true); // Update state to indicate fish are "alive" again
        }
    });

    return <group ref={fishRef} />;
};

export default Fish;