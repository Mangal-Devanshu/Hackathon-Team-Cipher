import React, { useState } from "react";
import Card from './Card';
import EarthSimulation from './EarthSimulation';
import { useNavigate } from 'react-router-dom'; // For navigation

const earthData = [
    {
        id: 'Scientific Benefits & Importance',
        image: '/assets/earth1.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">By capturing detailed data on aerosols, clouds, and phytoplankton, PACE helps refine climate models, improving predictions of future climate changes.</li>
                <li class="my-4">PACE will monitor how the ocean absorbs carbon dioxide, which is critical for understanding the ocean's role in mitigating climate change.</li>
                <li class="my-4">Changes in phytoplankton also provide early warnings about shifts in marine ecosystems that can affect global fish stocks and biodiversity.</li>
            </ul>
        `
    },
    {
        id: 'Technology Innovations',
        image: '/assets/earth2.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">PACE introduces advanced sensor technologies for more precise measurements of ocean color, atmospheric particles, and clouds.</li>
                <li class="my-4">These technologies improve the resolution and accuracy of satellite imagery.</li>
                <li class="my-4">The new instruments pave the way for future Earth observation missions.</li>
            </ul>
        `
    },
    {
        id: 'PACE Mission Timeline',
        image: '/assets/earth3.jpg', // Placeholder image, use real Earth image or 3D model
        text: `
            <ul class="list-disc">
                <li class="my-4">The PACE mission began development in 2044, with a planned launch in 2024.</li>
                <li class="my-4">After launch, PACE will collect data for at least three years, contributing to long-term climate research.</li>
                <li class="my-4">PACE's data will be continuously analyzed to improve climate models and forecasts.</li>
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
        <div className="relative h-screen bg-black text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('/assets/launch.jpg')" }}
            ></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-60 p-6 rounded-lg">
                <h1 className="text-5xl font-bold mb-6">What Is PACE  ?</h1>
                <p className="text-lg mt-4 max-w-3xl leading-relaxed">
                    NASA's PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) mission is an advanced satellite mission designed to monitor Earth's oceans, atmosphere, and ecosystems.
                    It aims to study the intricate interactions between ocean ecosystems, atmospheric particles, and clouds, contributing to a better understanding of climate change, air quality, and how oceanic and atmospheric processes impact life on Earth.
                </p>

                <button
                    onClick={scrollToObjectives}
                    className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-full text-white text-lg hover:bg-blue-700 transition-colors"
                >
                    Scroll Down To Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const ObjectivesSection = () => {
    return (
        <section id="objectives" className="p-6">
            <div className="container w-full text-center bg-neutral-800 p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-white mb-8">Objectives Of PACE</h2>
                <div class="flex flex-row  justify-evenly">
                    <Card
                        image="/assets/pace.jpg"
                        title="Monitoring Ocean Health"
                        points="PACE will study the health of marine ecosystems by measuring concentrations of microscopic plants (phytoplankton) that form the base of the marine food chain. This helps scientists assess ocean productivity, the ocean's role in carbon cycling, and how changes in marine ecosystems affect biodiversity."
                    />
                    <Card
                        image="/assets/pace.jpg"
                        title="Study Atmospheric Aerosols"
                        points={["Monitors ocean health", "Tracks air quality", "Studies climate change impacts",]}
                    />
                    <Card
                        image="/assets/pace.jpg"
                        title="Examine Clouds and Climate"
                        points={["Monitors ocean health", "Tracks air quality", "Studies climate change impacts",]}
                    />
                    <Card
                        image="/assets/pace.jpg"
                        title="Address Climate Change"
                        points={["Monitors ocean health", "Tracks air quality", "Studies climate change impacts",]}
                    />
                </div>
            </div>
        </section>
    );
};

const LessonSection = ({ lessons }) => {
    return (
        <section id="lessons" className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">PACE Satellite Lessons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="bg-white p-6 rounded-lg shadow-md">
                            <img src={lesson.img} alt={lesson.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800">{lesson.title}</h3>
                            <p className="mt-2 text-gray-600">{lesson.description}</p>
                            <a href={lesson.url} className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </div>
                    ))}
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
        if (!selectedAnswer) { // Prevent selecting more than once
            setSelectedAnswer(answer);
            if (answer === questions[currentQuestion].correctAnswer) {
                setScore((prevScore) => prevScore + 1); // Increment score if the answer is correct
            }
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer(null);
        } else {
            setShowResult(true); // Show result after last question
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResult(false);
    };

    return (
        <section id="quiz" className="p-6 h-screen">
            <div className="container mx-auto rounded-lg bg-neutral-800 py-10">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Test Your Knowledge</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                    {showResult ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">Your Score: {score} / {questions.length}</h3>
                            <p className="mt-4">You have completed the quiz!</p>
                            <button onClick={() => navigate('/lessons')} className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full">
                                Back to Lessons
                            </button>
                            <button onClick={restartQuiz} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full">
                                Restart Quiz
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold">{questions[currentQuestion].question}</h3>
                            <ul className="mt-4 space-y-4">
                                {questions[currentQuestion].answers.map((answer, index) => (
                                    <li
                                        key={index}
                                        className={`p-4 rounded-lg cursor-pointer ${selectedAnswer
                                            ? answer === questions[currentQuestion].correctAnswer
                                                ? 'bg-green-200'
                                                : 'bg-red-200'
                                            : 'bg-blue-100 hover:bg-blue-200'
                                            }`}
                                        onClick={() => handleAnswerClick(answer)}
                                        style={{ pointerEvents: selectedAnswer ? 'none' : 'auto' }} // Disable click after selection
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                            {selectedAnswer && (
                                <p className={`mt-4 ${selectedAnswer === questions[currentQuestion].correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                                    {selectedAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Wrong!'}
                                </p>
                            )}
                            <button
                                onClick={nextQuestion}
                                className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg"
                                disabled={!selectedAnswer} // Disable next button until an answer is selected
                            >
                                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const Lesson1 = () => {
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
        {
            question: "What is the main instrument on PACE responsible for measuring ocean color?",
            answers: ["Multi-Angle Polarimeter (MAP)", "Hyper-Angular Rainbow Polarimeter (HARP2)", "Ocean Color Instrument (OCI)", "Aerosol Monitoring Spectrometer (AMS)"],
            correctAnswer: "Ocean Color Instrument (OCI)"
        },
        {
            question: "PACE will use which of the following technologies to provide more detailed data on atmospheric particles?",
            answers: ["Polarimetry", "LIDAR", "Synthetic Aperture Radar", "GPS"],
            correctAnswer: "Polarimetry"
        },
        {
            question: "What role do phytoplankton, which PACE will monitor, play in the ocean ecosystem?",
            answers: ["They contribute to the ozone layer's formation", "They form the base of the marine food chain and help with carbon cycling", "They cause ocean acidification", "They reflect solar radiation to cool the Earth"],
            correctAnswer: "They form the base of the marine food chain and help with carbon cycling"
        },
        {
            question: "Which orbit will the PACE satellite follow to ensure consistent data collection over the same parts of the Earth?",
            answers: ["Geostationary orbit", "Sun-synchronous polar orbit", "Low-Earth orbit", "Elliptical orbit"],
            correctAnswer: "Sun-synchronous polar orbit"
        }
    ];

    return (
        <div class="bg-black">
            <HeroSection />
            <ObjectivesSection />
            <EarthSimulation data={earthData} />
            <QuizComponent questions={questions} />
        </div>
    );
};

export default Lesson1;