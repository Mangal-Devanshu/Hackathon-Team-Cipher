import React from 'react';
import ReactPlayer from 'react-player';
import Earth from './Earth';
import '../styling/Home.css';

function Home() {
    return (
        <div class="flex flex-col">
            <section class="bg-black">
                <div class="h-screen">
                    <Earth />
                </div>
            </section>
            {/* Section 1*/}
            <section class="h-[120vh] flex flex-col items-center justify-center bg-black">
                <h2 class="text-3xl font-bold text-center mb-2 text-white">WELCOME TO PACE</h2>
                <p class="text-lg text-left my-4 text-white w-3/4">
                    On <b class="text-blue-700">8th Feb, 2024</b> NASA's PACE satellite launched aboard a <b class="text-blue-700">SpaceX Falcon 9 rocket at 1 : 33 A.M.</b> , from Space Launch Complex 40 at <b class="text-blue-700">Cape Canaveral Space Force Station in Florida</b>.
                    From its orbit hundreds of miles above Earth, PACE will study microscopic life in the oceans and microscopic particles in the atmosphere to investigate key mysteries of our planet's interconnected systems.
                </p>
                <img src="/assets/launch.jpg" alt="Earth" class="w-2/4 rounded-lg shadow-lg my-4" />
            </section>
            {/* Section 2*/}
            <section class="h-[110vh] flex flex-col items-center justify-center bg-black">
                <h2 class="text-3xl font-bold text-white mb-4">PACE: Exploring Earth’s Oceans & Atmosphere</h2>
                <ul class="list-disc text-lg text-white text-left w-3/4 mb-4">
                    <li class="my-3">
                        <b class="text-blue-700">NASA’s PACE (Plankton, Aerosol, Cloud, ocean Ecosystem)</b> satellite has been launched in 2024 to study the health of our oceans and the impact of atmospheric particles on climate.
                    </li>
                    <li class="my-3"><b class="text-blue-700">By tracking phytoplankton</b>, the base of the marine food chain, PACE helps scientists understand marine ecosystems and monitor ocean changes like harmful algal blooms.</li>
                    <li class="my-3">
                        <b class="text-blue-700">Equipped with the Ocean Color Instrument (OCI)</b>, PACE will also study aerosols and their effect on clouds and climate.
                        This data will improve climate models, providing insights into air quality, weather, and global environmental changes.
                    </li>
                </ul>
                <img src="/assets/pace.jpg" alt="Nature" class="w-2/4 rounded-lg" />
            </section>
            {/* Section 3*/}
            <section class="w-full h-[100vh] flex flex-row items-center justify-around bg-black">
                <div class="p-4 w-2/4">
                    <ReactPlayer url="/videos/8.mp4" class="rounded-lg shadow-lg" playing loop muted width="100%" height="100%" />
                </div>
                <div class="flex flex-col w-2/4 ml-2">
                    <h2 class="text-3xl font-bold text-white mb-4 text-left">20 Years Of Global Biosphere Observations From Satellite Sensors</h2>
                    <p class="text-lg text-white text-left max-w-2xl my-4">
                        The data visualization you're working on captures two decades of data collected by various satellite sensors,
                        highlighting the abundance and distribution of life on Earth, both on land and in the ocean. The sensors used are:
                    </p>
                    <ul class="list-disc text-lg text-white text-left max-w-2xl mb-4">
                        <li class="my-3"><b class="text-blue-700">SeaStar/SeaWiFS:</b> Sea-viewing Wide Field-of-view Sensor (SeaWiFS) aboard the SeaStar satellite, which primarily monitored ocean color to track biological activity in the oceans.</li>
                        <li class="my-3"><b class="text-blue-700">Aqua/MODIS:</b> Moderate Resolution Imaging Spectroradiometer (MODIS) aboard the Aqua satellite, which measures large-scale global dynamics, including changes in the Earth’s oceans, atmosphere, and land.</li>
                        <li class="my-3"><b class="text-blue-700">Suomi NPP/VIIRS:</b> Visible Infrared Imaging Radiometer Suite (VIIRS) aboard the Suomi National Polar-orbiting Partnership (NPP) satellite, which provides data on atmospheric, land, and oceanic ecosystems, among other environmental variables.</li>
                    </ul>
                </div>
            </section>
            {/* Section 4*/}
            <section class="w-full h-[80vh] flex flex-row items-center justify-around bg-black">
                <div class="flex flex-col w-2/4 ml-12">
                    <h2 class="text-3xl font-bold text-white mb-4 text-left"> Unlocking The Colors Of Ocean Health</h2>
                    <ul class="list-disc text-lg text-white text-left max-w-2xl mb-4">
                        <li class="my-2"><b class="text-blue-700">NASA's PACE mission</b> measures ocean color to assess ocean health, focusing on phytoplankton populations that support the marine food web.</li>
                        <li class="my-2">It captures a broad spectrum of colors, including <b class="text-blue-700">ultraviolet & infrared</b>, and measures atmospheric aerosols to enhance weather and climate forecasts.</li>
                        <li class="my-2">PACE continues over <b class="text-blue-700">20 years of ocean color research</b>, providing critical data for long-term environmental studies.</li>
                    </ul>
                </div>
                <div class="p-4 w-2/4">
                    <ReactPlayer url="/videos/7.mp4" class="rounded-lg shadow-lg" playing loop muted width="100%" height="100%" />
                </div>
            </section>
            {/* Section 5*/}
            <section class="w-full h-[80vh] flex flex-row items-center justify-around bg-black">
                <div class="p-4 w-2/4">
                    <ReactPlayer url="/videos/9.mp4" class="rounded-lg shadow-lg" playing loop muted width="100%" height="100%" />
                </div>
                <div class="flex flex-col w-2/4 ml-2">
                    <h2 class="text-3xl font-bold text-white mb-4 text-left">Tackling Harmful Algal Blooms With PACE Satellite</h2>
                    <ul class="list-disc text-lg text-white text-left max-w-2xl mb-4">
                        <li class="my-3">Global mass <b class="text-blue-700">fish deaths and harmful algal blooms</b> threaten coastal communities and fishery jobs, worsened by warming waters and nutrient pollution.</li>
                        <li class="my-3">The PACE satellite will enhance data collection on harmful algal blooms, building on <b class="text-blue-700">50 years of research</b> to better understand and address this growing global issue.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;