import React, { useEffect, useState } from 'react';
import '../styling/Lessons.css';

function Lessons() {
    const images = [
        {
            id: 1,
            title: "OCI INSTRUMENT",
            text: "PACE's primary sensor, the Ocean Color Instrument (OCI), is a highly advanced optical spectrometer that will be used to measure properties of light over portions of the electromagnetic spectrum. It will enable continuous measurement of light at finer wavelength resolution than previous NASA satellite sensors, extending key system ocean color data records for climate studies.",
            url: "https://pace.oceansciences.org/oci.htm",
            className: "image-1"
        },
        {
            id: 2,
            title: "SPEXone POLARIMETER",
            text: "PACE's SPEXone instrument is a multi-angle polarimeter. It measures the intensity, Degree of Linear Polarization (DoLP) and Angle of Linear Polarization (AoLP) of sunlight reflected back from Earth's atmosphere, land surface, and ocean. The focus of the SPEXone development is to achieve a very high accuracy of DoLP measurements, which facilitates accurate characterization of aerosols in the atmosphere.",
            url: "https://pace.oceansciences.org/spxone.htm",
            className: "image-2"
        },
        {
            id: 3,
            title: "HARP2 POLARIMETER",
            text: "HARP2 (Hyper-Angular Rainbow Polarimeter #2) is a wide angle imaging polarimeter designed to measure aerosol particles and clouds, as well as properties of land and water surfaces. The amount and type of particles in suspension in the atmosphere are relevant to applications pertaining to health effects, cloud life cycle and precipitation, climate, etc. HARP2 will combine data from multiple along track viewing angles (up to 60), four spectral bands in the visible and near infrared ranges, and three angles of linear polarization to measure the microphysical properties of the atmospheric particles including their size distribution, amount, refractive indices and particle shape.",
            url: "https://pace.oceansciences.org/harp2.htm",
            className: "image-3"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lessons-container">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className={`image ${image.className} ${index === currentIndex ? 'visible' : ''}`}
                >
                    <div className="content">
                        <a href={image.url} className="image-head" target="_blank" rel="noopener noreferrer">
                            {image.title}
                        </a>
                        <p className="image-text">{image.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Lessons;