import React from 'react';

export default function MapInfo() {
    return (
        <div className="relative flex flex-col items-center justify-center py-4 sm:py-6">
            {/* Container with hover-based expansion */}
            <div className="group relative cursor-pointer overflow-hidden bg-neutral-950 p-4 shadow-md ring-1 ring-black transition-all duration-300 hover:p-8 hover:shadow-xl sm:mx-auto sm:max-w-xs sm:rounded-lg sm:px-6 hover:max-w-md hover:ring-gray-700">

                {/* Info Icon */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        {/* Using SVG Icon from ReadDocs */}
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-700 z-10">
                            {/* Updated SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="h-8 w-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-sm text-white">
                        Discover hidden facts! Explore the map by finding six secret icons. Can you find them all?
                    </p>
                    <p className="mt-3 text-md font-semibold text-blue-500">
                        Start exploring now! 
                    </p>
                </div>
            </div>
        </div>
    );
}
