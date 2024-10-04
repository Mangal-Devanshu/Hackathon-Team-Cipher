import React from "react";
import ImageGrid from '../components/ImageGrid';
import ReverseImageGrid from '../components/ReverseImageGrid';

export function Component() {
    const imageSets1 = [
        [
            { src: '/assets/oci/1.jpg', alt: 'Image 1' },
            { src: '/assets/oci/2.jpg', alt: 'Image 2' }
        ],
        [
            { src: '/assets/oci/6.jpg', alt: 'Image 3' },
            { src: '/assets/oci/4.jpg', alt: 'Image 4' },
            { src: '/assets/oci/7.jpg', alt: 'Image 5' }
        ],
        [
            { src: '/assets/oci/3.jpg', alt: 'Image 6' },
            { src: '/assets/oci/5.jpg', alt: 'Image 7' }
        ]
    ];

    const imageSets2 = [
        [
            { src: '/assets/spex/1.jpg', alt: 'Image 1' },
            { src: '/assets/spex/2.jpg', alt: 'Image 2' }
        ],
        [
            { src: '/assets/spex/3.jpg', alt: 'Image 3' },
            { src: '/assets/spex/4.jpg', alt: 'Image 4' },
            { src: '/assets/spex/6.jpg', alt: 'Image 5' }
        ],
        [
            { src: '/assets/spex/5.jpg', alt: 'Image 6' },
            { src: '/assets/spex/7.png', alt: 'Image 7' }
        ]
    ];

    const imageSets3 = [
        [
            { src: '/assets/harp2/1.jpg', alt: 'Image 1' },
            { src: '/assets/harp2/2.jpg', alt: 'Image 2' }
        ],
        [
            { src: '/assets/harp2/3.jpg', alt: 'Image 3' },
            { src: '/assets/harp2/4.jpg', alt: 'Image 4' },
            { src: '/assets/harp2/5.jpg', alt: 'Image 5' }
        ],
        [
            { src: '/assets/harp2/6.jpg', alt: 'Image 6' },
            { src: '/assets/harp2/7.jpg', alt: 'Image 7' }
        ]
    ];

    return (
        <div className="overflow-auto bg-black">
            {/* Third Section */}
            <div className="min-h-screen p-6">
                <ImageGrid
                    title="Ocean Colour Instrument"
                    point1="The Ocean Color Instrument (OCI) is NASA's PACE mission's primary sensor, designed to measure light properties across various wavelengths with high precision. This advanced optical spectrometer will enhance ocean color data records essential for climate research."
                    point2="By analyzing sunlight interactions with substances like chlorophyll in seawater, the OCI will provide detailed insights into global phytoplankton distribution, improving our understanding of ocean ecology."
                    point3="Developed at Goddard Space Flight Center, the OCI features a rotating telescope and advanced calibration mechanisms that reduce sun glint and image striping. With excellent signal-to-noise ratios, it promises to significantly advance ocean observation."
                    images={imageSets1}
                    buttonText="Learn More"
                    buttonLink="https://pace.oceansciences.org/oci.htm"
                />
            </div>

            {/* Second Section with spacing in between */}
            <div className="min-h-screen p-6">
                <ReverseImageGrid
                    title="SPEXone Polarimeter"
                    point1="The SPEXone instrument is an advanced multi-angle polarimeter that measures the intensity, Degree of Linear Polarization (DoLP), and Angle of Linear Polarization (AoLP) of sunlight reflected from Earth's atmosphere, land, and oceans. By focusing on high accuracy in DoLP measurements, it enhances aerosol characterization, addressing their significant role in climate change."
                    point2="Aerosols, tiny particles suspended in the air, are the largest source of error in quantifying radiative forcing, as noted by the Intergovernmental Panel on Climate Change. SPEXone's ability to measure aerosol properties with unprecedented detail will provide critical insights into their impact on climate dynamics."
                    point3="Developed by a Dutch consortium, including SRON Netherlands Institute for Space Research and Airbus Defence and Space Netherlands, SPEXone combines expertise in design, manufacturing, and scientific leadership. The initiative is funded by the Netherlands Space Office and other national research organizations."
                    images={imageSets2}
                    buttonText="Learn More"
                    buttonLink="#"
                />
            </div>

            {/* Third Section */}
            <div className="min-h-screen p-6">
                <ImageGrid
                    title="HARP2 Polarimeter"
                    point1="The Hyper-Angular Rainbow Polarimeter #2 (HARP2) is an advanced wide-angle imaging polarimeter designed to measure aerosol particles, clouds, and the properties of land and water surfaces. It plays a crucial role in understanding atmospheric particles relevant to health, climate, and precipitation."
                    point2="HARP2 gathers data from up to 60 viewing angles across four spectral bands in the visible and near-infrared ranges, utilizing three angles of linear polarization. This enables it to assess microphysical properties, such as size distribution, quantity, refractive indices, and particle shape."
                    point3="As a key instrument for the PACE mission, HARP2 builds on the successes of its predecessors, AirHARP and the HARP 3U CubeSat. The AirHARP has previously flown on NASA's ER2 and UC12 aircraft, providing valuable data for developing algorithms to retrieve aerosol and cloud properties effectively."
                    images={imageSets3}
                    buttonText="Learn More"
                    buttonLink="#"
                />
            </div>
        </div>
    );
}

Component.displayName = "ExplorePage";