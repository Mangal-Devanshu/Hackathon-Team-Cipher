import React from 'react';
import ReactPlayer from 'react-player';
import Earth from '../components/Earth';
import ReadDocs from '../components/ReadDocs';
import Asteroids from '../components/Asteroids';

export function Component() {
    return (
        <div class="flex flex-col">
            {/* Earth Section */}
            <section className="relative h-[100vh] bg-black">
                <div className="absolute inset-0 z-0">
                    <Earth />
                </div>
                <div className="absolute bottom-28 right-3 z-10 p-4"> {/* Adjusted positioning */}
                    <ReadDocs text={"This is an interactive earth element. Scroll down to know more."} />
                </div>
            </section>

            {/* Section 1 */}
            <section class="relative p-6 py-8 rounded-lg shadow-md shadow-blue-700 my-10 overflow-hidden">
                {/* Asteroids in the Background */}
                <div class="absolute inset-0 -z-0 opacity-90">
                    <Asteroids count={150} />
                </div>

                {/* Content above the background */}
                <div class="relative flex flex-col md:flex-row w-full">
                    <div class="md:w-1/2 p-8 text-center md:text-left">
                        <h2 class="text-3xl font-bold text-blue-700 mb-6">PACE Launch</h2>
                        <ul class="text-lg list-disc text-white max-w-3xl mx-auto mb-8 text-justify">
                            <li class="my-3">
                                On 8th Feb, 2024, NASA's PACE satellite launched aboard a SpaceX Falcon 9 rocket at 1:33 A.M. from Space Launch Complex 40 at Cape Canaveral Space Force Station in Florida.
                            </li>
                            <li class="my-3">
                                The satellite's orbit is positioned hundreds of miles above Earth.
                            </li>
                            <li class="my-3">
                                PACE will study microscopic life in the oceans and microscopic particles in the atmosphere to investigate key mysteries of our planet's interconnected systems.
                            </li>
                        </ul>
                    </div>
                    <div class="md:w-1/2 p-2">
                        <img src="/assets/launch.jpg" alt="Launch" class="w-full h-auto max-h-[600px] rounded-lg shadow-xl mx-auto object-cover" />
                    </div>
                </div>
            </section>


            {/* Section 2 */}
            <section className="relative bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8 overflow-hidden">
                {/* Asteroids component in the background */}
                <div className="absolute inset-0 z-0">
                    <Asteroids count={100} />
                </div>

                {/* Content Section: Video on the left and text on the right */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center py-8 px-4 md:px-0">
                    {/* Video on the left side */}
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
                    </div>

                    {/* Text on the right side */}
                    <div className="w-full md:w-1/2 p-4 md:pl-8">
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-left">
                            20 Years Of Global Biosphere Observations From Satellite Sensors
                        </h2>
                        <ul className="list-disc text-lg text-white pl-4 text-justify space-y-4">
                            <li>
                                <b>SeaStar/SeaWiFS:</b> Monitored ocean color to track biological activity.
                            </li>
                            <li>
                                <b>Aqua/MODIS:</b> Measured global dynamics, including changes in oceans, atmosphere, and land.
                            </li>
                            <li>
                                <b>Suomi NPP/VIIRS:</b> Provided data on ecosystems and environmental variables.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section class="bg-black p-6 py-8 rounded-lg shadow-md shadow-blue-700 my-10 overflow-hidden">
                <div class="flex flex-col md:flex-row w-full">
                    <div class="md:w-1/2 p-8 text-center md:text-left">
                        <h2 class="text-3xl font-bold text-blue-700 mb-6 text-left">Exploring Earth’s Oceans & Atmosphere</h2>
                        <ul class="text-lg list-disc text-white max-w-3xl mx-auto mb-8 text-justify">
                            <li class="my-3">
                                NASA's PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) satellite studies ocean health and the impact of atmospheric particles on climate.
                            </li>
                            <li class="my-3">By tracking phytoplankton, PACE helps scientists monitor marine ecosystems and oceanic changes.</li>
                            <li class="my-3">PACE’s Ocean Color Instrument (OCI) studies aerosols, offering critical insights into air quality, weather, and climate.</li>
                        </ul>
                    </div>
                    <div class="md:w-1/2 p-2">
                        <img src="/assets/pace.jpg" alt="Launch" class="w-full h-auto max-h-[600px] rounded-lg shadow-xl mx-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section class="bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div class="w-3/4 p-4 max-w-fit">
                        <div class="overflow-hidden rounded-lg shadow-md">
                            <ReactPlayer url="/videos/7.mp4" playing loop muted width="85%" height="100%" />
                        </div>
                    </div>
                    <div class="w-2/4 p-4 md:pl-2"> {/* Added md:pl-8 for the right shift */}
                        <h2 class="text-3xl font-bold text-blue-700 mb-6 text-left">Unlocking The Colors Of Ocean Health</h2>
                        <ul class="list-disc text-lg text-white mt-6 pl-2 text-justify"> {/* Changed to unordered list with list-disc */}
                            <li class="my-3">
                                NASA's PACE mission measures ocean color to assess ocean health, with a particular focus on phytoplankton populations that support the marine food web.
                            </li>
                            <li class="my-3">
                                It captures a broad spectrum of colors, including ultraviolet & infrared, and measures atmospheric aerosols to improve weather and climate forecasts.
                            </li>
                            <li class="my-3">
                                PACE builds on 20 years of ocean color research, providing essential data for long-term environmental studies.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section class="bg-black py-10 shadow-md shadow-blue-700 rounded-lg my-8">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div class="w-3/4 p-4 max-w-fit">
                        <div class="overflow-hidden rounded-lg shadow-md">
                            <ReactPlayer url="/videos/9.mp4" playing loop muted width="85%" height="100%" />
                        </div>
                    </div>
                    <div class="w-2/4 p-4 md:pl-2"> {/* Added md:pl-8 for the right shift */}
                        <h2 class="text-3xl font-bold text-white mb-6 text-left">Tackling Harmful Algal Blooms</h2>
                        <ul class="list-disc text-lg text-white mt-6 pl-2 text-justify"> {/* Changed to unordered list with list-disc */}
                            <li class="my-3">
                                Global mass <b class="text-blue-700">fish deaths and harmful algal blooms</b> pose a significant threat to coastal communities and fishery jobs.
                            </li>
                            <li class="my-3">
                                These issues are exacerbated by warming waters and nutrient pollution, intensifying the problem.
                            </li>
                            <li class="my-3">
                                The PACE satellite will improve data collection on harmful algal blooms, building on <b class="text-blue-700">50 years of research</b> to address this growing global concern.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

Component.displayName = "HomePage";