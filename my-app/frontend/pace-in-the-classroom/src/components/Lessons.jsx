import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import LessonCard from "./LessonCard";
import Journey from "./Journey";
import sections from "./Modules";
import QuizModule from "./QuizModule";
import "../styling/Lessons.css";

const Lessons = () => {
  const [openLesson, setOpenLesson] = useState(null);
  const [quizVisible, setQuizVisible] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [score, setScore] = useState(0);

  const toggleLesson = (lessonIndex) => {
    setOpenLesson(openLesson === lessonIndex ? null : lessonIndex);
    if (openLesson !== lessonIndex && openLesson === null) {
      setCompletedLessons((prev) => prev + 1);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Why is PACE Important?</h1>
      <p className="lead text-center">Join us on a fun journey to learn about how PACE helps us understand our planet!</p>

      <Journey completedLessons={completedLessons} />

      {sections.map((section, secIndex) => (
        <div key={secIndex}>
          <h2 className="text-center mb-4">{section.section}</h2>
          <Row className="justify-content-center">
            {section.modules.map((module, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <LessonCard
                  lessonIndex={index + 1}
                  title={module.title}
                  content={module.keyPoints}
                  discussion={module.discussion}
                  fact={module.fact}
                  link={module.resource}
                  image={module.image}
                  openLesson={openLesson}
                  toggleLesson={toggleLesson}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}

      <Row className="mt-4 text-center">
        <Col>
          <Button onClick={() => setQuizVisible(!quizVisible)}>
            {quizVisible ? "Hide Quiz" : "Take the Quiz!"}
          </Button>
        </Col>
      </Row>

      {quizVisible && <QuizModule setScore={setScore} score={score} />}
    </Container>
  );
};

export default Lessons;
