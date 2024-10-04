import React, { useState } from 'react';

export default function ReadDocs({ text }) {
    const [showInfo, setShowInfo] = useState(false); // State to toggle the info textarea

    const handleToggleInfo = () => {
        setShowInfo((prev) => !prev); // Toggle the visibility of the info textarea
    };

    return (
        <div className="relative flex flex-col items-start"> {/* Align items to the left */}
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

            {showInfo && (
                <div className="mt-2 w-80 p-4 bg-black rounded-lg shadow-md shadow-blue-700 transition-transform duration-300 transform">
                    <textarea
                        readOnly
                        value={text}
                        className="w-full h-28 p-3 bg-neutral-900 text-white text-justify rounded-lg resize-none focus:outline-none"
                    />
                </div>
            )}
        </div>
    );
}
