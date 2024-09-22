import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styling/Journey.css"; // Add relevant CSS here for train animation

const Journey = ({ completedLessons }) => {
  const progress = (completedLessons / 5) * 100; // 5 total lessons for 100% journey

  return (
    <div className="journey-container">
      <h4>🚂 PACE Journey Progress</h4>
      <ProgressBar now={progress} label={`${progress}%`} />
      <p>Each lesson you complete takes you further on your learning journey!</p>
      <div className="train-animation">
        {/* Add some fun CSS animations of a moving train */}
      </div>
    </div>
  );
};

export default Journey;
