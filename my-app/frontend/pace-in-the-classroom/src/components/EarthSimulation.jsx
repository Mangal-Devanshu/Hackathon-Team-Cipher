import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const EarthSimulation = ({ data }) => {
    // State to track which Earth is selected
    const [selectedEarth, setSelectedEarth] = useState(data[0]); // Initialize with the first item in the data prop

    // Function to render Tooltip
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to view details!
        </Tooltip>
    );

    return (
        <div className="flex justify-between items-center h-screen p-6 bg-black text-white">
            {/* Left Side: Earth Models in a Horizontal Layout */}
            <div className="flex items-center space-x-6 w-1/2 my-8">
                {data.map((earth) => (
                    <OverlayTrigger
                        key={earth.id}
                        placement="top"
                        overlay={renderTooltip} // Tooltip for each globe
                    >
                        <div
                            onClick={() => setSelectedEarth(earth)} // Change selected Earth on click
                            className={`cursor-pointer transform transition-opacity duration-300 ${selectedEarth.id === earth.id ? 'opacity-100' : 'opacity-50'}`}
                        >
                            <img
                                src={earth.image}
                                alt={`Earth ${earth.id}`}
                                className="w-40 h-40 object-cover rounded-full transition-all duration-300"
                            />
                        </div>
                    </OverlayTrigger>
                ))}
            </div>

            {/* Right Side: Corresponding Text */}
            <div className="w-1/2 text-left p-8 bg-gradient-to-br from-gray-800 via-black to-gray-900 rounded-lg shadow-lg relative backdrop-blur-md bg-opacity-60 border border-gray-600">
                {/* Background Image Blur */}
                <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg" style={{ backgroundImage: "url('/path/to/your/texture.jpg')" }}></div>

                {/* Title */}
                <h1 className="text-5xl font-bold mb-6 relative z-10 my-6 mx-1 text-blue-700">
                    {selectedEarth.id}
                </h1>

                {/* Content Text */}
                <div
                    className="text-lg text-gray-200 relative z-10 my-2 mx-2"
                    dangerouslySetInnerHTML={{ __html: selectedEarth.text }} // Render the HTML safely
                />

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-red-600 opacity-20"></div>
            </div>
        </div>
    );
};

export default EarthSimulation;
