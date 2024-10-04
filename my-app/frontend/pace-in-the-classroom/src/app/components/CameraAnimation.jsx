import { useThree, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const CameraAnimation = () => {
    const { camera } = useThree(); // Access the default camera
    const startY = 10; // Start position above water
    const endY = -5; // End position below water
    const moveDuration = 3; // Duration for the transition in seconds

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        // Linearly interpolate (lerp) the Y position from startY to endY
        const newY = startY - Math.min((elapsedTime / moveDuration) * (startY - endY), startY - endY);

        // Update the camera's position
        camera.position.set(50, newY, 0);

        // Optionally, adjust the camera target or rotation
        camera.lookAt(-180, 50, 0);
    });

    return null; // No need to return anything as this component only updates the camera
};

export default CameraAnimation;