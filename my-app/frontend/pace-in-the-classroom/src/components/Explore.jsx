import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TextParallaxContentExample from './TextParallaxContentExample';
import '../styling/Explore.css';

function Explore() {
    return (
        <div class="flex flex-col bg-black h-screen">
            <div>
                <Navbar />
            </div>
            <div class="mt-5">
                <TextParallaxContentExample />
            </div>
            <div class="relative">
                <Footer />
            </div>
        </div>
    );
}

export default Explore;