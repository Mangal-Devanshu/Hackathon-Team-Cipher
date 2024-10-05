import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Card from '../components/Card';
import EarthSimulation from '../components/EarthSimulation';
import { useNavigate } from 'react-router-dom'; // For navigation

const earthData = [
    {
        id: 'Aerosols & Air Quality',
        image: '/lessons/lessonContent/lesson5/5.2.1.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">Aerosols are tiny particles or droplets in the atmosphere that influence air quality and climate.</li>
                <li class="my-4">The PACE mission, using the SPEXone instrument, measures aerosols to better understand their role in climate dynamics.</li>
                <li class="my-4">Aerosols can scatter or absorb sunlight, impacting the Earth's temperature and energy balance.</li>
            </ul>
        `
    },
    {
        id: 'Aerosols & Cloud Formation',
        image: '/lessons/lessonContent/lesson5/5.2.2.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">Aerosols play a significant role in cloud formation, acting as cloud condensation nuclei (CCN).</li>
                <li class="my-4">They can influence precipitation patterns by altering cloud microphysical properties.</li>
                <li class="my-4">Understanding these interactions is essential for predicting weather and long-term climate changes.</li>
            </ul>
        `
    },
    {
        id: 'Global Aerosol Movement',
        image: '/lessons/lessonContent/lesson5/5.2.3.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">Aerosols can travel thousands of miles from their source, affecting weather systems and ecosystems far from where they originated.</li>
                <li class="my-4">They can influence air quality across regions, with potential health impacts on populations globally.</li>
                <li class="my-4">Tracking aerosol movement helps in assessing their environmental and climate impact on a global scale.</li>
            </ul>
        `
    }
];


const HeroSection = () => {
    const scrollToObjectives = () => {
        const objectivesSection = document.getElementById('objectives');
        objectivesSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div class="relative h-screen bg-black text-white">
            {/* Background Image */}
            <div class="absolute inset-0 bg-cover bg-center rounded-lg opacity-100 w-full" style={{ backgroundImage: "url('/lessons/lessonContent/lesson5/5.jpg')" }}></div>

            {/* Content */}
            <div class="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-80 p-6 rounded-lg">
                <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">Explore Aerosols & Climate</h1>
                <p class="text-xl mt-4 text-justify  max-w-3xl leading-relaxed">
                    Discover how aerosols influence Earth's climate by affecting cloud formation and air quality. Learn how they move globally and shape weather and precipitation patterns.
                </p>

                <button
                    onClick={scrollToObjectives}
                    class="mt-8 inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg text-white text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-700"
                >
                    Dive Deeper
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const ObjectivesSection = () => {
    return (
        <section id="objectives" class="p-6">
            <div class="container w-full text-center bg-gradient-to-br from-zinc-900 via-neutral-950 to-black p-8 rounded-lg shadow-lg shadow-green-700">
                <h2 class="text-4xl font-extrabold text-blue-400 my-4">Key Learning Objectives</h2>
                <div class="flex flex-wrap justify-evenly my-4 p-4">
                    <Card
                        image="/lessons/lessonContent/lesson5/5.1.jpg"
                        title="Aerosols & Air Quality"
                        points="Aerosols are small particles that can both cool and warm the planet by scattering or absorbing sunlight. They are essential to understand as they influence not just climate, but also public health and weather patterns."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson5/5.2.jpg"
                        title="Aerosols & Cloud Formation"
                        points="Aerosols impact cloud formation by providing nuclei around which clouds can form. This influences rainfall and global weather patterns, making their study critical for understanding climate systems."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson5/5.3.jpg"
                        title="Global Aerosol Movement"
                        points="Aerosols can travel long distances from their origin, influencing regions far away. These particles affect not just air quality, but also broader climate patterns, weather, and even health."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson5/5.4.jpg"
                        title="Climate Effects of Aerosols"
                        points="The distribution of aerosols across the globe affects climate by altering cloud properties and the Earth's radiation balance. Understanding these impacts helps predict climate change more accurately."
                    />

                </div>
            </div>
        </section>
    );
};

const QuizComponent = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleAnswerClick = (answer) => {
        if (!selectedAnswer) {
            setSelectedAnswer(answer);
            if (answer === questions[currentQuestion].correctAnswer) {
                setScore((prevScore) => prevScore + 1);
            }
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResult(false);
    };

    return (
        <section id="quiz" class="p-6 h-screen">
            <div class="container mx-auto rounded-lg py-10">
                <h2 class="text-4xl font-extrabold text-center mb-16 text-white">Test Your Knowledge</h2>
                <div class="bg-gradient-to-br from-zinc-900 via-neutral-950 to-black p-8 rounded-lg shadow-lg shadow-green-700 max-w-lg mx-auto">
                    {showResult ? (
                        <div class="text-center">
                            <h3 class="text-2xl font-bold text-white">Your Score: {score} / {questions.length}</h3>
                            <p class="mt-4 text-white">Great job completing the quiz!</p>
                            <button onClick={() => navigate('/lessons')} class="mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg mx-2">
                                Back to Lessons
                            </button>
                            <button onClick={restartQuiz} class="mt-4 bg-green-600 text-white py-3 px-4 rounded-lg mx-2">
                                Restart Quiz
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 class="text-xl font-bold text-blue-500">{questions[currentQuestion].question}</h3>
                           
                            <ul class="mt-4 space-y-4">
                                {questions[currentQuestion].answers.map((answer, index) => (
                                    <li
                                        key={index}
                                        class={`p-4 rounded-lg cursor-pointer text-white ${selectedAnswer
                                            ? answer === questions[currentQuestion].correctAnswer
                                                ? 'bg-green-600 '
                                                : 'bg-neutral-800 border border-red-600' // Add red border for incorrect answer
                                            : 'bg-neutral-800 hover:bg-neutral-600'
                                            }`}
                                        onClick={() => handleAnswerClick(answer)}
                                        style={{ pointerEvents: selectedAnswer ? 'none' : 'auto' }}
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            {selectedAnswer && (
                                <p class={`mt-4 ${selectedAnswer === questions[currentQuestion].correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                                    {selectedAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Incorrect!'}
                                </p>
                            )}
                            <div class="flex justify-between items-center mt-6">
                                <button
                                    onClick={nextQuestion}
                                    class="bg-blue-600 text-white py-3 px-6 rounded-lg"
                                    disabled={!selectedAnswer}
                                >
                                    {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                                </button>
                                <p class="text-white">Question {currentQuestion + 1} of {questions.length}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export function Component() {
    const navigate = useNavigate();
    const questions = [
        {
            question: "What is the primary role of aerosols in cloud formation?",
            answers: ["They act as cloud condensation nuclei", "They cool the atmosphere", "They block sunlight", "They increase humidity"],
            correctAnswer: "They act as cloud condensation nuclei"
        },
        {
            question: "Which instrument does PACE use to measure aerosols?",
            answers: ["MODIS", "SPEXone", "VIIRS", "CALIPSO"],
            correctAnswer: "SPEXone"
        },
        {
            question: "How far can aerosols travel from their origin?",
            answers: ["Within 100 miles", "Only within a region", "Thousands of miles", "They do not travel"],
            correctAnswer: "Thousands of miles"
        },
        {
            question: "Why is studying aerosols important for climate science?",
            answers: ["They impact air quality", "They influence cloud formation and climate patterns", "They are pollutants", "They block UV rays"],
            correctAnswer: "They influence cloud formation and climate patterns"
        }
    ];


    return (
        <div class="bg-black">
             <div className="bg-black flex justify-end">
                <button
                onClick={() => navigate('/lessons')}
                className="mt-4 mb-8 bg-blue-600 text-white py-3 px-3 rounded-full hover:bg-blue-700 transition-colors flex items-center"
            >
                <FaTimes />
                </button>
             </div>
            <HeroSection />
            <ObjectivesSection />
            <EarthSimulation data={earthData} />
            <QuizComponent questions={questions} />
        </div>
    );
};

Component.displayName = "Lesson5Page";