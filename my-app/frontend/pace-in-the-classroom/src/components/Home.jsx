import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Earth from './Earth';
import NasaFooter from './NasaFooter';
import Navbar from './Navbar';
import '../styling/Home.css';

// Custom hook for parallax effect
function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// Component to display parallax images and text side-by-side
function ParallaxImage({ id, text }) {
    const ref = useRef(null);
    const controls = useAnimation(); // Controls for animation
    const { scrollYProgress } = useScroll({ target: ref });
    const yImage = useParallax(scrollYProgress, 300);
    const yText = useParallax(scrollYProgress, 100);

    // Trigger text animation based on scroll progress
    scrollYProgress.onChange((latest) => {
        if (latest > 0.2) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: -100 });
        }
    });

    return (
        <section className="parallax-section">
            <div ref={ref} className="parallax-content-container">
                <motion.div className="parallax-image-container" style={{ y: yImage }}>
                    <img src={`/lessons/${id}.jpg`} alt={`Parallax Image ${id}`} />
                </motion.div>
                <motion.div
                    className="parallax-text-container"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ y: yText }}
                >
                    <h2 className="parallax-text">{text}</h2>
                </motion.div>
            </div>
        </section>
    );
}

export default function Home() {
    const textCards = [
        { id: 1, text: "Welcome to NASA's PACE Mission" },
        { id: 2, text: "Tracking Earth's Climate with Precision" },
        { id: 3, text: "Discover New Insights from Space" },
        { id: 4, text: "Join the Journey of Exploration" },
        { id: 5, text: "Protecting Our Planet" }
    ];

    return (
        <div className="home-container">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="earth-container">
                <Earth />
            </div>
            <div className="parallax-content">
                {textCards.map((card) => (
                    <ParallaxImage key={card.id} id={card.id} text={card.text} />
                ))}
            </div>

            <NasaFooter />
        </div>
    );
}
