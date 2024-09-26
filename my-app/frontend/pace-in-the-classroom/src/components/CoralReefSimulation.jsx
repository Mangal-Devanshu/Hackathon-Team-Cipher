import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import underwaterSound from '/sounds/underwater.mp3';
import '../styling/CoralReefSimulation.css';
import UnderwaterScene from './UnderwaterScene';

const CoralReefSimulation = ({ waterTexture }) => {
    const [temperature, setTemperature] = useState(25); // Default to healthy coral
    const [coralHealth, setCoralHealth] = useState(100); // 100% health initially
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
                <UnderwaterScene coralHealth={coralHealth} waterTexture={waterTexture} />
            </div>

            <div className="coral-health-status">
                <h3>Coral Health: {coralHealth}%</h3>
                <p>
                    {coralHealth === 100 ? "Healthy Coral 🌿" : coralHealth > 0 ? "Stressed Coral 😟" : "Bleached Coral 🏳"}
                </p>
                {coralHealth < 50 && <p>😢 Warning: High temperatures cause coral bleaching!</p>}
            </div>
        </div>
    );
};

export default CoralReefSimulation;