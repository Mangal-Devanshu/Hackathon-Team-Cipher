import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Asteroids = ({ count, direction }) => {
    const mountRef = useRef(null);
    const sceneRef = useRef();
    const rendererRef = useRef();

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Create a camera
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth * 0.9, window.innerHeight); // Decrease the width of the canvas
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create asteroids
        const asteroidCount = count; // Number of asteroids
        const asteroids = [];
        const asteroidGeometry = new THREE.CircleGeometry(0.05, 30); // Small circles
        const asteroidMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.6 }); // Blue-700 with 60% opacity

        for (let i = 0; i < asteroidCount; i++) {
            const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
            asteroid.position.x = (Math.random() - 0.5) * 10; // Random X position
            asteroid.position.y = (Math.random() - 0.5) * 10; // Random Y position (within the viewport)
            asteroid.position.z = (Math.random() - 0.5) * 10; // Random Z position
            scene.add(asteroid);
            asteroids.push(asteroid);
        }

        // Helper function to update position based on direction
        const updatePosition = (asteroid) => {
            switch (direction) {
                case 'up':
                    asteroid.position.y += 0.03;
                    if (asteroid.position.y > 5) asteroid.position.y = Math.random() * -10 - 1;
                    break;
                case 'down':
                    asteroid.position.y -= 0.03;
                    if (asteroid.position.y < -5) asteroid.position.y = Math.random() * 10 + 1;
                    break;
                case 'left':
                    asteroid.position.x -= 0.03;
                    if (asteroid.position.x < -5) asteroid.position.x = Math.random() * 10 + 1;
                    break;
                case 'right':
                    asteroid.position.x += 0.03;
                    if (asteroid.position.x > 5) asteroid.position.x = Math.random() * -10 - 1;
                    break;
                default:
                    asteroid.position.y += 0.03;
                    if (asteroid.position.y > 5) asteroid.position.y = Math.random() * -10 - 1;
            }
        };

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Move asteroids based on direction
            asteroids.forEach((asteroid) => {
                updatePosition(asteroid);
            });

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup function
        return () => {
            // Properly dispose of geometry, materials, and renderer
            asteroids.forEach((asteroid) => {
                asteroid.geometry.dispose();
                asteroid.material.dispose();
                scene.remove(asteroid);
            });

            if (rendererRef.current) {
                rendererRef.current.dispose();
            }

            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [direction]); // Add `direction` to dependency array to handle prop change

    return <div ref={mountRef} />;
};

export default Asteroids;
