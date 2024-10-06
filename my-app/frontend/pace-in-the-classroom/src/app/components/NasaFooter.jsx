import React from 'react';
import NasaLogo from '/assets/nasa.png';
import "../styling/NasaFooter.css"
function NasaFooter() {
    return (
        <div className="w-full fixed bottom-1 flex items-center z-50 bg-black bg-opacity-60 p-3 rounded-lg shadow-lg justify-between">
            <div className="flex flex-row items-center">
                <img src={NasaLogo} alt="NASA Logo" className="w-12 mr-4" />
                <div className="relative overflow-hidden whitespace-nowrap mt-2">
                    <h2 className="text-white font-bold text-lg border-r-2 border-white pr-3 animate-typing">
                        PACE IN THE CLASSROOM
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default NasaFooter;