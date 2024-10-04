import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Coral = ({ temperature, reset }) => {
    const coralRef = useRef();
    const [coralModels, setCoralModels] = useState([]);

    // Variables to control coral properties directly
    const coralCount = 20; // Number of coral instances
    const coralScaleFactor = 8; // Scale factor for coral size
    const coralSpreadX = 100; // X-axis spread for coral placement
    const coralSpreadZ = 100; // Z-axis spread for coral placement

    const textureLoader = new THREE.TextureLoader();
    const coralTextures = {
        baseColor: textureLoader.load('/textures/Coral/Coral_002_basecolor.jpg'),
        normal: textureLoader.load('/textures/Coral/Coral_002_normal.jpg'),
        roughness: textureLoader.load('/textures/Coral/Coral_002_roughness.jpg'),
        ambientOcclusion: textureLoader.load('/textures/Coral/Coral_002_ambientOcclusion.jpg'),
        height: textureLoader.load('/textures/Coral/Coral_002_height.png'),
    };

    const loadCorals = () => {
        const loader = new GLTFLoader();
        const newCoralModels = [];

        for (let i = 0; i < coralCount; i++) {
            loader.load('/models/Coral.glb', (gltf) => {
                const coralModel = gltf.scene;
                const randomScale = Math.random() * 0.3 + 0.2;
                coralModel.scale.set(
                    randomScale * coralScaleFactor,
                    randomScale * coralScaleFactor,
                    randomScale * coralScaleFactor
                );
                coralModel.position.set(
                    Math.random() * coralSpreadX - coralSpreadX / 2,
                    -8,
                    Math.random() * coralSpreadZ - coralSpreadZ / 2
                );
                coralModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            map: coralTextures.baseColor,
                            normalMap: coralTextures.normal,
                            roughnessMap: coralTextures.roughness,
                            aoMap: coralTextures.ambientOcclusion,
                            displacementMap: coralTextures.height,
                            displacementScale: 0.1,
                        });

                        const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());
                        child.material.color.set(randomColor);
                    }
                });

                if (coralRef.current) {
                    coralRef.current.add(coralModel);
                    newCoralModels.push(coralModel);
                }
            });
        }

        setCoralModels(newCoralModels);
    };

    useEffect(() => {
        loadCorals();
        return () => {
            coralModels.forEach((coral) => {
                coral.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) {
                            child.material.dispose();
                        }
                    }
                });
                if (coralRef.current) {
                    coralRef.current.remove(coral);
                }
            });
        };
    }, [coralCount, coralScaleFactor, coralSpreadX, coralSpreadZ]);

    useEffect(() => {
        if (coralModels.length > 0) {
            coralModels.forEach((coral) => {
                coral.traverse((child) => {
                    if (child.isMesh) {
                        if (temperature > 25) {
                            const coralHealth = Math.max(0, 100 - (temperature - 25) * 5);
                            const originalColor = child.material.color.clone();

                            const color = originalColor.lerp(
                                new THREE.Color(0xffffff), // Bleached coral (white)
                                1 - coralHealth / 100
                            );

                            child.material.color.set(color);
                        } else {
                            // Keep the original color if temperature is 25 or below
                            child.material.color.set(child.material.color);
                        }
                    }
                });

                setCoralModels((prevModels) =>
                    prevModels.filter((coral, index) => {
                        const coralHealth = Math.max(0, 100 - (temperature - 25) * 5);
                        if (temperature > 25 && coralHealth <= index * (100 / prevModels.length)) {
                            if (coralRef.current) coralRef.current.remove(coral);
                            return false; // Remove this coral
                        }
                        return true; // Keep this coral
                    })
                );
            });
        }
    }, [temperature, coralModels]);


    // Reset function to clear coral models
    useEffect(() => {
        if (reset) {
            coralModels.forEach((coral) => {
                coral.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) {
                            child.material.dispose();
                        }
                    }
                });
                if (coralRef.current) {
                    coralRef.current.remove(coral);
                }
            });
            setCoralModels([]); // Clear the coral models
            loadCorals(); // Reload corals
        }
    }, [reset]);

    return <group ref={coralRef} />;
};

export default Coral;