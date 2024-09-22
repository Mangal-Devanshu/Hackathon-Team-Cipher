// NasaFooter.jsx
import React from 'react';
import '../styling/NasaFooter.css';
import NasaLogo from '../assets/nasa.png'; // Import the NASA logo image

function NasaFooter() {
    return (
        <div className="nasa-footer">
            <img src={NasaLogo} alt="NASA Logo" className="nasa-logo" />
            <div className="typewriter-container">
                <h2 className="typewriter-text">PACE IN THE CLASSROOM</h2>
            </div>
        </div>
    );
}

export default NasaFooter;
