import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water';
import { TextureLoader } from 'three';

const WaterSurface = () => {
    const waterRef = useRef();

    useEffect(() => {
        const textureLoader = new TextureLoader();
        const waterNormals = textureLoader.load('/textures/Water_normal.jpg', (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        });

        const waterGeometry = new THREE.PlaneGeometry(100, 100);
        const water = new Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunDirection: new THREE.Vector3(1, 1, 1),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,  // Deep water color
            distortionScale: 3.7,
            fog: false,
            transparent: true,
            opacity: 0.7,          // Set opacity to a decent value
        });

        water.rotation.x = -Math.PI / 2;
        water.position.y = 0;
        waterRef.current.add(water);

        let time = 0;
        const animateWater = () => {
            requestAnimationFrame(animateWater);
            water.material.uniforms['time'].value += 1.0 / 60.0;
            time += 0.001;
            water.material.uniforms['time'].value = time;
        };
        animateWater();
    }, []);

    return <group ref={waterRef} />;
};

export default WaterSurface;