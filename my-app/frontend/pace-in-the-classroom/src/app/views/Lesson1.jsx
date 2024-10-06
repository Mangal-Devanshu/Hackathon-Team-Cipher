import { FaTimes } from 'react-icons/fa';
import React, { useState } from "react";
import Card from '../components/Card';
import EarthSimulation from '../components/EarthSimulation';
import { useNavigate } from 'react-router-dom'; // For navigation

const earthData = [
    {
        id: 'Scientific Benefits & Importance',
        image: '/lessons/lessonContent/lesson1/1.2.1.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">By capturing detailed data on aerosols, clouds, and phytoplankton, PACE helps refine climate models, improving predictions of future climate changes.</li>
                <li class="my-4">PACE will monitor how the ocean absorbs carbon dioxide, which is critical for understanding the ocean's role in mitigating climate change.</li>
                <li class="my-4">Changes in phytoplankton also provide early warnings about shifts in marine ecosystems that can affect global fish stocks and biodiversity [ 1 ].</li>
            </ul>
        `
    },
    {
        id: 'Technology Innovations',
        image: '/lessons/lessonContent/lesson1/1.2.2.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">PACE introduces advanced sensor technologies for more precise measurements of ocean color, atmospheric particles, and clouds.</li>
                <li class="my-4">These technologies improve the resolution and accuracy of satellite imagery.</li>
                <li class="my-4">The new instruments pave the way for future Earth observation missions [ 1 ].</li>
            </ul>
        `
    },
    {
        id: 'PACE Mission Timeline',
        image: '/lessons/lessonContent/lesson1/1.2.3.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">The PACE mission began development in 2014, with a planned launch in 2024.</li>
                <li class="my-4">After launch, PACE will collect data for at least five years, contributing to long-term climate research.</li>
                <li class="my-4">PACE's data will be continuously analyzed to improve climate models and forecasts [ 1 ].</li>
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
            <div class="absolute inset-0 bg-cover bg-center opacity-70 w-full" style={{ backgroundImage: "url('/assets/launch.jpg')" }}></div>

            {/* Content */}
            <div class="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-80 p-6 rounded-lg">
                <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-green-400 text-transparent bg-clip-text">What Is PACE ?</h1>
                <p class="text-xl mt-4 text-justify max-w-3xl leading-relaxed">
                    NASA's PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) mission is an advanced satellite mission designed to monitor Earth's oceans, atmosphere, and ecosystems.
                    It aims to study the intricate interactions between ocean ecosystems, atmospheric particles, and clouds, contributing to a better understanding of climate change, air quality, and how oceanic and atmospheric processes impact life on Earth [ 1 ].
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
                        image="/lessons/lessonContent/lesson1/1.1.jpg"
                        title="Monitoring Ocean Health"
                        points="PACE will study marine ecosystem health by measuring phytoplankton concentrations, which form the base of the ocean food chain. This helps assess ocean productivity and the impact of ecosystem changes on biodiversity [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson1/1.2.jpg"
                        title="Aerosol and Cloud Observations"
                        points="The satellite helps in observing atmospheric aerosols and clouds. Aerosols influence Earth's energy balance by absorbing or reflecting sunlight, and they play a significant role in climate and weather patterns [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson1/1.3.jpg"
                        title="Understanding Climate Change"
                        points="The data provided by PACE helps in understanding how oceans and atmosphere interact and contribute to global climate change. By studying aerosols, clouds, and ocean health together, PACE contributes to better climate models [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson1/1.4.jpg"
                        title="Biogeochemical 🌱 Cycles"
                        points="PACE focuses on how biological, geological, and chemical components of Earth’s systems interact. This contributes to the study of nutrient cycles, carbon cycles, and how human activities influence these natural systems [ 1 ]."
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
            question: "What does the acronym PACE stand for?",
            answers: [" Polar Aerosol Cloud Ecosystem", "Plankton, Aerosol, Cloud, ocean Ecosystem", "Planetary Atmosphere and Climate Explorer", "Phytoplankton and Cloud Evolution"],
            correctAnswer: "Plankton, Aerosol, Cloud, ocean Ecosystem"
        },
        {
            question: "Which of the following is NOT a primary objective of NASA's PACE satellite?",
            answers: ["Monitor marine ecosystems and phytoplankton", "Study atmospheric aerosols", "Observe interactions between clouds and aerosols", "Measure the ozone layer in the atmosphere"],
            correctAnswer: "Measure the ozone layer in the atmosphere"
        },
        // {
        //     question: "What is the main instrument on PACE responsible for measuring ocean color?",
        //     answers: ["Multi-Angle Polarimeter (MAP)", "Hyper-Angular Rainbow Polarimeter (HARP2)", "Ocean Color Instrument (OCI)", "Aerosol Monitoring Spectrometer (AMS)"],
        //     correctAnswer: "Ocean Color Instrument (OCI)"
        // },
        // {
        //     question: "PACE will use which of the following technologies to provide more detailed data on atmospheric particles?",
        //     answers: ["Polarimetry", "LIDAR", "Synthetic Aperture Radar", "GPS"],
        //     correctAnswer: "Polarimetry"
        // },
        {
            question: "What role do phytoplankton, which PACE will monitor, play in the ocean ecosystem?",
            answers: ["They contribute to the ozone layer's formation", "They form the base of the marine food chain and help with carbon cycling", "They cause ocean acidification", "They reflect solar radiation to cool the Earth"],
            correctAnswer: "They form the base of the marine food chain and help with carbon cycling"
        }
        // {
        //     question: "Which orbit will the PACE satellite follow to ensure consistent data collection over the same parts of the Earth?",
        //     answers: ["Geostationary orbit", "Sun-synchronous polar orbit", "Low-Earth orbit", "Elliptical orbit"],
        //     correctAnswer: "Sun-synchronous polar orbit"
        // }
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

Component.displayName = "Lesson1Page";