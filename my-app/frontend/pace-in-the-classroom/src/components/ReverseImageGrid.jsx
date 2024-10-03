import React from "react";

export default function ReverseImageGrid({ title, description, images, buttonText, buttonLink }) {
    return (
        <div className="h-screen relative overflow-hidden bg-neutral-900 flex items-center rounded-lg my-6">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between w-full">
                {/* Image Grid on the Left */}
                <div className="flex-shrink-0">
                    <div aria-hidden="true" className="pointer-events-none lg:mx-auto lg:max-w-7xl">
                        <div className="transform lg:translate-y-8">
                            <div className="flex items-center space-x-6 lg:space-x-8">
                                {images.map((column, colIndex) => (
                                    <div key={colIndex} className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        {column.map((image, index) => (
                                            <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text and Button on the Right */}
                <div className="sm:max-w-lg flex flex-col justify-center ml-10">
                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
                        <p className="mt-4 text-xl text-gray-500">{description}</p>
                    </div>
                    <div className="mt-10 text-left">
                        <a href={buttonLink} className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
