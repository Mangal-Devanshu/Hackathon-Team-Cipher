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
            <div>
                <NewMap />
            </div>
        </div>
    );
}

export default Maps;