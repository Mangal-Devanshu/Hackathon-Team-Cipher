import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

// TitleCard now accepts cardData and numberOfCards as props
const TitleCard = ({ cardData, numberOfCards }) => {
    return (
        <div className="flex flex-row justify-center gap-8 w-full px-4 py-12 text-slate-900">
            {cardData.slice(0, numberOfCards).map((card, index) => (
                <TiltCard
                    key={index}
                    image={card.image}
                    text={card.text}    
                    name={card.name}
                    href={card.href} // Pass href as a prop
                />
            ))}
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ image, name, text, href }) => { // Accept href as a prop
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
            className="relative h-96 w-80 rounded-xl bg-black  transition-transform duration-300"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-6 grid place-content-center rounded-xl bg-neutral-900 shadow-lg shadow-blue-700 p-2"
            >
                <img
                    src={image}
                    alt="Profile"
                    style={{
                        transform: "translateZ(70px)",
                        height: "95px", // Set height to a fixed size
                        width: "95px", // Set width to a fixed size
                    }}
                    className="mx-auto rounded-full object-center shadow-lg shadow-blue-700/60"
                />
                <h1
                    style={{
                        transform: "translateZ(60px)",
                    }}
                    className="mt-4 text-lg text-center font-semibold text-white"
                >
                    {name}
                </h1>
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="mt-2 text-center text-md font-semibold text-blue-700"
                >
                    {text}
                </p>

                {/* LinkedIn icon */}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center mt-4 text-blue-700 hover:text-blue-800"
                    style={{
                        transform: "translateZ(40px)",
                    }}
                >
                    <FaLinkedin size={28} /> {/* Add LinkedIn icon */}
                </a>
            </div>
        </motion.div>
    );
};

export default TitleCard;
