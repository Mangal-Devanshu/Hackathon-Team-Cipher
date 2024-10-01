import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import underwaterSound from '/sounds/underwater.mp3';
import '../styling/CoralReefSimulation.css';
import UnderwaterScene from './UnderwaterScene';

const CoralReefSimulation = ({ waterTexture }) => {
    const [temperature, setTemperature] = useState(25); // Default to healthy coral
    const [coralHealth, setCoralHealth] = useState(100); // 100% health initially
    const [fishAllDead, setFishAllDead] = useState(false); // Track if all fish are dead
    const [sceneKey, setSceneKey] = useState(0); // Key to force reset of the scene
    const [play, { stop }] = useSound(underwaterSound, { volume: 0.3 });

    useEffect(() => {
        play(); // Start underwater ambient sound
        return () => stop();
    }, [play, stop]);

    const updateCoralHealth = (temp) => {
        const health = Math.max(0, 100 - (temp - 25) * 5); // Coral health reduces with temp
        setCoralHealth(health);
    };

    const handleTemperatureChange = (e) => {
        const newTemp = parseFloat(e.target.value);
        setTemperature(newTemp);
        updateCoralHealth(newTemp);

        // If the temperature reaches or exceeds 32°C, set fishAllDead to true
        if (newTemp >= 32 && !fishAllDead) {
            setFishAllDead(true);
        }
    };

    const resetSimulation = () => {
        setTemperature(25); // Reset temperature to default
        setCoralHealth(100); // Reset coral health to 100%
        setFishAllDead(false); // Reset the fish death status
        setSceneKey(prevKey => prevKey + 1); // Change key to force scene reload
    };

    return (
        <div className="coral-reef-container">
            <h2>🌡 Coral Reef Health Simulation 🌊</h2>
            <p>Adjust the temperature and observe the impact on coral health and marine life!</p>

            <input
                type="range"
                min="20"
                max="35"
                step="0.1"
                value={temperature}
                onChange={handleTemperatureChange}
                className="temperature-slider"
            />
            <p>Temperature: {temperature}°C</p>

            <div style={{ height: '400px' }}>
                {/* Use sceneKey to force reloading the UnderwaterScene */}
                <UnderwaterScene key={sceneKey} coralHealth={coralHealth} waterTexture={waterTexture} />
            </div>

            <div className="coral-health-status">
                <h3>Coral Health: {coralHealth}%</h3>
                <p>
                    {coralHealth === 100 ? "🌿 Healthy Coral" :
                        coralHealth > 50 ? "😟 Stressed Coral" :
                            coralHealth > 0 ? "🏳 Bleached Coral" :
                                "💀 Dead Coral"}
                </p>
                {coralHealth < 50 && <p>😢 Warning: High temperatures cause coral bleaching!</p>}
            </div>

            {/* Display "All fish are dead" if the temperature once reached the max value */}
            {fishAllDead && <p style={{ color: 'red', fontWeight: 'bold' }}>All fish are dead.</p>}

            <button onClick={resetSimulation} className="reset-button">Reset Simulation</button>
        </div>
    );
};

export default CoralReefSimulation;