import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Import the info icon

export default function MapInfo() {
    return (
        <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
            {/* Container with hover-based expansion */}
            <div className="group relative cursor-pointer overflow-hidden bg-neutral-950 p-6 shadow-lg ring-1 ring-black transition-all duration-300 hover:p-10 hover:shadow-xl sm:mx-auto sm:max-w-md sm:rounded-lg sm:px-8 hover:max-w-lg hover:ring-gray-700">
                
                {/* Info Icon */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        {/* Info Icon using react-icons */}
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-700 transition-all duration-300 group-hover:bg-blue-900 z-10">
                            <FaInfoCircle className="h-10 w-10 text-white" /> {/* React Icon */}
                        </span>
                    </div>
                </div>
        
                {/* Text Content */}
                <div className="mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-48 group-hover:opacity-100">
                    <p className="text-lg text-white">
                        Discover hidden facts! Explore the map by finding six secret icons. Can you find them all?
                    </p>
                    <p className="mt-4 text-lg font-semibold text-blue-500">
                        Start exploring now! 
                    </p>
                </div>
            </div>
        </div>
    );
}
