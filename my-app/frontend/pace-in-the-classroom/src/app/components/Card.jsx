import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styling/Card.css';

const Card = ({ image, title, points, path }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="relative w-80 h-96 perspective" onClick={toggleFlip}>
            <div className={`absolute w-full h-full transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''} transform-style-preserve-3d`}>
              {/* Front Side */}
                    <div
                    style={{ cursor: "pointer" }}
                    className="absolute w-full h-full bg-gradient-to-b from-gray-200 to-gray-400 rounded-lg shadow-lg backface-hidden border border-gray-300"
                    >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                        style={{ filter: "brightness(1)" }} // Increase brightness
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-lg p-4">
                        {/* Flexbox container for title */}
                        <div className="flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold text-white text-center break-words max-w-full mb-4">
                            {title}
                        </h3>
                        <Link to={path}>
                            <button className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg">
                            Learn More
                            </button>
                        </Link>
                        </div>
                    </div>
                    </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-gradient-to-br from-gray-900 to-black border-4 border-blue-700 text-white rounded-lg shadow-lg rotate-y-180 backface-hidden p-6">
                    <div className="flex items-center justify-center h-16">
                        <h3 className="text-xl font-extrabold text-blue-500 text-center break-words max-w-full">
                            {title}
                        </h3>
                    </div>
                    <p className="text-[17.5px] leading-relaxed text-center p-1 text-gray-300">
                        {points}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
