import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../styling/Earth.css';

const EarthModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
        camera.position.set(0, 0, 30);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        mountRef.current.appendChild(renderer.domElement);

        // Add lighting to the scene
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        // Load the Earth model using GLTFLoader
        const loader = new GLTFLoader();
        loader.load('/models/earth.glb', (gltf) => {
            const earthModel = gltf.scene;
            scene.add(earthModel);
        });

        // OrbitControls to allow camera movement
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        // Clean up the renderer when the component unmounts
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
    );
};

export default EarthModel;
