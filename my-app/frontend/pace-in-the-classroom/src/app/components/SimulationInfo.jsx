import React from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Import the info icon

export default function SimulationInfo() {
    return (
        <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
            {/* Container with hover-based expansion */}
            <div className="group relative cursor-pointer overflow-hidden bg-black p-6 shadow-lg ring-1 ring-black transition-all duration-300 hover:p-10 hover:shadow-xl sm:mx-auto sm:max-w-md sm:rounded-lg sm:px-8 hover:max-w-lg hover:ring-gray-700">
                
                {/* Info Icon */}
                <div className="flex items-center justify-center">
                    <span className="grid h-11w-11 place-items-center rounded-full bg-blue-700 transition-all duration-300 group-hover:bg-blue-900 z-10">
                        <FaInfoCircle className="h-10 w-10 text-white" /> {/* React Icon */}
                    </span>
                </div>

                {/* Text Content */}
                <div className="mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-72 group-hover:opacity-100 text-justify">
                    <p className="text-lg text-center text-white">
                        <strong className="text-lg text-blue-500">Coral Reef Health Simulation</strong>
                    </p>
                    <p className="text-md text-white mt-2">
                        Adjust the water temperature to see its effects and click Reset to restore the reef:
                    </p>
                    <ul className="list-disc pl-5 text-md text-white mt-2">
                        <li>
                            <strong>Healthy Coral (less than 25°C):</strong> Coral is vibrant and thriving.
                        </li>
                        <li>
                            <strong>Coral Bleaching (30°C to 32°C):</strong> Coral expels algae, turning white and stressed.
                        </li>
                        <li>
                            <strong>Dead Coral (greater than 32°C):</strong> Prolonged heat can lead to coral death and ecosystem disruption.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
