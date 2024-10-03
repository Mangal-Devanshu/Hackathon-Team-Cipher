import React from "react";
import ImageGrid from './ImageGrid';
import ReverseImageGrid from './ReverseImageGrid';

export default function Explore() {
    const imageSets = [
        [
            { src: '/assets/oci.jpg', alt: 'Lesson 1' },
            { src: '/lessons/2.jpg', alt: 'Lesson 2' }
        ],
        [
            { src: '/lessons/3.jpg', alt: 'Lesson 3' },
            { src: '/lessons/4.jpg', alt: 'Lesson 4' },
            { src: '/lessons/5.jpg', alt: 'Lesson 5' }
        ],
        [
            { src: '/lessons/6.jpg', alt: 'Lesson 6' },
            { src: '/lessons/7.jpg', alt: 'Lesson 7' }
        ]
    ];

    return (
        <div className="overflow-auto bg-black">
            {/* Third Section */}
            <div className="min-h-screen p-8">
                <ImageGrid
                    title="Svelte signals are finally here"
                    description="This year, our new svelte signals will shelter you from the harsh elements of a world that doesn't care if you develop or die."
                    images={imageSets}
                    buttonText="Svelte Signals"
                    buttonLink="#"
                />
            </div>

            {/* Second Section with spacing in between */}
            <div id="second-section" className="min-h-screen p-8 my-12 flex flex-col items-center">
                <h2 className="text-4xl text-white mb-4">Discover More</h2>
                <p className="text-lg text-gray-400 mb-6">Scroll down to explore more lessons.</p>
                <div className="flex space-x-8">
                    <ReverseImageGrid
                        title="React Hooks in Action"
                        description="Master the modern way of building React components with Hooks."
                        images={imageSets}
                        buttonText="Learn Hooks"
                        buttonLink="#"
                    />
                </div>
            </div>

            {/* Third Section */}
            <div className="min-h-screen p-8">
                <ImageGrid
                    title="Svelte signals are finally here"
                    description="This year, our new svelte signals will shelter you from the harsh elements of a world that doesn't care if you develop or die."
                    images={imageSets}
                    buttonText="Svelte Signals"
                    buttonLink="#"
                />
            </div>
        </div>
    );
}
