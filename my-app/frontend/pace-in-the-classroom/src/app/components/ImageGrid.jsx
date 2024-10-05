import React, { useState } from "react";
import ToolTip from "./ToolTip"; // Ensure this imports the ToolTip correctly

export default function ImageGrid({ title, images, buttonText, buttonLink, points }) {
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

    return (
        <div className="h-3/4 bg-neutral-950/60 relative overflow-hidden rounded-lg my-6 shadow-lg shadow-blue-800">
            <div className="pt-24 pb-64 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-blue-700 text-center mb-10">{title}</h1>
                        <ul className="mt-4 list-disc pl-6 text-xl text-white text-justify">
                            {points.map((point, index) => (
                                <li key={index} className="my-6">{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:-translate-x-12 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-6">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        {images.map((column, colIndex) => (
                                            <div key={colIndex} className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                {column.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="relative h-64 w-48 overflow-hidden rounded-lg"
                                                        onMouseEnter={() => setHoveredImageIndex(index)}
                                                        onMouseLeave={() => setHoveredImageIndex(null)}
                                                    >
                                                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
                                                        {/* Tooltip for each image */}
                                                        {hoveredImageIndex === index && (
                                                            <div className="absolute z-40 p-2 text-white bg-gray-800 rounded-md shadow-md left-1/2 transform -translate-x-1/2 -translate-y-full mb-1">
                                                                <ToolTip message={image.message} />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a href={buttonLink} className="inline-block ml-5 rounded-lg border border-transparent bg-blue-600 py-3 px-8 text-center text-lg text-white hover:bg-blue-700">
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}