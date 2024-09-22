import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import getStarfield from '../three-earth/getStarfield.js';
import { getFresnelMat } from '../three-earth/getFresnelMat.js';
import '../styling/Earth.css';

const Earth = () => {
    const mountRef = useRef(null);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    // Define the messages to display
    const messages = [
        "Explore the beauty of our planet Earth.",
        "Discover new horizons and possibilities.",
        "Witness the wonders of our universe.",
        "Embrace the adventure and mystery of space."
    ];

    useEffect(() => {
        // Update message every 3 seconds
        const messageInterval = setInterval(() => {
            setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 3000);

        return () => clearInterval(messageInterval);
    }, [messages.length]);

    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
        camera.position.set(0, 0, 3); // Set camera directly in front of Earth
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        mountRef.current.appendChild(renderer.domElement);
        THREE.ColorManagement.enabled = true;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

        const earthGroup = new THREE.Group();
        scene.add(earthGroup);

        // Initialize OrbitControls with zoom and pan disabled
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;

        const loader = new THREE.TextureLoader();
        const geometry = new THREE.SphereGeometry(1, 64, 64); // Use SphereGeometry for a perfect sphere
        const material = new THREE.MeshPhongMaterial({
            map: loader.load('/textures/00_earthmap1k.jpg'),
            specularMap: loader.load('/textures/02_earthspec1k.jpg'),
            bumpMap: loader.load('/textures/01_earthbump1k.jpg'),
            bumpScale: (0.03)
        });
        material.map.colorSpace = THREE.SRGBColorSpace;
        const earthMesh = new THREE.Mesh(geometry, material);
        earthGroup.add(earthMesh);

        const cloudsMat = new THREE.MeshStandardMaterial({
            map: loader.load('/textures/04_earthcloudmap.jpg'),
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            alphaMap: loader.load('/textures/05_earthcloudmaptrans.jpg'),
        });
        const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
        cloudsMesh.scale.setScalar(1.003); // Slightly larger than the earthMesh to simulate clouds
        earthGroup.add(cloudsMesh);

        const fresnelMat = getFresnelMat();
        const glowMesh = new THREE.Mesh(geometry, fresnelMat);
        glowMesh.scale.setScalar(1.01);
        earthGroup.add(glowMesh);

        const stars = getStarfield({ numStars: 2000 });
        scene.add(stars);

        const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
        sunLight.position.set(-2, 0.5, 1.5);
        scene.add(sunLight);

        const satelliteGeometry = new THREE.SphereGeometry(0.05, 32, 32);
        const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
        earthGroup.add(satelliteMesh);

        const satelliteOrbitRadius = 1.5;

        const animate = () => {
            requestAnimationFrame(animate);
            earthMesh.rotation.y += 0.002;
            cloudsMesh.rotation.y += 0.0023;
            glowMesh.rotation.y += 0.002;
            stars.rotation.y -= 0.0002;

            // Update satellite position
            satelliteMesh.position.x = satelliteOrbitRadius * Math.cos(Date.now() * 0.001);
            satelliteMesh.position.z = satelliteOrbitRadius * Math.sin(Date.now() * 0.001);
            satelliteMesh.position.y = 0.2;

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="earth-container">
            <div ref={mountRef} style={{ width: '100%', height: '100vh', overflow: 'hidden' }} />
            <div className="text-container" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'white', zIndex: 10 }}>
                <h1>{messages[currentMessageIndex]}</h1>
                <p>Enjoy the view of our planet Earth.</p>
            </div>
        </div>
    );
};

export default Earth;
