export default function MapInfo() {
    return (
        <div className="relative flex flex-col items-center justify-center py-4 sm:py-6">
            {/* Container with hover-based expansion */}
            <div className="group relative cursor-pointer overflow-hidden bg-black p-4 shadow-md ring-1 ring-blue-500 transition-all duration-300 hover:p-8 hover:shadow-xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-6 hover:max-w-lg hover:ring-blue-700">

                {/* Info Icon */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        {/* Icon (using a different info icon) */}
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 4.75a.75.75 0 01.75.75v.5a.75.75 0 11-1.5 0v-.5a.75.75 0 01.75-.75zm.75 4a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6z" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-sm text-white">
                        Discover hidden facts! Explore the map by finding four secret icons. Can you find them all?
                    </p>
                    <p className="mt-3 text-sm font-semibold text-blue-400">
                        Start exploring now! 🌊
                    </p>
                </div>
            </div>
        </div>
    );
}
