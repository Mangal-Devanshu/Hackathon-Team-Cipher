import React, { useState, useEffect } from 'react';
import '../styling/MarineLifeMap.css'; // To add responsive animations and styling

const MarineLifeMap = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    // Data for interactive elements on the map, including individual sizes
    const marineLifeData = {
        Phytoplankton: {
            name: "Phytoplankton",
            imageSrc: '/icons/phytoplankton.png',
            description: ' Phytoplankton helps produce oxygen for the planet!',
            coords: { top: '24%', left: '10%' },
            size: '3.5vw', // Specific size in vw for Phytoplankton
        },
        CoralReefs: {
            name: "Coral Reefs",
            imageSrc: '/icons/coral.png',
            description: 'Coral Reefs are home to many marine species!',
            coords: { top: '43%', left: '60%' },
            size: '6vw', // Specific size in vw for Coral Reefs
        },
        Squid: {
            name: "Squid",
            imageSrc: '/icons/squid.png',
            description: ' Squid can shoot ink to escape predators!',
            coords: { top: '65%', left: '47%' },
            size: '6vw', // Specific size in vw for Squid
        },
        DeepSeaCreatures: {
            name: "Deep Sea Creatures",
            imageSrc: '/icons/anglerfish.png',
            description: ' Anglerfish uses light to catch prey in the deep sea!',
            coords: { top: '89%', left: '25%' },
            size: '5vw', // Specific size in vw for Deep Sea Creatures
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
        <div className="marine-life-map-container">
            <h2>🧑‍🚀 Captain Splash’s Ocean Adventure! 🐠</h2>
            <p>
                Hi there! I’m Captain Splash, and today, we’re going to dive deep into the ocean to meet some cool sea creatures! Ready? Let’s go! 🌊
            </p>

            <div
                className="marine-map"
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
                            className="interactive-element"
                            style={{
                                top: data.coords.top,
                                left: data.coords.left,
                                width: data.size, // Use the specific size for each element
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
                        className="popup-box"
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

            <div className="fun-facts">
                <h4>🧑‍🚀 Captain Splash’s Fun Facts! 🌊</h4>
                <p>Did you know? The ocean has layers just like a cake! Let’s explore them:</p>
                <ul>
                    <li>🎂 <strong>Sunlit Zone (0-200m):</strong> This is where the party happens! Most sea creatures live here.</li>
                    <li>🌑 <strong>Twilight Zone (200-1000m):</strong> It’s a bit darker here. Some fish have lights on their bodies!</li>
                    <li>⚫ <strong>Abyss (1000m+):</strong> Total darkness! Only the bravest creatures live here.</li>
                </ul>
            </div>
        </div>
    );
};

export default MarineLifeMap;
