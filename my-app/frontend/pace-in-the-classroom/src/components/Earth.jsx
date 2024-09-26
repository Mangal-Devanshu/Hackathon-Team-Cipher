import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import getStarfield from '../three-earth/getStarfield.js';
import { getFresnelMat } from '../three-earth/getFresnelMat.js';
import '../styling/Earth.css';

const Earth = () => {
    const mountRef = useRef(null);

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
            map: loader.load('/textures/earth/00_earthmap1k.jpg'),
            specularMap: loader.load('/textures/earth/02_earthspec1k.jpg'),
            bumpMap: loader.load('/textures/earth/00_earthmap1k.jpg'),
            bumpScale: 0.3
        });
        material.map.colorSpace = THREE.SRGBColorSpace;
        const earthMesh = new THREE.Mesh(geometry, material);
        earthGroup.add(earthMesh);

        const cloudsMat = new THREE.MeshStandardMaterial({
            map: loader.load('/textures/earth/04_earthcloudmap.jpg'),
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending,
            alphaMap: loader.load('/textures/earth/05_earthcloudmaptrans.jpg'),
        });
        const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
        cloudsMesh.scale.setScalar(1.01); // Slightly larger than the earthMesh to simulate clouds
        earthGroup.add(cloudsMesh);

        const fresnelMat = getFresnelMat();
        const glowMesh = new THREE.Mesh(geometry, fresnelMat);
        glowMesh.scale.setScalar(0.92);
        earthGroup.add(glowMesh);

        const stars = getStarfield({ numStars: 1600 });
        scene.add(stars);

        const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
        sunLight.position.set(-2, 0.5, 1.5);
        scene.add(sunLight);

        // Satellite loader
        const satelliteLoader = new GLTFLoader();
        let satelliteMesh;
        satelliteLoader.load('/models/satellite.glb', (gltf) => {
            satelliteMesh = gltf.scene;
            satelliteMesh.scale.set(0.002, 0.002, 0.002); // Small size for the satellite
            earthGroup.add(satelliteMesh);
        });

        // Custom orbit parameters
        const satelliteOrbitRadiusX = 1.6; // Custom orbit radius on X-axis
        const satelliteOrbitRadiusY = 0.4; // Custom orbit radius on Y-axis
        const satelliteOrbitRadiusZ = 0.7; // Custom orbit radius on Z-axis
        const satelliteSpeed = 0.0001; // Significantly reduced speed

        // Create a curve path for the satellite
        const curve = new THREE.EllipseCurve(
            0, 0,                        // Center of the orbit
            satelliteOrbitRadiusX,        // X radius
            satelliteOrbitRadiusZ,        // Z radius
            0, 2 * Math.PI,               // Start and end angle
            false,                        // Clockwise
            0                             // Rotation
        );

        // Points along the curve path
        const points = curve.getPoints(100);
        const path = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
        let time = 0; // Time variable to control the position along the path

        const animate = () => {
            requestAnimationFrame(animate);
            earthMesh.rotation.y += 0.002;
            cloudsMesh.rotation.y += 0.0023;
            glowMesh.rotation.y += 0.002;
            stars.rotation.y -= 0.0002;

            // Update satellite position if loaded
            if (satelliteMesh) {
                const position = path.getPointAt((time % 1) * 1); // Get position along the path
                satelliteMesh.position.set(position.x, satelliteOrbitRadiusY * Math.sin(time * Math.PI * 2) + 1, position.z); // Adjust position along the path with Y oscillation
                satelliteMesh.rotation.y += 0.01; // Slow rotation of the satellite itself
                time += satelliteSpeed; // Increment time for slow speed
            }

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
        </div>
    );
};

export default Earth;    