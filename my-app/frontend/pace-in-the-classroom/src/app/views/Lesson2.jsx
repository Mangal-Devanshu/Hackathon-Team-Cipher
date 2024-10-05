import React, { useState } from "react";
import Card from '../components/Card';
import EarthSimulation from '../components/EarthSimulation';
import { useNavigate } from 'react-router-dom'; // For navigation

const earthData = [
    {
        id: 'Ocean-Atmosphere Interaction',
        image: '/lessons/lessonContent/lesson2/2.2.1.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">The ocean and atmosphere exchange heat, moisture, and carbon, which are crucial for regulating Earth's climate.</li>
                <li class="my-4">These interactions influence weather patterns, including storms, rainfall, and wind systems globally.</li>
                <li class="my-4">Understanding these interactions helps us predict climate changes and weather variations.</li>
            </ul>
        `
    },
    {
        id: 'Climate Regulation',
        image: '/lessons/lessonContent/lesson2/2.2.2.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">The ocean absorbs about 30% of human-made carbon dioxide, helping mitigate climate change effects.</li>
                <li class="my-4">Ocean currents distribute heat globally, influencing regional climates, especially near coastlines.</li>
                <li class="my-4">Changes in ocean temperature can lead to extreme weather events like El Niño and La Niña.</li>
            </ul>
        `
    },
    {
        id: 'Carbon Sequestration',
        image: '/lessons/lessonContent/lesson2/2.2.3.jpg', // Placeholder image, use real or generated
        text: `
            <ul class="list-disc">
                <li class="my-4">The ocean plays a vital role in sequestering carbon, absorbing large quantities of CO₂ from the atmosphere.</li>
                <li class="my-4">Excess CO₂ absorption is causing ocean acidification, which threatens marine ecosystems.</li>
                <li class="my-4">Healthy oceans are critical to balancing the global carbon cycle and slowing climate change.</li>
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
            <div class="absolute inset-0 bg-cover bg-center opacity-100 w-full" style={{ backgroundImage: "url('/lessons/lessonContent/lesson2/horizon.jpg')" }}></div>

            {/* Content */}
            <div class="relative flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-80 p-6 rounded-lg">
                <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">Explore Earth's Climate</h1>
                <p class="text-xl mt-4 text-justify max-w-3xl leading-relaxed">
                    Discover how the ocean and atmosphere interact to regulate Earth's climate. Understand the balance between heat exchange, carbon cycling, and their impact on global weather systems.
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
                        image="/lessons/lessonContent/lesson2/2.1.jpg"
                        title="Ocean-Atmosphere Interaction"
                        points="The ocean and atmosphere regulate climate by exchanging heat, moisture, and gases. Ocean currents distribute heat, while atmospheric winds drive weather patterns. Together, they are balancing Earth's energy and moderating climate variability."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson2/2.2.jpg"
                        title="Climate Regulation"
                        points="The ocean stabilizes Earth's climate by absorbing excess heat from the atmosphere and storing it in deep waters. It also dissolves CO₂, where it's sequestered or used by marine organisms, reducing atmospheric carbon levels."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson2/2.3.jpg"
                        title="Carbon Sequestration"
                        points="The ocean plays a crucial role in sequestering carbon dioxide by absorbing CO₂ from the atmosphere. Phytoplankton convert it during photosynthesis, while some carbon sinks to the ocean floor. This natural process reduces atmospheric CO₂."
                    />
                    <Card
                        image="/lessons/lessonContent/lesson2/2.4.jpg"
                        title="Extreme Weather"
                        points="El Niño and La Niña are climate phenomena driven by changes in Pacific Ocean temperatures. El Niño warms, disrupting weather globally, while La Niña cools, intensifying typical patterns like storms and droughts."
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
                            <p class="text-white">Question {currentQuestion + 1} of {questions.length}</p>
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
            question: "What is the main interaction between the ocean and atmosphere?",
            answers: ["Heat exchange, moisture transfer, and carbon cycling", "Wind formation and rain cycles", "Only moisture transfer", "None of the above"],
            correctAnswer: "Heat exchange, moisture transfer, and carbon cycling"
        },
        {
            question: "How much carbon dioxide does the ocean absorb from human activities?",
            answers: ["10%", "50%", "30%", "80%"],
            correctAnswer: "30%"
        },
        {
            question: "Which phenomenon is driven by ocean temperature changes?",
            answers: ["Hurricanes", "Monsoons", "El Niño and La Niña", "Tornadoes"],
            correctAnswer: "El Niño and La Niña"
        },
        {
            question: "What impact does carbon sequestration have on the climate?",
            answers: ["Increases ocean acidification", "Reduces global temperature", "Has no impact", "Decreases rainfall"],
            correctAnswer: "Increases ocean acidification"
        },
    ];

    return (
        <div class="bg-black">
            <button
                onClick={() => navigate('/lessons')}
                class="mt-4 mb-8 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
            >
                X
            </button>
            <HeroSection />
            <ObjectivesSection />
            <EarthSimulation data={earthData} />
            <QuizComponent questions={questions} />
        </div>
    );
};

Component.displayName = "Lesson2Page";