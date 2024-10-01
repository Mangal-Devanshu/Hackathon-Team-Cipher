import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function TextParallaxContentExample() {
    // Array holding dynamic content for each section
    const [contentData] = useState([
        {
            imgUrl: "/assets/oci.jpg",
            subheading: "#1",
            heading: "Ocean Color Instrument",
            content: "Details : ",
            point1: "Hello, World",
            point2: "Hello, World",
            point3: "Hello, World",
        },
        {
            imgUrl: "/assets/spexone.jpg",
            subheading: "#2",
            heading: "SPEXone Polarimeter",
            content: "Details about the SPEXone Polarimeter are here.",
            point1: "Hello, World",
            point2: "Hello, World",
            point3: "Hello, World",
        },
        {
            imgUrl: "/assets/launch.jpg",
            subheading: "#3",
            heading: "HARP2 Polarimeter",
            content: "Information about the HARP2 Polarimeter goes here.",
            point1: "Hello, World",
            point2: "Hello, World",
            point3: "Hello, World",
        },
    ]);

    return (
        <div className="bg-black">
            {contentData.map((data, index) => (
                <TextParallaxContent key={index} imgUrl={data.imgUrl} subheading={data.subheading} heading={data.heading}>
                    <ExampleContent content={data.content} point1={data.point1} point2={data.point2} point3={data.point3} />
                </TextParallaxContent>
            ))}
        </div>
    );
}

const IMG_PADDING = 15;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
            <div className="relative h-[100vh]"> {/* Adjusted height */}
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
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
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(90vh - ${IMG_PADDING * 1.5}px)`,
                top: IMG_PADDING,
                width: "80%",
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl mx-auto"
        >
            <motion.div className="absolute inset-0" style={{ opacity }} />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{ y, opacity }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <div className="bg-black/80 p-6 rounded-lg">
                <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                    {subheading}
                </p>
                <p className="text-center text-3xl font-bold md:text-5xl">
                    {heading}
                </p>
            </div>
        </motion.div>
    );
};

const ExampleContent = ({ content, point1, point2, point3 }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold text-blue-200 md:col-span-4">
            {content}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <ul>
                <p className="mb-4 text-xl text-blue-600 md:text-2xl">
                    {point1}
                </p>
                <p className="mb-8 text-xl text-blue-600 md:text-2xl">
                    {point2}
                </p>
                <p className="mb-8 text-xl text-blue-600 md:text-2xl">
                    {point3}
                </p>
            </ul>
            <button className="w-full rounded bg-blue-800 px-6 py-3 text-xl text-white transition-colors hover:bg-blue-700 md:w-fit">
                Learn more <FiArrowUpRight className="inline" />
            </button>
        </div>
    </div>
);
