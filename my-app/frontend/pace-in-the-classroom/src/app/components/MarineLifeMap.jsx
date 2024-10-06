import React, { useState, useEffect } from 'react';
import MapInfo from './MapInfo';
import '../styling/MarineLifeMap.css'; // To add responsive animations and styling

const MarineLifeMap = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    // Data for interactive elements on the map, including individual sizes
    const marineLifeData = {
        Phytoplankton: {
            name: "Phytoplankton",
            imageSrc: '/icons/phytoplankton.png',
            description: "Hey, you found me! I'm phytoplankton, a tiny plant that floats in the Sunlit Zone. I produce a lot of the Earth's oxygen, helping everyone breathe!",
            coords: { top: '30%', left: '10%' }, // Adjusted for better placement
            size: '3vw', // Use vw for responsiveness
        },
        CoralReefs: {
            name: "Coral Reefs",
            imageSrc: '/icons/coral.png',
            description: "Nice! I’m a coral reef, home to thousands of marine species. I live in the Sunlit Zone where there’s plenty of light for the creatures around me.",
            coords: { top: '40%', left: '80%' },
            size: '5vw', // Use vw for responsiveness
        },
        Squid: {
            name: "Squid",
            imageSrc: '/icons/squid.png',
            description: "You found me! I’m a squid, and I shoot ink to protect myself from predators. I usually live in the Twilight Zone, where I can blend into the darker waters.",
            coords: { top: '70%', left: '55%' },
            size: '4vw', // Use vw for responsiveness
        },
        DeepSeaCreatures: {
            name: "Deep Sea Creatures",
            imageSrc: '/icons/anglerfish.png',
            description: "Boo! I’m a deep-sea creature, and I live in the Abyss. I use bioluminescence (light) to find prey and communicate with others down here in the dark.",
            coords: { top: '85%', left: '25%' },
            size: '4vw', // Use vw for responsiveness
        },
        Jellyfish: {
            name: "Jellyfish",
            imageSrc: '/icons/jellyfish.png',
            description: 'Hey there! I’m a Jellyfish, and I drift through the water, using my tentacles to capture food. You can find me in the Twilight Zone!',
            coords: { top: '53%', left: '10%' },
            size: '4vw',
        },
        Starfish: {
            name: "Starfish",
            imageSrc: '/icons/starfish.png',
            description: 'Hello! I’m a Starfish. I crawl on the ocean floor and can regrow lost arms! Look for me in the Sunlit Zone.',
            coords: { top: '43%', left: '47%' },
            size: '3vw',
        },

    };


    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    const handleMapClick = () => {
        setSelectedElement(null); // Dismiss popup when the user clicks anywhere on the map
    };

    useEffect(() => {
        if (selectedElement) {
            const timeout = setTimeout(() => setSelectedElement(null), 5000); // Auto hide after 5 seconds
            return () => clearTimeout(timeout);
        }
    }, [selectedElement]);

    return (
        <div className="marine-life-map-container bg-neutral-950 text-white p-6 rounded-lg shadow-lg border border-blue-700">
            {/* Title Section */}
            <h2 className="text-4xl bg-neutral-950 text-blue-700 p-4 rounded-lg border  border-blue-700 shadow-md shadow-blue-700">
                🧑‍🚀 Captain Splash’s Ocean Adventure! 🐠
            </h2>
            <p className="text-lg my-4">
                Hi there! I’m Captain Splash, and today, we’re going to dive deep into the ocean to meet some cool sea creatures! Ready? Let’s go! 🌊
            </p>

            <MapInfo />

            {/* Interactive Map Section */}
            <div
                className="marine-map bg-neutral-950 p-4 rounded-lg relative mb-6 border border-blue-700 shadow-md shadow-blue-700"
                onClick={handleMapClick} // Hide the description on map click
            >
                {/* Render interactive elements on the map */}
                {Object.keys(marineLifeData).map((key) => {
                    const data = marineLifeData[key];
                    return (
                        <img
                            key={key}
                            src={data.imageSrc}
                            alt={data.name}
                            className="interactive-element absolute"
                            style={{
                                top: data.coords.top,
                                left: data.coords.left,
                                width: data.size,
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent map click from firing
                                handleElementClick(data);
                            }}
                        />
                    );
                })}

                {/* Display a popup near the clicked element */}
                {selectedElement && (
                    <div
                        className="popup-box absolute bg-white text-black p-3 rounded-lg shadow-md shadow-blue-700 border border-blue-700"
                        style={{
                            top: selectedElement.coords.top,
                            left: selectedElement.coords.left,
                        }}
                    >
                        <strong>{selectedElement.name}</strong>
                        <p>{selectedElement.description}</p>
                    </div>
                )}
            </div>

            {/* Fun Facts Section */}
            <div className="fun-facts bg-neutral-950 rounded-lg shadow-md shadow-blue-700 border border-blue-700 p-4">
                <h4 className="text-xl bg-black text-white p-3 rounded-t-lg border border-blue-700 shadow-md shadow-blue-700 text-center">
                    🧑‍🚀 Captain Splash’s Fun Facts! 🌊
                </h4>
                <div className="text-white text-center">
                    <p className="my-4">Did you know? The ocean has layers just like a cake! Let’s explore them:</p>
                    <ul className="list-disc ml-auto mr-auto bg-neutral-950 text-left w-1/2">
                        <li>🎂 <strong>Sunlit Zone (0-200m):</strong> This is where the party happens! Most sea creatures live here.</li>
                        <li>🌑 <strong>Twilight Zone (200-1000m):</strong> It’s a bit darker here. Some fish have lights on their bodies!</li>
                        <li>⚫ <strong>Abyss (1000m+):</strong> Total darkness! Only the bravest creatures live here.</li>
                    </ul>
                    <p className="text-center">Tap on the creatures to learn where you can find them in the ocean!</p>
                </div>
            </div>
        </div>


    );

};

export default MarineLifeMap;