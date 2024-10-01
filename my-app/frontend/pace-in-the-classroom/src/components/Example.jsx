import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ParticleRing from "./ParticleRing"; // Import ParticleRing component

function HorizontalScrollCarousel({ cardCount, cardsData }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cardsData.slice(0, cardCount).map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

function Card({ card }) {
    return (
        <div className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200 rounded-lg mx-4">
            {/* Image with full cover */}
            <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
                <img src={card.src} alt={card.alternative} className="h-full w-full object-cover" />
            </div>
            {/* Title on the image */}
            <div className="absolute inset-0 z-10 grid place-content-center">
                <motion.p className="rounded-lg bg-gradient-to-br from-bg-neutral-100 to-white/0 p-4 text-3xl font-black uppercase text-white backdrop-blur-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} >
                    <a href="/explain"> {card.title} </a>
                </motion.p>
            </div>
        </div>
    );
};

function Example({ numberOfCards, cardsData, startTitle, endTitle }) {
    const [cardCount, setCardCount] = useState(numberOfCards); // Set initial card count from props
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setCardCount(value);
        }
    };

    return (
        <div className="relative bg-black">
            {/* ParticleRing as background */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <ParticleRing />
            </div> */}

            {/* Main content */}
            <div className="relative z-10">
                {/* Heading with glowing animation */}
                <div className="flex h-24 items-center justify-center bg-black rounded-lg mx-5">
                    <motion.span className="font-extrabold text-4xl uppercase text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} >
                        <motion.span className="inline-block" animate={{ scale: [1, 1.05, 1], textShadow: ["0px 0px 10px rgba(255, 255, 255, 0.2)", "0px 0px 20px rgba(255, 255, 255, 0.5)", "0px 0px 10px rgba(255, 255, 255, 0.2)"], opacity: [1, 0.8, 1], }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", }} >
                            {startTitle}
                        </motion.span>
                    </motion.span>
                </div>

                {/* Single carousel section */}
                <HorizontalScrollCarousel cardCount={cardCount} cardsData={cardsData} />
            </div>
        </div>
    );
}

export default Example;
