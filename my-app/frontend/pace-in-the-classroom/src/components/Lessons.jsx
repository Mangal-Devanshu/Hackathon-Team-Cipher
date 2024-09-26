import React, { useState } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import Navbar from './Navbar';
import LessonCard from "./LessonCard";
import sections from "./Modules";
import QuizModule from "./QuizModule";
import "../styling/Lessons.css";

function Lessons() {
    const [openLesson, setOpenLesson] = useState(0); // Initialize to the first lesson index
    const [quizVisible, setQuizVisible] = useState(false);
    const [score, setScore] = useState(0);
    const [sectionIndex, setSectionIndex] = useState(0); // For section navigation

    const toggleLesson = (lessonIndex) => {
        setOpenLesson(openLesson === lessonIndex ? null : lessonIndex);
    };

    const nextLesson = () => {
        setOpenLesson(prevLessonIndex => {
            const nextIndex = prevLessonIndex + 1;
            if (nextIndex < sections[sectionIndex].modules.length) {
                return nextIndex;
            }
            return prevLessonIndex; // Stay on the last lesson
        });
    };

    const prevLesson = () => {
        setOpenLesson(prevLessonIndex => {
            const newIndex = prevLessonIndex - 1;
            if (newIndex >= 0) {
                return newIndex;
            }
            return prevLessonIndex; // Stay on the first lesson
        });
    };

    const nextSection = () => {
        setSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
        setOpenLesson(0); // Reset to the first lesson of the new section
    };

    const prevSection = () => {
        setSectionIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
        setOpenLesson(0); // Reset to the first lesson of the new section
    };

    return (
        <div className="lessons-page">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="lessons-container">
                <Container className="mt-4 position-relative z-index-1">
                    <h1 className="text-center mb-4 lesson-title animate-title">
                        {sections[sectionIndex].section}
                    </h1>

                    {/* Section Navigation */}
                    <div className="arrow-container text-center mb-4 lesson-navigation">
                        <Button variant="outline-primary" onClick={prevSection}>Previous Section</Button>
                        <Button variant="outline-primary" onClick={nextSection}>Next Section</Button>
                    </div>

                    {/* Single Lesson Card Display */}
                    <div>
                        <Row>
                            <Col className="card-column" lg={6} md={8}>
                                <LessonCard
                                    lessonIndex={openLesson}
                                    title={sections[sectionIndex].modules[openLesson]?.title}
                                    content={sections[sectionIndex].modules[openLesson]?.keyPoints}
                                    discussion={sections[sectionIndex].modules[openLesson]?.discussion}
                                    fact={sections[sectionIndex].modules[openLesson]?.fact}
                                    link={sections[sectionIndex].modules[openLesson]?.resource}
                                    image={sections[sectionIndex].modules[openLesson]?.image}
                                    openLesson={openLesson}
                                    toggleLesson={toggleLesson}
                                />
                            </Col>
                        </Row>
                    </div>

                    {/* Lesson Navigation Buttons */}
                    <div className="lesson-navigation text-center mt-4">
                        <Button
                            variant="outline-light"
                            onClick={prevLesson}
                            disabled={openLesson === 0} // Disable if on the first lesson
                        >
                            Previous Lesson
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={nextLesson}
                            disabled={openLesson >= sections[sectionIndex].modules.length - 1} // Disable if on the last lesson
                        >
                            Next Lesson
                        </Button>
                    </div>

                    {/* Quiz Section */}
                    <Row className="mt-4 text-center">
                        <Col>
                            <Button
                                className={`quiz-button ${quizVisible ? "quiz-button-active" : ""}`}
                                onClick={() => setQuizVisible(!quizVisible)}
                            >
                                {quizVisible ? "Hide Quiz" : "Take the Quiz!"}
                            </Button>
                        </Col>
                    </Row>

                    {quizVisible && <QuizModule setScore={setScore} score={score} />}
                </Container>
            </div>
        </div>
    );
}

export default Lessons;
