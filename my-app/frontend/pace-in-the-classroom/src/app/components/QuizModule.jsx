import React, { useState } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import QuizContent from "./QuizContent";

const QuizModule = ({ setScore, score }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (question, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [question]: answer });
  };

  const handleQuizSubmit = () => {
    let calculatedScore = 0;
    QuizContent.forEach((module, moduleIndex) => {
      module.questions.forEach((questionObj, questionIndex) => {
        const questionKey = `module-${moduleIndex}-question-${questionIndex}`;
        if (selectedAnswers[questionKey] === questionObj.correctAnswer) {
          calculatedScore += 1;
        }
      });
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  return (
    <Card className="mt-4 quiz-container">
      <Card.Body>
        <h4 className="mb-4">Test Your Knowledge! 🎓</h4>
        <Form>
          {QuizContent.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <h5>{module.title}</h5>
              {module.questions.map((questionObj, questionIndex) => (
                <Form.Group controlId={`module-${moduleIndex}-question-${questionIndex}`} key={questionIndex}>
                  <Form.Label>{questionObj.question}</Form.Label>
                  {questionObj.options.map((option, optionIndex) => (
                    <Form.Check
                      type="radio"
                      label={option}
                      name={`module-${moduleIndex}-question-${questionIndex}`}
                      key={optionIndex}
                      value={option}
                      onChange={() => handleAnswerChange(`module-${moduleIndex}-question-${questionIndex}`, option)}
                    />
                  ))}
                </Form.Group>
              ))}
            </div>
          ))}

          <Button onClick={handleQuizSubmit} className="mt-3 submit-btn">
            Submit Quiz
          </Button>
        </Form>

        {showResult && (
          <Alert className="mt-4" variant={score === QuizContent.length ? "success" : "info"}>
            You got {score} out of {QuizContent.length} correct!
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuizModule;    
