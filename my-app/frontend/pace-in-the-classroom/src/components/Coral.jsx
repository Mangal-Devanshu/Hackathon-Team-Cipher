import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Coral = ({ temperature }) => {
    const coralRef = useRef();
    const [coralModels, setCoralModels] = useState([]);

    useEffect(() => {
        const loader = new GLTFLoader();
        const coralCount = 20; // Fixed number of corals

        // Load coral models only once
        for (let i = 0; i < coralCount; i++) {
            loader.load('/models/Coral.glb', (gltf) => {
                const coralModel = gltf.scene;

                // Randomize coral size and position
                const randomScale = Math.random() * 0.3 + 0.2;
                const scaleFactor = 5;
                coralModel.scale.set(randomScale * scaleFactor, randomScale * scaleFactor, randomScale * scaleFactor);

                coralModel.position.set(
                    Math.random() * 20 - 10, // Spread on the X-axis
                    Math.random() * 1 - 0.5, // Y-axis random position
                    Math.random() * 20 - 10  // Spread on the Z-axis
                );

                // Set initial color (healthy coral)
                coralModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Initial coral color (healthy)
                    }
                });

                coralRef.current.add(coralModel);
                setCoralModels((prev) => [...prev, coralModel]);
            });
        }
    }, []);

    useEffect(() => {
        // Update coral appearance and removal based on temperature
        coralModels.forEach((coral, index) => {
            coral.traverse((child) => {
                if (child.isMesh) {
                    const coralHealth = Math.max(0, 100 - (temperature - 25) * 5); // Reduce health with increasing temperature
                    const color = new THREE.Color().lerpColors(
                        new THREE.Color(0xffa500), // Healthy coral color
                        new THREE.Color(0xffffff), // Bleached coral color
                        1 - coralHealth / 100 // Transition based on coral health
                    );
                    child.material.color.set(color);

                    // Dispose coral dynamically as health drops close to zero
                    if (coralHealth <= index * (100 / coralModels.length)) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();

                        coralRef.current.remove(coral);
                        setCoralModels((prev) => prev.filter((_, i) => i !== index));
                    }
                }
            });
        });
    }, [temperature, coralModels]);

    return <group ref={coralRef} />;
};

export default Coral;