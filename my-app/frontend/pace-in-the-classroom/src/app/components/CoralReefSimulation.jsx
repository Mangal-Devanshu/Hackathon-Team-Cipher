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

        // If the temperature reaches or exceeds 34°C, set fishAllDead to true
        if (newTemp >= 34 && !fishAllDead) {
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
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div className="border-blue-700 shadow-lg shadow-green-700 p-6 rounded-lg w-4/6 bg-neutral-950 text-white">
                <h2 className="text-2xl text-center font-bold mb-4">Coral Reef Health Simulation</h2>
                <p className="text-center" >Adjust the temperature and observe the impact on coral health and marine life!</p>

                <input
                    type="range"
                    min="20"
                    max="35"
                    step="0.1"
                    value={temperature}
                    onChange={handleTemperatureChange}
                    className="temperature-slider flex justify-center my-4"
                />
                <p className='text-center'>Temperature: {temperature}°C</p>

                <div className="my-4" style={{ height: '400px' }}>
                    {/* Use sceneKey to force reloading the UnderwaterScene */}
                    <UnderwaterScene key={sceneKey} coralHealth={coralHealth} waterTexture={waterTexture} />
                </div>

                <div className=" my-4 border border-blue-700 bg-neutral-950 text-white p-4 rounded-lg">
                    <h3 className="text-xl text-center bg-neutral-950 font-bold">Coral Health: {coralHealth}%</h3>
                    <p className='bg-neutral-950 text-center'>
                        {coralHealth === 100 ? "🌿 Healthy Coral" :
                            coralHealth > 50 ? "😟 Stressed Coral" :
                                coralHealth > 0 ? "🏳 Bleached Coral" :
                                    "💀 Dead Coral"}
                    </p>
                    {coralHealth < 50 && <p className="text-red-500 ">😢 Warning: High temperatures cause coral bleaching!</p>}
                </div>


                {fishAllDead && <p className='text-center' style={{ color: 'red', fontWeight: 'bold' }}>All fish are dead.</p>}
                <div className='flex justify-center'>
                    <button onClick={resetSimulation} className="reset-button bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
                        Reset Simulation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoralReefSimulation;
