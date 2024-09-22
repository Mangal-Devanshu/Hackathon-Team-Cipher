// Home.jsx
import React from 'react';
import Earth from './Earth';
import NasaFooter from './NasaFooter'; // Import the new footer component
import '../styling/Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="earth">
                <Earth />
            </div>
            <NasaFooter /> {/* Add the footer component */}
        </div>
    );
}

export default Home;
