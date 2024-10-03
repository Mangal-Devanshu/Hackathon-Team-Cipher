import React from "react";

export default function ImageGrid({ title, description, images, buttonText, buttonLink }) {
    return (
        <div className="h-screen relative overflow-hidden bg-neutral-900 rounded-lg my-6">
            <div className="pt-16 pb-70 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
                        <p className="mt-4 text-xl text-gray-500">{description}</p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        {/* Loop through the images and display them in the grid */}
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
                            <a href={buttonLink} className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
