import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const EarthSimulation = ({ data }) => {
    const [selectedEarth, setSelectedEarth] = useState(data[0]); // Initialize with the first item in the data prop
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the selected Earth
    const [isManualSelect, setIsManualSelect] = useState(false); // Track if a manual selection was made

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to view details!
        </Tooltip>
    );

    // Function to switch Earth models automatically
    useEffect(() => {
        let intervalId;

        // Switch to the next Earth model automatically every 10 seconds
        intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % data.length; // Loop back to the first item
            setCurrentIndex(nextIndex); // Update the current index
            setSelectedEarth(data[nextIndex]); // Update the selected Earth based on the current index
        }, 10000); // Set interval time to 10 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [currentIndex, data]);

    // Handle Earth model click
    const handleEarthClick = (earth) => {
        setSelectedEarth(earth); // Change selected Earth on click
        setCurrentIndex(data.findIndex((item) => item.id === earth.id)); // Update the current index
        setIsManualSelect(true); // Set manual select to true

        // Reset the timer to switch back to automatic selection after 10 seconds
        setTimeout(() => {
            setIsManualSelect(false); // Allow automatic switching again
        }, 10000); // 10 seconds delay
    };

    // Manual switch handlers
    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % data.length; // Get the next index
        setCurrentIndex(nextIndex); // Update the current index
        setSelectedEarth(data[nextIndex]); // Update the selected Earth based on the current index
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + data.length) % data.length; // Get the previous index
        setCurrentIndex(prevIndex); // Update the current index
        setSelectedEarth(data[prevIndex]); // Update the selected Earth based on the current index
    };

    return (
        <div className="flex justify-between items-center h-screen p-6 bg-black text-white">
            {/* Left Side: Earth Models in a Horizontal Layout */}
            <div className="flex items-center space-x-6 w-1/2 my-8">
                <div className="flex flex-col justify-center">
                    {/* Previous Arrow */}
                    <button onClick={handlePrevious} className="text-4xl cursor-pointer hover:text-blue-600 transition-colors duration-300">
                        &lt;
                    </button>
                </div>

                {data.map((earth) => (
                    <OverlayTrigger
                        key={earth.id}
                        placement="top"
                        overlay={renderTooltip} // Tooltip for each globe
                    >
                        <div
                            onClick={() => handleEarthClick(earth)} // Change selected Earth on click
                            className={`cursor-pointer transform transition-opacity duration-300 ${selectedEarth.id === earth.id ? 'opacity-100' : 'opacity-20'}`}
                        >
                            <img
                                src={earth.image}
                                alt={`Earth ${earth.id}`}
                                className="w-40 h-40 object-cover rounded-full transition-all duration-300"
                            />
                        </div>
                    </OverlayTrigger>
                ))}

                <div className="flex flex-col justify-center">
                    {/* Next Arrow */}
                    <button onClick={handleNext} className="text-4xl cursor-pointer hover:text-blue-600 transition-colors duration-300">
                        &gt;
                    </button>
                </div>
            </div>

            {/* Right Side: Corresponding Text */}
            <div className="w-1/2 text-left p-8 bg-gradient-to-br from-zinc-900 via-neutral-950 to-black rounded-lg relative shadow-lg shadow-blue-700">
                {/* Background Image Blur */}
                <div className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg" style={{ backgroundImage: "url('/path/to/your/texture.jpg')" }}></div>

                {/* Title */}
                <h1 className="text-5xl font-bold mb-6 relative z-10 my-8 mx-1 text-blue-700 text-shadow-lg">
                    {selectedEarth.id}
                </h1>

                {/* Content Text */}
                <div
                    className="text-lg text-justify text-gray-300 leading-relaxed relative z-10 my-2 mx-2 bg-opacity-80 p-4 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: selectedEarth.text }} // Render the HTML safely
                />
            </div>
        </div>
    );
};

export default EarthSimulation;
