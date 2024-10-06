import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Import the info icon

export default function InfoButton({ text }) {
    const [showInfo, setShowInfo] = useState(false); // State to toggle the info textarea

    const handleToggleInfo = () => {
        setShowInfo((prev) => !prev); // Toggle the visibility of the info textarea
    };

    const handleCloseInfo = () => {
        setShowInfo(false); // Close the info textarea
    };

    return (
        <div className="relative flex flex-col items-center"> {/* Center items horizontally */}
            {/* Info box appears to the left of the button */}
            {showInfo && (
                <div className={`absolute left-[-20rem] bottom-10 w-72 p-3 bg-black rounded-lg shadow-md shadow-blue-700 transition-transform duration-500 transform 
                                ${showInfo ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    {/* Close (X) icon */}
                    <button
                        onClick={handleCloseInfo}
                        className="absolute top-0 right-1 text-white hover:text-gray-400 transition-all duration-300 bg-red-600 rounded-full mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* Text area with pop out effect */}
                    <textarea
                        readOnly
                        value={text}
                        className="w-full h-[95px] mt-3 p-2 bg-black text-white text-justify rounded-lg resize-none focus:outline-none"
                    />
                </div>
            )}

            {/* Info toggle button with info icon */}
            <button
                onClick={handleToggleInfo}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 hover:bg-blue-950 transition-all duration-300 shadow-lg">
                <FaInfoCircle className="h-8 w-8 text-white" /> {/* Use info icon from react-icons */}
            </button>
        </div>
    );
}
