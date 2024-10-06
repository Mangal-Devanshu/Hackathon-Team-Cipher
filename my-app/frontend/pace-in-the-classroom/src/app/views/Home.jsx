import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Earth from '../components/Earth';
import InfoButton from '../components/InfoButton';

export function Component() {
    const [showButton, setShowButton] = useState(false);

    // Function to handle scrolling back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Track scroll position and toggle visibility of "Back to Top" button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col">
            {/* Earth Section */}
            <section className="relative h-[100vh] bg-black">
                <div className="absolute inset-0 z-0">
                    <Earth />
                </div>
                <div className="absolute bottom-24 right-3 z-10 p-4">
                    <InfoButton text={"This is an interactive earth element. Scroll down to know more."} />
                </div>
            </section>

            {/* Section 1 */}
            <section className="relative p-6 py-8 rounded-lg shadow-md shadow-blue-700 my-10 overflow-hidden">
                <div className="relative flex flex-col md:flex-row w-full">
                    <div className="md:w-1/2 p-8 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-blue-700 capitalize text-center mb-6">PACE Launch</h2>
                        <ul className="text-lg list-disc text-white max-w-3xl mx-auto mb-8 text-justify">
                            <li className="my-3">
                                On 8th Feb, 2024, NASA's PACE satellite launched aboard a SpaceX Falcon 9 rocket at 1:33 A.M.
                                from Space Launch Complex 40 at Cape Canaveral Space Force Station in Florida.
                            </li>
                            <li className="my-3">
                                The satellite's orbit is positioned hundreds of miles above Earth.
                            </li>
                            <li className="my-3">
                                PACE will study microscopic life in the oceans and microscopic particles in the atmosphere to
                                investigate key mysteries of our planet's interconnected systems. [ 1 ]
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 p-2">
                        <img src="/assets/launch.jpg" alt="Launch" className="w-full h-auto max-h-[600px] rounded-lg shadow-xl mx-auto object-cover" />
                        <p className="text-white text-sm mt-4 capitalize">Source: NASA’s PACE spacecraft, atop a SpaceX Falcon 9 rocket, successfully lifts off [ 2 ]</p>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="relative bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-0">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <ReactPlayer
                                url="/videos/8.mp4"
                                playing
                                loop
                                muted
                                width="100%"
                                height="100%"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-white text-sm mt-4">Source: Earth: Our Living Planet [ 3 ]</p>
                    </div>

                    <div className="w-full md:w-1/2 p-4 md:pl-8">
                        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center capitalize">
                            20 Years Of Global Biosphere Observations From Satellite Sensors
                        </h2>
                        <ul className="list-disc text-lg text-white pl-4 text-justify space-y-4">
                            <li>
                                <b>SeaStar/SeaWIFS:</b> Monitored ocean color to track biological activity.
                            </li>
                            <li>
                                <b>Aqua/MODIS:</b> Measured global dynamics, including changes in oceans, atmosphere, and land.
                            </li>
                            <li>
                                <b>Suomi NPP/VIIRS:</b> Provided data on ecosystems and environmental variables. [ 1 ]
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="bg-black p-6 py-8 rounded-lg shadow-md shadow-blue-700 my-10 overflow-hidden">
                <div className="flex flex-col md:flex-row w-full">
                    <div className="md:w-1/2 p-8 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center capitalize">Exploring Earth’s Oceans & Atmosphere</h2>
                        <ul className="text-lg list-disc text-white max-w-3xl mx-auto mb-8 text-justify">
                            <li className="my-3">
                                NASA's PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) satellite studies ocean health and the impact of atmospheric particles on climate.
                            </li>
                            <li className="my-3">
                                By tracking phytoplankton, PACE helps scientists monitor marine ecosystems and oceanic changes.
                            </li>
                            <li className="my-3">
                                PACE’s Ocean Color Instrument (OCI) studies aerosols, offering critical insights into air quality, weather, and climate. [ 1 ]
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 p-2">
                        <img src="/assets/pace.jpg" alt="Launch" className="w-full h-auto max-h-[600px] rounded-lg shadow-xl mx-auto object-cover" />
                        <p className="text-white text-sm mt-4">Source: PACE Observatory Being Inspected at Astrotech [ 4 ]</p>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="w-3/4 p-4 max-w-fit">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <ReactPlayer url="/videos/7.mp4" playing loop muted width="85%" height="100%" />
                        </div>
                        <p className="text-white text-sm mt-4">Source: PACE Satellite in Orbit [ 5 ]</p>
                    </div>
                    <div className="w-2/4 p-4 md:pl-2">
                        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center capitalize">Unlocking The Colors Of Ocean Health</h2>
                        <ul className="list-disc text-lg text-white mt-6 pl-2 text-justify">
                            <li className="my-3">
                                NASA's PACE mission measures ocean color to assess ocean health, with a particular focus on phytoplankton populations that support the marine food web.
                            </li>
                            <li className="my-3">
                                It captures a broad spectrum of colors, including ultraviolet & infrared, and measures atmospheric aerosols to improve weather and climate forecasts.
                            </li>
                            <li className="my-3">
                                PACE builds on 20 years of ocean color research, providing essential data for long-term environmental studies. [ 1 ]
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section className="bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="w-3/4 p-4 max-w-fit">
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <ReactPlayer url="/videos/9.mp4" playing loop muted width="85%" height="100%" />
                        </div>
                        <p className="text-white text-sm mt-4">Source: 50 Years of Harmful Algal Blooms [ 6 ]</p>
                    </div>
                    <div className="w-2/4 p-4 md:pl-2">
                        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center capitalize">Tackling Harmful Algal Blooms</h2>
                        <ul className="list-disc text-lg text-white mt-6 pl-2 text-justify">
                            <li className="my-3">
                                Harmful algal blooms (HABs) pose a threat to marine life, ecosystems, and coastal economies. PACE aids in early detection, providing data to predict and mitigate the effects of these toxic events.
                            </li>
                            <li className="my-3">
                                PACE helps scientists study the drivers behind HABs, offering insights into environmental and human health impacts.
                            </li>
                            <li className="my-3">
                                With PACE’s advanced sensors, scientists can monitor coastal regions at risk for HABs, improving response strategies. [ 7 ]
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-blue-700 text-white p-3 rounded-full z-30 shadow-lg hover:bg-blue-600 transition duration-300"
                    aria-label="Back to Top"
                >
                    Back To Top
                </button>
            )}
        </div>
    );
}

Component.displayName = "HomePage";
