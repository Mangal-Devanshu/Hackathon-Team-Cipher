import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function TextParallaxContentExample() {
    const [contentData] = useState([
        {
            imgUrl: "/assets/oci.jpg",
            heading: "Ocean Color Instrument",
            content: "Revolutionizing Ocean Color Measurement: The Ocean Color Instrument (OCI)",
            point1: "The Ocean Color Instrument (OCI), developed at NASA's Goddard Space Flight Center, is a cutting-edge optical spectrometer designed to enhance our understanding of ocean ecology.",
            point2: "By continuously measuring light across a broad spectrum, the OCI provides unprecedented detail in monitoring global phytoplankton distribution and abundance, crucial for climate studies.",
            point3: "Key features include: 360° Continuous Rotating Telescope, Advanced Spectrographs & Enhanced Signal-to-Noise Ratios",
            url: "https://pace.oceansciences.org/oci.htm"
        },
        {
            imgUrl: "/assets/spexone.jpg",
            heading: "SPEXone POLARIMETER",
            content: "Unveiling The Atmosphere: SPEXone's Role In Climate Science",
            point1: "Precision Polarimetry: SPEXone is an advanced multi-angle polarimeter that measures sunlight's intensity, Degree of Linear Polarization (DoLP), and Angle of Linear Polarization (AoLP) to enhance aerosol characterization in the atmosphere.",
            point2: "Climate Significance: By providing detailed insights into aerosols—key contributors to climate change—SPEXone aims to reduce uncertainties in climate radiative forcing assessments.",
            point3: "Collaborative Development: Developed by a Dutch consortium, including SRON and Airbus Defence and Space, SPEXone employs innovative technologies like a compact three-mirror telescope and Polarization Modulation Optics (PMO) to advance atmospheric research.",
            url: "https://pace.oceansciences.org/spexone.htm",
        },
        {
            imgUrl: "/assets/harp2.jpg",
            heading: "HAPR2 POLARIMETER",
            content: "Unveiling The Atmosphere: The HARP2 Polarimeter",
            point1: "Innovative Imaging Technology: HARP2 (Hyper-Angular Rainbow Polarimeter #2) is a cutting-edge wide-angle imaging polarimeter designed to capture detailed measurements of aerosol particles, clouds, and surface properties of land and water.",
            point2: "Multifaceted Data Collection: Equipped with up to 60 along-track viewing angles, four spectral bands in the visible and near-infrared ranges, and three linear polarization angles, HARP2 accurately assesses the microphysical properties of atmospheric particles, including their size distribution, refractive indices, and shape.",
            point3: "Contributing to Climate Understanding: As part of the PACE mission, HARP2 plays a crucial role in advancing our understanding of atmospheric particles and their impact on health, climate, and precipitation patterns.",
            url: "https://pace.oceansciences.org/harp2.htm",
        },
    ]);

    return (
        <div className="bg-black">
            {contentData.map((data, index) => (
                <TextParallaxContent key={index} imgUrl={data.imgUrl} heading={data.heading}>
                    <ExampleContent content={data.content} point1={data.point1} point2={data.point2} point3={data.point3} url={data.url} />
                    <div class="bg-white h-1 w-full rounded-lg"></div>
                </TextParallaxContent>
            ))}
        </div>
    );
}

const IMG_PADDING = 15;

const TextParallaxContent = ({ imgUrl, heading, children }) => {
    return (
        <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
            {/* Heading placed outside the image */}
            <div className="text-center mb-6">
                <OverlayCopy heading={heading} />
            </div>

            <div className="relative h-[100vh]">
                <StickyImage imgUrl={imgUrl} />
            </div>

            {/* Add the blue border around the container using Tailwind CSS */}
            <div className="relative p-4 rounded-lg bg-black overflow-hidden">
                <div className="relative z-10">{children}</div>
            </div>
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const finalScale = scale.get() || 1;
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(80vh - ${IMG_PADDING * 1.5}px)`,
                top: IMG_PADDING,
                width: "70%",
                scale: finalScale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl mx-auto"
        >
            <motion.div className="absolute inset-0" style={{ opacity }} />
        </motion.div>
    );
};

const OverlayCopy = ({ heading }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-black/90 p-6 rounded-xl text-white">
                <p className="text-center text-4xl font-bold md:text-5xl">
                    {heading}
                </p>
            </div>
        </div>
    );
};

const ExampleContent = ({ content, point1, point2, point3, url }) => (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 flex flex-col items-start space-y-8">
        <h2 className="text-4xl text-left font-bold text-white">
            {content}
        </h2>
        <div className="flex flex-col space-y-4">
            <ul className="list-disc">
                <li className="text-xl text-white md:text-1.5xl my-4">{point1}</li>
                <li className="text-xl text-white md:text-1.5xl my-4">{point2}</li>
                <li className="text-xl text-white md:text-1.5xl my-4">{point3}</li>
            </ul>
        </div>
        {/* Anchor tag styled as button */}
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-800 px-6 py-3 text-xl text-white transition-colors hover:bg-blue-700 inline-flex items-center"
        >
            Learn more <FiArrowUpRight className="inline ml-2" />
        </a>
    </div>
);