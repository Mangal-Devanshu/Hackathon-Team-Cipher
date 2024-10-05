import React, { useState } from 'react';

export default function ReadDocs({ text }) {
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
                <div className={`absolute left-[-20rem] bottom-10 w-72 p-4 bg-black rounded-lg shadow-md shadow-blue-700 transition-transform duration-500 transform 
                                ${showInfo ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    {/* Close (X) icon */}
                    <button
                        onClick={handleCloseInfo}
                        className="absolute top-0 right-1 text-white hover:text-gray-400 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* Text area with pop out effect */}
                    <textarea
                        readOnly
                        value={text}
                        className="w-full h-[95px] p-2 bg-black text-white text-justify rounded-lg resize-none focus:outline-none"
                    />
                </div>
            )}

            {/* Info toggle button */}
            <button
                onClick={handleToggleInfo}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 hover:bg-blue-950 transition-all duration-300 shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="h-8 w-8">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                </svg>
            </button>
        </div>
    );
}
