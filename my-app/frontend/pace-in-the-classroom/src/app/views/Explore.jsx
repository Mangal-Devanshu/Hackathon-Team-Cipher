import React, { useState, useEffect } from "react";
import ImageGrid from '../components/ImageGrid';
import Asteroids from '../components/Asteroids'; // Import the Asteroids component

export function Component() {
    const [showButton, setShowButton] = useState(false);

    // Function to scroll back to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Monitor scroll position to show or hide the "Back to Top" button
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const imageSets1 = [
        [
            { src: '/assets/oci/1.jpg', alt: 'Image 1', message: "This is image 1." },
            { src: '/assets/oci/2.jpg', alt: 'Image 2', message: "This is image 1." }
        ],
        [
            { src: '/assets/oci/3.jpg', alt: 'Image 6', message: "This is image 1." },
            { src: '/assets/oci/4.jpg', alt: 'Image 4', message: "This is image 1." },
            { src: '/assets/oci/5.jpg', alt: 'Image 7', message: "This is image 1." }
        ],
        [
            { src: '/assets/oci/6.jpg', alt: 'Image 3', message: "This is image 1." },
            { src: '/assets/oci/7.jpg', alt: 'Image 5', message: "This is image 1." }
        ]
    ];

    const imageSets2 = [
        [
            { src: '/assets/spex/1.jpg', alt: 'Image 1', message: "This is image 1." },
            { src: '/assets/spex/2.jpg', alt: 'Image 2', message: "This is image 1." }
        ],
        [
            { src: '/assets/spex/3.jpg', alt: 'Image 3', message: "This is image 1." },
            { src: '/assets/spex/4.jpg', alt: 'Image 4', message: "This is image 1." },
            { src: '/assets/spex/6.jpg', alt: 'Image 5', message: "This is image 1." }
        ],
        [
            { src: '/assets/spex/5.jpg', alt: 'Image 6', message: "This is image 1." },
            { src: '/assets/spex/7.png', alt: 'Image 7', message: "This is image 1." }
        ]
    ];

    const imageSets3 = [
        [
            { src: '/assets/harp2/1.jpg', alt: 'Image 1', message: "This is image 1." },
            { src: '/assets/harp2/2.jpg', alt: 'Image 2', message: "This is image 1." }
        ],
        [
            { src: '/assets/harp2/3.jpg', alt: 'Image 3', message: "This is image 1." },
            { src: '/assets/harp2/4.jpg', alt: 'Image 4', message: "This is image 1." },
            { src: '/assets/harp2/5.jpg', alt: 'Image 5', message: "This is image 1." }
        ],
        [
            { src: '/assets/harp2/6.jpg', alt: 'Image 6', message: "This is image 1." },
            { src: '/assets/harp2/7.jpg', alt: 'Image 7', message: "This is image 1." }
        ]
    ];

    return (
        <div className="relative overflow-hidden bg-black">
            {/* Asteroids background */}
            <div className="fixed inset-0 -z-0 w-full">
                <Asteroids count={30} direction="left" /> {/* Adjust count and direction */}
            </div>

            {/* Sections */}
            <div className="relative z-10">
                {/* Section 1 */}
                <div className="min-h-screen p-6 z-10">
                    <ImageGrid
                        title="Ocean Colour Instrument"
                        points={[
                            "The Ocean Color Instrument (OCI) is NASA's PACE mission's primary sensor, designed to measure light properties across various wavelengths with high precision. This advanced optical spectrometer will enhance ocean color data records essential for climate research.",
                            "By analyzing sunlight interactions with substances like chlorophyll in seawater, the OCI will provide detailed insights into global phytoplankton distribution, improving our understanding of ocean ecology.",
                            "Developed at Goddard Space Flight Center, the OCI features a rotating telescope and advanced calibration mechanisms that reduce sun glint and image striping. With excellent signal-to-noise ratios, it promises to significantly advance ocean observation. [ 7 ]"
                        ]}
                        images={imageSets1}
                        buttonText="Learn More"
                        buttonLink="https://pace.oceansciences.org/oci.htm"
                        citation="Source : OCI Image Collection [ 8 ]"
                    />
                </div>

                {/* Section 2 */}
                <div className="min-h-screen p-6">
                    <ImageGrid
                        title="SPEXone Polarimeter"
                        points={[
                            "The Hyper-Angular Rainbow Polarimeter #2 (HARP2) is a sophisticated wide-angle imaging polarimeter that measures aerosol particles, clouds, and surface properties of land and water. It is essential for understanding atmospheric particles related to health, climate, and precipitation.",
                            "HARP2 collects data from up to 60 viewing angles across four spectral bands in the visible and near-infrared ranges, using three angles of linear polarization. This capability allows it to evaluate microphysical properties such as size distribution, quantity, refractive indices, and particle shape.",
                            "As a vital instrument for the PACE mission, HARP2 builds on the achievements of its predecessors, AirHARP and the HARP 3U CubeSat. AirHARP has previously operated on NASA's ER2 and UC12 aircraft, contributing valuable data for developing algorithms to accurately retrieve aerosol and cloud properties. [ 9 ]"
                        ]}
                        images={imageSets2}
                        buttonText="Learn More"
                        buttonLink="https://pace.oceansciences.org/spexone.htm"
                        citation="Source : SPEXone Image Collection [ 10 ]"
                    />
                </div>

                {/* Section 3 */}
                <div className="min-h-screen p-6">
                    <ImageGrid
                        title="HARP2 Polarimeter"
                        points={[
                            "The Hyper-Angular Rainbow Polarimeter #2 (HARP2) is an advanced wide-angle imaging polarimeter designed to measure aerosol particles, clouds, and the properties of land and water surfaces. It plays a crucial role in understanding atmospheric particles relevant to health, climate, and precipitation.",
                            "HARP2 gathers data from up to 60 viewing angles across four spectral bands in the visible and near-infrared ranges, utilizing three angles of linear polarization. This enables it to assess microphysical properties, such as size distribution, quantity, refractive indices, and particle shape.",
                            "As a key instrument for the PACE mission, HARP2 builds on the successes of its predecessors, AirHARP and the HARP 3U CubeSat. The AirHARP has previously flown on NASA's ER2 and UC12 aircraft, providing valuable data for developing algorithms to retrieve aerosol and cloud properties effectively. [ 11 ]"
                        ]}
                        images={imageSets3}
                        buttonText="Learn More"
                        buttonLink="https://pace.oceansciences.org/harp2.htm"
                        citation="Source : HARP2 Image Collection [ 12 ]"
                    />
                </div>
            </div>

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 z-20"
                >
                    Back to Top
                </button>
            )}
        </div>
    );
}

Component.displayName = "ExplorePage";
