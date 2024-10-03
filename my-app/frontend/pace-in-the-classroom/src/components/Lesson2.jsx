import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Lesson2 = () => {
    const [showQuestions, setShowQuestions] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 1,
            question: 'What color is the sky?',
            options: ['Blue', 'Red', 'Green', 'Yellow'],
            correctAnswer: 'Blue',
        },
        {
            id: 2,
            question: 'Which animal says "meow"?',
            options: ['Dog', 'Cat', 'Cow', 'Bird'],
            correctAnswer: 'Cat',
        },
        {
            id: 3,
            question: 'How many legs does a spider have?',
            options: ['6', '8', '4', '10'],
            correctAnswer: '8',
        },
    ];

    const handleOptionChange = (questionId, selectedOption) => {
        setAnswers({
            ...answers,
            [questionId]: selectedOption,
        });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleLessonComplete = () => {
        setShowQuestions(true);
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className="bg-black">
            {/* Video Section */}
            <motion.div
                className="min-h-screen flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-5xl font-extrabold text-white my-8 text-center">
                    Lesson 1: Introduction To PACE
                </h1>
                <ReactPlayer url="/videos/8.mp4" className="rounded-lg my-4" playing loop muted width="60%" height="60%" />
            </motion.div>

            {/* Lesson Content Section */}
            <motion.div
                className="min-h-screen flex flex-col items-center justify-center p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="flex justify-center mb-6">
                    <motion.img
                        src="/assets/launch.jpg"
                        alt="PACE Satellite Launch"
                        className="w-2/4 h-2/4 rounded-lg shadow-md object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <p className="text-lg font-medium mb-6 text-white leading-relaxed">
                    Welcome to your first lesson! Today we are going to learn about PACE.
                    PACE's data will help us better understand how the ocean and atmosphere exchange carbon dioxide.
                    It will also reveal how aerosols might fuel phytoplankton growth in the surface ocean.
                </p>

                <motion.button
                    onClick={handleLessonComplete}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                >
                    Complete Lesson
                </motion.button>
            </motion.div>

            {/* Questions Section */}
            {showQuestions && (
                <motion.div
                    className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center">Fun Quiz!</h2>
                    {questions.map((question) => (
                        <div key={question.id} className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
                            <div className="flex flex-wrap gap-2">
                                {question.options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleOptionChange(question.id, option)}
                                        className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${answers[question.id] === option
                                            ? 'bg-blue-300 text-blue-900 border-blue-600'
                                            : 'bg-gray-200 text-gray-700 border-gray-300'
                                            } shadow-md hover:bg-blue-400 hover:text-white hover:shadow-lg`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    ))}
                    {!isSubmitted ? (
                        <motion.button
                            onClick={handleSubmit}
                            className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition duration-300 ease-in-out mt-4 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            Submit Answers
                        </motion.button>
                    ) : (
                        <div className="mt-4">
                            {questions.map((question) => (
                                <div key={question.id} className="mb-4">
                                    <p className="text-lg">
                                        <strong>{question.question}</strong>
                                        <br />
                                        {answers[question.id] === question.correctAnswer ? (
                                            <span className="text-green-500">Correct!</span>
                                        ) : (
                                            <span className="text-red-500">
                                                Incorrect. The correct answer is {question.correctAnswer}.
                                            </span>
                                        )}
                                    </p>
                                </div>
                            ))}
                            <motion.button
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300 ease-in-out mt-4 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/lessons">Back To Lessons</Link>
                            </motion.button>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default Lesson2;