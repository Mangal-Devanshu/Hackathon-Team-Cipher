import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewMap from './NewMap';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styling/Maps.css';

function Maps() {
    const [showMap, setShowMap] = useState(false); // State to toggle the NewMap component

    const handleShowMap = () => {
        setShowMap(true); // Trigger map to appear
    };

    return (
        <div className="h-screen flex flex-col overflow-auto relative">
            {/* Navbar */}
            <div className="w-full fixed z-20 bg-black">
                <Navbar />
            </div>
            <div>
                <NewMap />
            </div>
            {/* Footer - Fixed at the bottom */}
            <div className="w-full fixed bottom-0 z-20">
                <Footer />
            </div>
        </div>
    );
}

export default Maps;
