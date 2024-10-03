import React, { useState } from 'react';
import '../styling/Card.css';

const Card = ({ image, title, points }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="relative w-72 h-80 perspective" onClick={toggleFlip}>
            <div className={`absolute w-full h-full transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''} transform-style-preserve-3d`}>
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg backface-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg">
                        <h3 className="text-lg font-bold text-white my-4">{title}</h3>
                        <button className="bg-blue-600 text-white rounded-full py-2 px-4 mt-2 hover:bg-blue-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full bg-neutral-100 text-black rounded-lg shadow-lg rotate-y-180 backface-hidden p-4">
                    <h3 className="text-xl font-bold mb-1">Details:</h3>
                    <p className="p-2 text-left text-md">
                        {points}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
