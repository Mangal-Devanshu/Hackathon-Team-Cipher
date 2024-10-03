import React, { useState } from 'react';
import Example from './Example';
import "../styling/Lessons.css";
import { FaLock } from 'react-icons/fa'; // FontAwesome Lock Icon

function Lessons() {
    const [completedLessons, setCompletedLessons] = useState([false, false, false, false, false, false]); // Track lesson completion

    // Function to handle lesson completion
    const handleLessonComplete = (lessonIndex) => {
        const updatedCompletion = [...completedLessons];
        updatedCompletion[lessonIndex] = true;
        if (lessonIndex < completedLessons.length - 1) {
            updatedCompletion[lessonIndex + 1] = false; // Unlock next lesson
        }
        setCompletedLessons(updatedCompletion);
    };

    return (
        <div className="flex flex-col bg-black p-4">
            {/* Ensure only the first lesson is unlocked initially */}
            <LessonSection
                lessonIndex={0}
                isCompleted={completedLessons[0]}
                isUnlocked={true}  /* First lesson is unlocked */
                cardsData={cardsData1}
                title="INTRODUCTION TO PACE"
                onLessonComplete={() => handleLessonComplete(0)}
            />
            {/* Subsequent lessons are locked until the previous one is completed */}
            <LessonSection
                lessonIndex={1}
                isCompleted={completedLessons[1]}
                isUnlocked={completedLessons[0]}
                cardsData={cardsData2}
                title="THE OCEAN-ATMOSPHERE INTERACTION"
                onLessonComplete={() => handleLessonComplete(1)}
            />
            <LessonSection
                lessonIndex={2}
                isCompleted={completedLessons[2]}
                isUnlocked={completedLessons[1]}
                cardsData={cardsData3}
                title="PACE'S SCIENTIFIC INSTRUMENT"
                onLessonComplete={() => handleLessonComplete(2)}
            />
            <LessonSection
                lessonIndex={3}
                isCompleted={completedLessons[3]}
                isUnlocked={completedLessons[2]}
                cardsData={cardsData4}
                title="APPLICATIONS OF PACE DATA"
                onLessonComplete={() => handleLessonComplete(3)}
            />
            <LessonSection
                lessonIndex={4}
                isCompleted={completedLessons[4]}
                isUnlocked={completedLessons[3]}
                cardsData={cardsData5}
                title="THE IMPORTANCE OF PHYTOPLANKTON"
                onLessonComplete={() => handleLessonComplete(4)}
            />
            <LessonSection
                lessonIndex={5}
                isCompleted={completedLessons[5]}
                isUnlocked={completedLessons[4]}
                cardsData={cardsData6}
                title="THE IMPACT OF CLIMATE CHANGE ON OCEAN"
                onLessonComplete={() => handleLessonComplete(5)}
            />
        </div>
    );
}

// Component for each lesson section
const LessonSection = ({ lessonIndex, isCompleted, isUnlocked, cardsData, title, onLessonComplete }) => {
    return (
        <div className={`my-10 h-2/4 w-full transition-opacity duration-300 ${isUnlocked ? 'opacity-100' : 'opacity-50'}`}>
            {isUnlocked ? (
                <>
                    <Example numberOfCards={cardsData.length} cardsData={cardsData} startTitle={title} />
                    <div className="flex flex-col items-center justify-center mt-4">
                        {!isCompleted && (
                            <button
                                onClick={onLessonComplete}
                                className="mt-4 bg-blue-700 text-lg text-white font-bold px-6 py-4 rounded-lg hover:bg-blue-900 transition duration-300"
                            >
                                Complete Lesson
                            </button>
                        )}
                        {isCompleted && (
                            <div className="mt-4 text-blue-400 text-center text-xl">Lesson Completed! You can proceed to the next one.</div>
                        )}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center mt-4">
                    <FaLock className="text-blue-500 text-4xl" /> {/* Lock icon for locked lessons */}
                    <div className="text-center text-white mt-2">Complete the previous lesson to unlock this section.</div>
                </div>
            )}
        </div>
    );
};

export default Lessons;

const cardsData1 = [
    {
        src: "/lessons/2.jpg",
        alternative: "Lesson-1",
        title: "What Is PACE?",
        id: 1,
        path: "/lesson1"
    }
];

const cardsData2 = [
    {
        src: "/lessons/3.jpg",
        alternative: "Lesson-2",
        title: "Understanding The Cycle",
        id: 1,
        path: "/lesson2"
    },
    {
        src: "/lessons/4.jpg",
        alternative: "Lesson-3",
        title: "The Role Of Light In Ocean",
        id: 2,
        path: "/lesson3"
    }
];

const cardsData3 = [
    {
        src: "/lessons/4.jpg",
        alternative: "Lesson-4",
        title: "Ocean Color & Its Significance",
        id: 1,
        path: "/lesson4"
    },
    {
        src: "/lessons/5.jpg",
        alternative: "Lesson-5",
        title: "Aerosols & Cloud Formation",
        id: 2,
        path: "/lesson5"
    }
];

const cardsData4 = [
    {
        src: "/lessons/6.jpg",
        alternative: "Lesson-6",
        title: "Climate Change Monitoring",
        id: 1,
        path: "/lesson6"
    },
    {
        src: "/lessons/7.jpg",
        alternative: "Lesson-7",
        title: "Future Of Ocean Monitoring",
        id: 2,
        path: "/lesson7"
    }
];

const cardsData5 = [
    {
        src: "/lessons/8.jpg",
        alternative: "Lesson-8",
        title: "Phytoplankton: The Ocean's Lungs",
        id: 1,
        path: "/lesson8"
    },
    {
        src: "/lessons/9.jpg",
        alternative: "Lesson-9",
        title: "How PACE Monitors Phytoplankton Health",
        id: 2,
        path: "/lesson9"
    }
];

const cardsData6 = [
    {
        src: "/lessons/10.jpg",
        alternative: "Lesson-10",
        title: "Rising Sea Temperatures & Their Effects",
        id: 1,
        path: "/lesson10"
    },
    {
        src: "/lessons/11.jpg",
        alternative: "Lesson-11",
        title: "Ocean Acidification & Its Consequences",
        id: 2,
        path: "/lesson11"
    }
];
