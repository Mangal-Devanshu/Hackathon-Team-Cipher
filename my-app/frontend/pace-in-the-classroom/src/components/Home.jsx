import React from 'react';
import ReactPlayer from 'react-player';
import Earth from './Earth';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styling/Home.css';

function Home() {
    return (
        <div className="flex flex-col bg-black">
            <Navbar />
            <div className="mt-1 max-h-screen">
                <Earth />
            </div>
            {/* Section 1: Introduction */}
            <section className="h-screen flex flex-col items-center justify-center bg-black">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">WELCOME TO PACE</h2>
                <p className="text-lg text-center max-w-2xl mb-8 text-white">
                    Discover the beauty of Earth and the mysteries of the universe.
                    Join us as we explore the wonders that surround us.
                </p>
                <img src="/assets/launch.jpg" alt="Earth" className="w-2/4 rounded-lg shadow-lg" />
            </section>
            {/* Section 2: Discover the Universe */}
            <section className="w-full h-screen flex flex-row items-center justify-around bg-black">
                <div className="p-4 w-2/4">
                    <video src="/videos/7.mp4" class="clip w-full rounded-lg"></video>
                </div>
                <div className="flex flex-col w-2/4">
                    <h2 className="text-4xl font-bold text-white mb-4 text-center">Discover New Horizons</h2>
                    <p className="text-lg text-white text-center max-w-2xl mb-8">
                        Explore the vastness of space and the endless possibilities that lie beyond our planet.
                    </p>
                </div>
            </section>
            {/* Section 3: The Wonders of Nature */}
            <section className="h-screen flex flex-col items-center justify-center bg-black">
                <h2 className="text-4xl font-bold text-white mb-4">The Wonders of Nature</h2>
                <p className="text-lg text-white text-center max-w-2xl mb-8">
                    Nature is a marvel. From breathtaking landscapes to diverse wildlife, the beauty of our world is truly awe-inspiring.
                </p>
                <img src="/assets/pace(1).jpg" alt="Nature" className="w-2/4 rounded-lg shadow-lg" />
            </section>
            {/* Section 4: Join the Adventure */}
            <section className="w-full h-screen flex flex-row items-center justify-around bg-black">
                <div className="flex flex-col w-2/4">
                    <h2 className="text-4xl font-bold text-white mb-4 text-center">Discover New Horizons</h2>
                    <p className="text-lg text-white text-center max-w-2xl mb-8">
                        Explore the vastness of space and the endless possibilities that lie beyond our planet.
                    </p>
                </div>
                <div className="p-4 w-2/4">
                    <ReactPlayer url="/videos/8.mp4" className="rounded-lg shadow-lg border-4 border-blue-300" controls width="100%" height="100%" />
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;