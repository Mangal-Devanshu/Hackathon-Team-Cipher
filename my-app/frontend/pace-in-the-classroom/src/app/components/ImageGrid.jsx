import React from "react";

export default function ImageGrid({ title, images, buttonText, buttonLink, point1, point2, point3 }) {
    return (
        <div class="h-3/4 relative overflow-hidden bg-neutral-900 rounded-lg my-6 shadow-lg shadow-blue-800">
            <div class="pt-24 pb-64 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div class="sm:max-w-lg">
                        <h1 class="text-4xl font-bold tracking-tight text-white text-center">{title}</h1>
                        {/* Unordered list to display points */}
                        <ul class="mt-4 list-disc pl-6 text-xl text-white text-justify">
                            <li class="my-6">{point1}</li>
                            <li class="my-6">{point2}</li>
                            <li class="my-6">{point3}</li>
                        </ul>
                    </div>
                    <div>
                        <div class="mt-10">
                            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div class="absolute transform sm:left-1/2 sm:top-0 sm:-translate-x-12 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-6">
                                    <div class="flex items-center space-x-6 lg:space-x-8">
                                        {/* Loop through the images and display them in the grid */}
                                        {images.map((column, colIndex) => (
                                            <div key={colIndex} class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                {column.map((image, index) => (
                                                    <div key={index} class="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img src={image.src} alt={image.alt} class="h-full w-full object-cover object-center" />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href={buttonLink} class="inline-block rounded-lg border border-transparent bg-blue-600 py-3 px-8 text-center text-lg text-white hover:bg-blue-700">
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
