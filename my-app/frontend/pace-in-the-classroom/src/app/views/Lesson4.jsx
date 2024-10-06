import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Card from '../components/Card';
import EarthSimulation from '../components/EarthSimulation';
import { useNavigate } from 'react-router-dom'; // For navigation
import CoralReefSimulation from '../components/CoralReefSimulation';
import SimulationInfo from "../components/SimulationInfo";

const earthData = [

    {
        id: 'Ocean Acidification',
        image: '/lessons/lessonContent/lesson4/4.2.1.jpg',
        text: `
            <ul class="list-disc">
                <li class="my-4">As oceans absorb more CO₂, it leads to acidification, which affects marine organisms like corals, mollusks, and plankton.</li>
                <li class="my-4">Ocean acidification weakens coral reefs, reduces shell formation in marine organisms, and disrupts marine ecosystems.</li>
                <li class="my-4">Healthy oceans are crucial for maintaining marine biodiversity and supporting human life through food resources [ 1 ].</li>
            </ul>
        `
    },
    {
        id: 'Coral Bleaching',
        image: '/lessons/lessonContent/lesson4/4.2.2.jpg',
        text: `
            <ul class="list-disc">
                <li class="my-4">Coral bleaching occurs when rising sea temperatures cause corals to expel the algae that give them color and nutrients.</li>
                <li class="my-4">This weakens corals, making them more susceptible to disease and leading to large-scale reef degradation.</li>
                <li class="my-4">Healthy coral reefs are vital to supporting marine life and protecting coastlines from storms and erosion [ 1 ].</li>
            </ul>
        `
    },
    {
        id: 'Harmful Algal Blooms (HABs)',
        image: '/lessons/lessonContent/lesson4/4.2.3.jpg',
        text: `
            <ul class="list-disc">
                <li class="my-4">Harmful algal blooms (HABs) are caused by excess nutrients and warming waters, producing toxins harmful to marine life and humans.</li>
                <li class="my-4">HABs can deplete oxygen levels in the water, creating 'dead zones' where marine organisms cannot survive.</li>
                <li class="my-4">Monitoring ocean color helps predict and detect HABs, allowing scientists to take early action to mitigate their impact [ 1 ].</li>
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
            <div class="absolute inset-0 bg-cover bg-center rounded-lg opacity-100 w-full" style={{ backgroundImage: "url('/lessons/lessonContent/lesson4/4.jpg')" }}></div>

            {/* Content */}
            <div class="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-80 p-6 rounded-lg">
                <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">Explore PACE's Instruments</h1>
                <p class="text-xl mt-4 text-justify max-w-3xl leading-relaxed">
                    Discover how NASA's PACE mission uses advanced instruments like the Ocean Color Instrument (OCI) to monitor ocean health and its critical role in Earth's ecosystems [ 1 ].
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
                        image="/lessons/lessonContent/lesson4/4.1.jpg"
                        title="PACE’s Ocean Color Instrument (OCI)"
                        points="PACE’s OCI monitors chlorophyll and ocean color changes, which are essential for understanding phytoplankton health and detecting shifts in marine ecosystems [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson4/4.2.jpg"
                        title="Ocean Acidification"
                        points="As CO₂ levels rise, oceans absorb more carbon dioxide, leading to acidification, which negatively impacts marine species like corals and shellfish [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson4/4.3.jpg"
                        title="Coral Bleaching"
                        points="Warmer ocean temperatures lead to coral bleaching, a phenomenon where stressed corals expel algae, losing their color and becoming more vulnerable to disease [ 1 ]."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson4/4.4.jpg"
                        title="Harmful Algal Blooms (HABs)"
                        points="Pollution and rising temperatures can cause harmful algal blooms, which threaten marine life by producing toxins and depleting oxygen in the water [ 1 ]."
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
                <div class="bg-gradient-to-br from-zinc-900 via-neutral-950 to-black p-8 rounded-lg shadow-lg shadow-blue-700 max-w-lg mx-auto">
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
            question: "What does PACE's Ocean Color Instrument (OCI) measure?",
            answers: ["Chlorophyll and other pigments", "Water temperature", "Carbon dioxide levels", "Salinity levels"],
            correctAnswer: "Chlorophyll and other pigments"
        },
        {
            question: "Why is monitoring ocean color important?",
            answers: ["It helps predict weather patterns", "It assesses phytoplankton health", "It tracks ocean currents", "It measures water depth"],
            correctAnswer: "It assesses phytoplankton health"
        },
        {
            question: "How much of the world's oxygen is produced by phytoplankton?",
            answers: ["25%", "10%", "50%", "75%"],
            correctAnswer: "50%"
        },
        {
            question: "What can changes in ocean color indicate?",
            answers: ["Shifts in marine ecosystems", "Tidal patterns", "Seasonal rainfall", "Oceanic earthquakes"],
            correctAnswer: "Shifts in marine ecosystems"
        },
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
            <SimulationInfo />
            <CoralReefSimulation />
            <QuizComponent questions={questions} />
        </div>
    );
};

Component.displayName = "Lesson4Page";