import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// TitleCard now accepts cardData and numberOfCards as props
const TitleCard = ({ cardData, numberOfCards }) => {
    return (
        <div className="flex flex-row justify-center gap-8 w-full px-4 py-12 text-slate-900">
            {cardData.slice(0, numberOfCards).map((card, index) => (
                <TiltCard key={index} image={card.image} text={card.text} name={card.name} />
            ))}
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ image, name, text }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-indigo-500 shadow-xl transition-transform duration-300"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                <img
                    src={image}
                    alt="Profile"
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mx-auto h-24 w-24 rounded-full object-cover border-4 border-indigo-500"
                />
                <h1
                    style={{
                        transform: "translateZ(60px)",
                    }}
                    className="mt-4 text-2xl text-center font-semibold text-gray-800"
                >
                    {name}
                </h1>
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="mt-2 text-center text-lg font-bold text-indigo-600"
                >
                    {text}
                </p>
            </div>
        </motion.div>
    );
};

export default TitleCard;
