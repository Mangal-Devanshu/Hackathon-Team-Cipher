import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Fish from './Fish';
import Coral from './Coral';
import WaterSurface from './WaterSurface';

const UnderwaterScene = ({ coralHealth }) => {
    const temperature = 25 + (100 - coralHealth) / 5;

    return (
        <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} />

            {/* Water Surface */}
            <WaterSurface />

            {/* Add multiple fishes */}
            <Suspense fallback={null}>
                {[...Array(10)].map((_, i) => (
                    <Fish key={i} temperature={temperature} /> // Pass temperature to affect fish
                ))}
                {[...Array(5)].map((_, i) => (
                    <Coral key={i} temperature={temperature} /> // Pass temperature to affect coral
                ))}
            </Suspense>

            <OrbitControls />
        </Canvas>
    );
};

export default UnderwaterScene;