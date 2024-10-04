import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water';
import { TextureLoader, CubeTextureLoader } from 'three';
import { useThree } from '@react-three/fiber';

const WaterVolume = () => {
    const waterRef = useRef();
    const sidesRef = useRef([]);
    const { scene } = useThree(); // Access the scene to apply the skybox

    // Adjustable parameters for realism
    const waterSurfaceSize = { width: 100, height: 100 }; // Water surface plane size
    const waterVolumeSize = { width: 100, height: 15, depth: 100 }; // Water volume size
    const waterColor = 0x013a63; // Water color (DodgerBlue)
    const waterOpacity = 0.7; // Surface opacity for better realism
    const distortionScale = 10.5; // Stronger distortion for waves
    const sideColor = 0x1d3557; // Separate color for the sides of the water volume
    const sideGlowColor = 0x1d3557; // Emissive glow color for sides (candescence)

    useEffect(() => {
        const textureLoader = new TextureLoader();
        const waterNormals = textureLoader.load('/textures/Water_normal.jpg', (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        });

        const cubeTextureLoader = new CubeTextureLoader();
        const skybox = cubeTextureLoader.load([
            '/textures/sky/yonder_ft.jpg', '/textures/sky/yonder_bk.jpg',
            '/textures/sky/yonder_up.jpg', '/textures/sky/yonder_dn.jpg',
            '/textures/sky/yonder_rt.jpg', '/textures/sky/yonder_lf.jpg',
        ]);

        scene.background = skybox;

        const waterGeometry = new THREE.PlaneGeometry(waterSurfaceSize.width, waterSurfaceSize.height);
        const water = new Water(waterGeometry, {
            textureWidth: 1024,
            textureHeight: 1024,
            waterNormals: waterNormals,
            sunDirection: new THREE.Vector3(1, 1, 1).normalize(),
            sunColor: 0xffffff,
            waterColor: waterColor,
            distortionScale: distortionScale,
            fog: true,
            transparent: true,
            opacity: waterOpacity,
            reflectivity: 0.2,
            side: THREE.DoubleSide,
        });

        water.rotation.x = -Math.PI / 2;
        water.position.y = waterVolumeSize.height / 3;
        waterRef.current.add(water);

        let time = 0;
        const animateWater = () => {
            requestAnimationFrame(animateWater);
            water.material.uniforms['time'].value += 1.0 / 60.0;
            time += 0.001;
            water.material.uniforms['time'].value = time;

            // Check if sides are fully loaded before applying the emissive effect
            sidesRef.current.forEach((side) => {
                if (side && side.material) { // Null check for side and material
                    const emissiveStrength = Math.abs(Math.sin(time * 2)) * 0.4;
                    side.material.emissive.setHex(sideGlowColor);
                    side.material.emissiveIntensity = emissiveStrength;
                }
            });
        };

        animateWater();
    }, [scene]);


    return (
        <group ref={waterRef}>
            {/* Water Volume - Custom Geometry without Top Face */}

            {/* Front Face */}
            <mesh
                ref={(el) => (sidesRef.current[0] = el)}
                position={[0, -(waterVolumeSize.height / 6), waterVolumeSize.depth / 2]}
                rotation={[0, 0, 0]}
            >
                <planeGeometry args={[waterVolumeSize.width, waterVolumeSize.height]} />
                <meshStandardMaterial
                    color={sideColor}
                    transparent={true}
                    opacity={0.5}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color(sideGlowColor)} // Add emissive color for glow
                    emissiveIntensity={0.1} // Set a base emissive intensity
                />
            </mesh>

            {/* Back Face */}
            <mesh
                ref={(el) => (sidesRef.current[1] = el)}
                position={[0, -(waterVolumeSize.height / 6), -waterVolumeSize.depth / 2]}
                rotation={[0, Math.PI, 0]}
            >
                <planeGeometry args={[waterVolumeSize.width, waterVolumeSize.height]} />
                <meshStandardMaterial
                    color={sideColor}
                    transparent={true}
                    opacity={0.5}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color(sideGlowColor)}
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Left Face */}
            <mesh
                ref={(el) => (sidesRef.current[2] = el)}
                position={[-waterVolumeSize.width / 2, -(waterVolumeSize.height / 6), 0]}
                rotation={[0, Math.PI / 2, 0]}
            >
                <planeGeometry args={[waterVolumeSize.depth, waterVolumeSize.height]} />
                <meshStandardMaterial
                    color={sideColor}
                    transparent={true}
                    opacity={0.5}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color(sideGlowColor)}
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Right Face */}
            <mesh
                ref={(el) => (sidesRef.current[3] = el)}
                position={[waterVolumeSize.width / 2, -(waterVolumeSize.height / 6), 0]}
                rotation={[0, -Math.PI / 2, 0]}
            >
                <planeGeometry args={[waterVolumeSize.depth, waterVolumeSize.height]} />
                <meshStandardMaterial
                    color={sideColor}
                    transparent={true}
                    opacity={0.5}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color(sideGlowColor)}
                    emissiveIntensity={0.1}
                />
            </mesh>
        </group>
    );
};

export default WaterVolume;