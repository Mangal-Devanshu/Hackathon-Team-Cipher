import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styling/MarineLifeMap.css'; // To add fun animations and styling

// Import cartoonish marine life icons
const phytoplanktonIcon = new L.Icon({
    iconUrl: '/icons/phytoplankton.png', // Add fun cartoon icons
    iconSize: [50, 50],
});

const coralIcon = new L.Icon({
    iconUrl: '/icons/coral.jpg',
    iconSize: [50, 50],
});

const squidIcon = new L.Icon({
    iconUrl: '/icons/squid.png',
    iconSize: [50, 50],
});

const deepSeaIcon = new L.Icon({
    iconUrl: '/icons/anglerfish.png',
    iconSize: [50, 50],
});

const MarineLifeMap = () => {
    return (
        <div style={{ textAlign: 'center', fontFamily: 'Comic Sans MS' }}>
            <h2>🧑‍🚀 Captain Splash’s Ocean Adventure! 🐠</h2>
            <p>
                Hi there! I’m Captain Splash, and today, we’re going to dive deep into the ocean to meet some cool sea creatures! Ready? Let’s go! 🌊
            </p>

            <MapContainer center={[0, 0]} zoom={2} style={{ height: "500px", width: "100%", marginBottom: '20px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Depth 0-50m: Phytoplankton */}
                <Marker position={[10, -20]} icon={phytoplanktonIcon}>
                    <Popup>
                        <strong>🏝 Depth: 0-50m 🏝</strong><br />
                        🌱 Meet Phytoplankton! <br />
                        <img src="/icons/phytoplankton.png" alt="Phytoplankton" style={{ width: '60px' }} />
                        <p>
                            Hi! I’m a tiny phytoplankton, and I help make oxygen so you can breathe! Isn’t that cool? 🌞
                        </p>
                    </Popup>
                </Marker>

                {/* Depth 50-200m: Coral Reefs */}
                <Marker position={[30, 30]} icon={coralIcon}>
                    <Popup>
                        <strong>🏝 Depth: 50-200m 🏝</strong><br />
                        🪸 Coral Reefs! <br />
                        <img src="/icons/coral.jpg" alt="Coral" style={{ width: '60px' }} />
                        <p>
                            Hi! We’re coral, and we make homes for fish! 🐠 We like warm, sunny water, just like a beach vacation!
                        </p>
                    </Popup>
                </Marker>

                {/* Depth 200-1000m: Squid and Lanternfish */}
                <Marker position={[-10, 60]} icon={squidIcon}>
                    <Popup>
                        <strong>🌌 Depth: 200-1000m 🌌</strong><br />
                        🦑 Meet Squid! <br />
                        <img src="/icons/squid.png" alt="Squid" style={{ width: '60px' }} />
                        <p>
                            Hey! I’m a squid, and I live where it’s a little darker. I can shoot ink to escape danger! 🦑
                        </p>
                    </Popup>
                </Marker>

                {/* Depth 1000m+: Deep Sea Creatures */}
                <Marker position={[-30, -45]} icon={deepSeaIcon}>
                    <Popup>
                        <strong>🌌 Depth: 1000m+ 🌌</strong><br />
                        🐟 Meet Anglerfish! <br />
                        <img src="/icons/anglerfish.png" alt="Anglerfish" style={{ width: '60px' }} />
                        <p>
                            Hello there! I have a glowing light on my head to catch fish in the dark! Isn’t that awesome? ✨
                        </p>
                    </Popup>
                </Marker>
            </MapContainer>

            <div>
                <h4>🧑‍🚀 Captain Splash’s Fun Facts! 🌊</h4>
                <p>
                    Did you know? The ocean has layers just like a cake! Let’s explore them:
                </p>
                <ul style={{ listStyleType: 'none' }}>
                    <li>🎂 <strong>Sunlit Zone (0-200m):</strong> This is where the party happens! Most sea creatures live here.</li>
                    <li>🌑 <strong>Twilight Zone (200-1000m):</strong> It’s a bit darker here. Some fish have lights on their bodies!</li>
                    <li>⚫ <strong>Abyss (1000m+):</strong> Total darkness! Only the bravest creatures live here.</li>
                </ul>
            </div>
        </div>
    );
};

export default MarineLifeMap;