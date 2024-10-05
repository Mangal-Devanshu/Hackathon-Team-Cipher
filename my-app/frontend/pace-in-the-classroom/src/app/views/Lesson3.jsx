import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation
import Card from '../components/Card';
import EarthSimulation from '../components/EarthSimulation';
import MarineLifeMap from '../components/MarineLifeMap';

const earthData = [
    {
        id: 'Importance of Sunlight',
        image: '/lessons/lessonContent/lesson3/3.2.1.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">Sunlight penetrates the ocean surface, which is essential for photosynthesis in marine ecosystems.</li>
                <li class="my-4">Phytoplankton rely on sunlight to produce oxygen and form the base of the marine food web.</li>
                <li class="my-4">Understanding light's role is crucial for assessing the health of ocean ecosystems.[ 1 ]</li>
            </ul>
        `
    },
    {
        id: 'Light Absorption and Depth',
        image: '/lessons/lessonContent/lesson3/3.2.2.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">Different wavelengths of light are absorbed at varying depths, affecting marine life.</li>
                <li class="my-4">Red light is absorbed quickly, while blue light penetrates deeper, influencing ocean color.</li>
                <li class="my-4">The depth of light penetration impacts the distribution of marine organisms.[ 1 ]</li>
            </ul>
        `
    },
    {
        id: 'Impact on Ocean Color',
        image: '/lessons/lessonContent/lesson3/3.2.3.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">The color of the ocean changes based on light absorption, with deeper water appearing darker.</li>
                <li class="my-4">Different organisms adapt to the varying light conditions in their environments.</li>
                <li class="my-4">Understanding these color changes helps in studying marine biodiversity.[ 1 ]</li>
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
            <div class="absolute inset-0 bg-cover bg-center opacity-100 w-full" style={{ backgroundImage: "url('/lessons/lessonContent/lesson3/3.jpg')" }}></div>

            {/* Content */}
            <div class="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-80 p-6 rounded-lg">
                <h1 class="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">Explore the Role of Light in the Ocean</h1>
                <p class="text-xl mt-4 text-justify max-w-3xl leading-relaxed">
                    Discover how sunlight penetrates the ocean and supports marine ecosystems. Understand how different wavelengths of light influence ocean color and marine life.[ 1 ]
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
                <p className="absolute bottom-0 left-0 w-full text-[10px] text-right bg-opacity-50 bg-black text-white py-1">
                     Source:-Image by AmericansOcean Organization[ 14 ]
                </p>
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
                        image="/lessons/lessonContent/lesson3/3.1.jpg"
                        title="Sunlight Penetration"
                        points="Sunlight is crucial for photosynthesis in marine ecosystems. It penetrates the ocean surface, enabling phytoplankton to produce oxygen, forming the foundation of the marine food web.[ 1 ]"
                    />
                    <Card
                        image="/lessons/lessonContent/lesson3/3.2.jpg"
                        title="Wavelength Absorption"
                        points="Different wavelengths of light are absorbed at different depths in the ocean. Red light is absorbed quickly, while blue light penetrates deeper, influencing marine life behavior and the ocean's appearance.[ 1 ]"
                    />
                    <Card
                        image="/lessons/lessonContent/lesson3/3.3.jpg"
                        title="Impact on Marine Life"
                        points="Light availability influences the distribution and behavior of marine organisms. Many species rely on sunlight for navigation, reproduction, and finding food, making light a critical factor in marine biodiversity.[ 1 ]"
                    />
                    <Card
                        image="/lessons/lessonContent/lesson3/3.4.jpg"
                        title="Ocean Color Dynamics"
                        points="The varying absorption of light gives the ocean its distinctive colors. The ocean appears blue due to the deep penetration of blue light, while other colors like red are absorbed quickly, affecting our perception of water quality.[ 1 ]"
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
            question: "Why is sunlight important for marine ecosystems?",
            answers: ["It helps fish swim faster", "It enables phytoplankton to perform photosynthesis", "It heats the water", "It causes waves"],
            correctAnswer: "It enables phytoplankton to perform photosynthesis"
        },
        {
            question: "Which color of light penetrates the ocean the deepest?",
            answers: ["Red", "Green", "Blue", "Yellow"],
            correctAnswer: "Blue"
        },
        {
            question: "What happens to red light in the ocean?",
            answers: ["It penetrates the deepest", "It disappears quickly", "It is reflected by marine organisms", "It heats the ocean surface"],
            correctAnswer: "It disappears quickly"
        },
        {
            question: "How does light absorption affect ocean color?",
            answers: ["More light makes the ocean green", "Red light makes the ocean blue", "Blue light penetrates deeply, giving the ocean its blue color", "Light absorption has no effect on ocean color"],
            correctAnswer: "Blue light penetrates deeply, giving the ocean its blue color"
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
            <MarineLifeMap />
            <QuizComponent questions={questions} />
        </div>
    );
};

Component.displayName = "Lesson3Page";