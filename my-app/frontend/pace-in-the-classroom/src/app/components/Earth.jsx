import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { getFresnelMat } from './getFresnelMat.js';
import NasaFooter from './NasaFooter.jsx'; // Import the footer component
import '../styling/Earth.css';

const Earth = () => {
    const mountRef = useRef(null);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [showFooter, setShowFooter] = useState(true); // State to track the footer visibility
    let animationId = null; // For animation frame reference

    // Define the messages to display
    const messages = [
        "Explore the beauty of our planet Earth.",
        "Discover new horizons and possibilities.",
        "Witness the wonders of our universe.",
        "Embrace the adventure and mystery of space."
    ];

    // Scroll listener to hide footer on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowFooter(false); // Hide footer when scroll passes 150px
            } else {
                setShowFooter(true); // Show footer when scrolled back to the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener on component unmount
        };
    }, []);

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
        const camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 1000);
        camera.position.set(0, 0, 3); // Set camera directly in front of Earth
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

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

        // Load the high-res textures
        const earthColorMap = loader.load('/new_textures/earth_color_10K_optimized.png');
        const earthLandOceanMap = loader.load('/new_textures/earth_landocean_4K_optimized.png');
        const topographyMap = loader.load('/new_textures/topography_5K_optimized.png');
        const nightLightsMap = loader.load('/new_textures/earth_nightlights_10K_optimized.png');
        const cloudMap = loader.load('/new_textures/earth_clouds_8K_optimized.png');

        // Earth material for day textures, normal map, bump map, roughness map, and clearcoat
        const earthMaterial = new THREE.MeshPhysicalMaterial({
            map: earthColorMap,                // Base color map
            roughnessMap: earthLandOceanMap,    // Roughness map for land and ocean
            bumpMap: topographyMap,             // Bump map for terrain details
            bumpScale: 3,                    // Adjust bump intensity
            roughness: 0.8,                     // General roughness for Earth's surface
            clearcoat: 1,                       // Reflection for atmosphere
            clearcoatRoughness: 0.1,            // Smooth reflection for atmosphere
        });

        const earthMesh = new THREE.Mesh(geometry, earthMaterial);
        earthGroup.add(earthMesh);

        // Cloud layer with subtle transparency
        const cloudsMaterial = new THREE.MeshStandardMaterial({
            map: cloudMap,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending,
        });
        const cloudsMesh = new THREE.Mesh(geometry, cloudsMaterial);
        cloudsMesh.scale.setScalar(1.01); // Slightly larger than earthMesh
        earthGroup.add(cloudsMesh);

        // Night lights material
        const nightLightsMaterial = new THREE.MeshPhongMaterial({
            map: nightLightsMap,
            transparent: true,
            blending: THREE.AdditiveBlending,
            opacity: 2.5,  // Slightly dimmed to blend with day texture
        });
        const nightLightsMesh = new THREE.Mesh(geometry, nightLightsMaterial);
        earthGroup.add(nightLightsMesh);

        // Add Fresnel effect for atmosphere/glow
        const fresnelMat = getFresnelMat();
        const glowMesh = new THREE.Mesh(geometry, fresnelMat);
        glowMesh.scale.setScalar(0.94); // Slightly smaller to give a glow around the Earth
        earthGroup.add(glowMesh);

        // Add sun-like directional light
        const sunLight = new THREE.DirectionalLight(0xffffff, 3.5);
        sunLight.position.set(-2, 0.5, 1.5);
        scene.add(sunLight);

        // Satellite loader (optional)
        const satelliteLoader = new GLTFLoader();
        let satelliteMesh;
        satelliteLoader.load('/models/satellite.glb', (gltf) => {
            satelliteMesh = gltf.scene;
            satelliteMesh.scale.set(0.0025, 0.0025, 0.0025); // Small size for the satellite
            earthGroup.add(satelliteMesh);
        });

        // Custom orbit parameters
        const satelliteOrbitRadiusX = 1.6;
        const satelliteOrbitRadiusY = 0.4;
        const satelliteOrbitRadiusZ = 0.7;
        const satelliteSpeed = 0.00009;

        const curve = new THREE.EllipseCurve(
            0, 0,
            satelliteOrbitRadiusX,
            satelliteOrbitRadiusZ,
            0, 2 * Math.PI,
            false,
            0
        );

        const points = curve.getPoints(100);
        const path = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
        let time = 0;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            earthMesh.rotation.y += 0.002;
            cloudsMesh.rotation.y += 0.0023;
            glowMesh.rotation.y += 0.002;

            if (satelliteMesh) {
                const position = path.getPointAt((time % 1) * 1);
                satelliteMesh.position.set(position.x, satelliteOrbitRadiusY * Math.sin(time * Math.PI * 2) + 1, position.z);
                satelliteMesh.rotation.y += 0.01;
                time += satelliteSpeed;
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
            // Cleanup: remove animation frame, event listeners, and renderer DOM element
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', null);

            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }

            renderer.dispose();
        };
    }, []);

    return (
        <div>
            <div ref={mountRef} className="w-full h-[90vh] overflow-hidden"></div>
            {showFooter && <NasaFooter />} {/* Conditionally render NasaFooter based on scroll */}
        </div>
    );
};

export default Earth;
