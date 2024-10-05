import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function HorizontalScrollCarousel({ cardCount, cardsData }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[150vh]">
            <div className="sticky top-0 flex h-2/4 items-center overflow-hidden justify-center">
                <motion.div style={{ x }} className="flex gap-4 justify-center">
                    {cardsData.slice(0, cardCount).map((card) => (
                        <Card card={card} key={card.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function Card({ card }) {
    return (
        <div className="group relative h-[400px] w-[400px] overflow-hidden bg-neutral-200 rounded-lg mx-4">
            {/* Image with full cover */}
            <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110">
                <img src={card.src} alt={card.alternative} className="h-full w-full object-cover" />
            </div>
            {/* Title on the image with React Router Link */}
            <div className="absolute inset-0 z-10 grid place-content-center">
                <motion.p
                    className="rounded-lg bg-gradient-to-br from-bg-neutral-100 to-white/0 p-4 text-3xl font-black uppercase text-white backdrop-blur-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Link to={card.path}> {/* Use Link to navigate */}
                        {card.title}
                    </Link>
                </motion.p>
            </div>
            {/* Button placed at the bottom center of the card */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <Link to={card.path}>
                    <button
                        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
                    >
                        Go to Lesson
                    </button>
                </Link>
            </div>
        </div>


    );
}

function Example({ numberOfCards, cardsData, startTitle }) {
    const [cardCount, setCardCount] = useState(numberOfCards);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setCardCount(value);
        }
    };

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <motion.div ref={targetRef} style={{ opacity }} className="relative bg-black">
            {/* Main content */}
            <div className="relative z-10">
                {/* Heading with glowing animation */}
                <div className="flex h-24 items-center justify-center bg-black rounded-lg mx-4">
                    <motion.span
                        className="font-extrabold text-4xl uppercase text-white"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <motion.span
                            className="inline-block"
                            animate={{
                                scale: [1, 1.05, 1],
                                textShadow: [
                                    "0px 0px 10px rgba(255, 255, 255, 0.2)",
                                    "0px 0px 20px rgba(255, 255, 255, 0.5)",
                                    "0px 0px 10px rgba(255, 255, 255, 0.2)",
                                ],
                                opacity: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                        >
                            {startTitle}
                        </motion.span>
                    </motion.span>
                </div>
                {/* Single carousel section */}
                <HorizontalScrollCarousel cardCount={cardCount} cardsData={cardsData} />
            </div>
        </motion.div>
    );
}

export default Example;
