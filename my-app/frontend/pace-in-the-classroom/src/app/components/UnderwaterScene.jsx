import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Fish from './Fish';
import Coral from './Coral';
import WaterVolume from './WaterVolume';
import Seabed from './Seabed';
import SeaRock from './SeaRock';
import CameraAnimation from './CameraAnimation'; // Import the new CameraAnimation component

const UnderwaterScene = ({ coralHealth }) => {
    const temperature = 25 + (100 - coralHealth) / 5;

    return (
        <Canvas shadows camera={{ fov: 50 }} class="rounded-lg">
            <CameraAnimation /> {/* Include the camera animation component */}

            {/* Ambient Light */}
            <ambientLight intensity={0.5} />

            {/* Directional Light casting shadows */}
            <directionalLight
                castShadow
                position={[10, 20, 10]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
            />

            {/* Water Surface */}
            <WaterVolume />

            {/* Seabed */}
            <Seabed />

            {/* Fish and Coral */}
            <Suspense fallback={null}>
                {[...Array(10)].map((_, i) => (
                    <Fish key={i} temperature={temperature} />
                ))}
                {[...Array(5)].map((_, i) => (
                    <Coral key={i} temperature={temperature} />
                ))}
            </Suspense>

            <SeaRock />
            <OrbitControls />
        </Canvas>
    );
};

export default UnderwaterScene;