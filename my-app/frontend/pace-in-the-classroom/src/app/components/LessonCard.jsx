import React, { useState } from "react";
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap
import "../styling/LessonCard.css";

const LessonCard = ({ lessonIndex, title, content, discussion, fact, link, openLesson, toggleLesson, image }) => {
  const [showMore, setShowMore] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(false); // State for showing discussion

  return (
    <div className={`lesson-card ${openLesson === lessonIndex ? "open" : ""}`} onClick={() => toggleLesson(lessonIndex)}>
      {/* Horizontal image display */}
      <div className="image-area">
        <img src={image} alt={title} className="module-image" />
      </div>

      {/* Below the image: text area and buttons */}
      <div className="text-area">
        <h5 className="title animate-title">{title}</h5>
        {openLesson === lessonIndex && (
          <div className="content-container animate-text">
            <ul className="key-points">
              {content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <h6>Did you know?</h6>
              <p>{fact}</p>
            </ul>
            <Button
              variant="primary"
              className="learn-more-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing on button click
                window.open(link, "_blank"); // Directly open link
              }}
            >
              Learn More
            </Button>
            <Button
              variant="secondary"
              className="discussion-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing on button click
                setShowDiscussion(!showDiscussion);
              }}
            >
              {showDiscussion ? "Hide Discussion" : "Show Discussion"}
            </Button>
            {showDiscussion && (
              <div className="discussion-container">
                <textarea
                  className="discussion-textarea"
                  value={discussion.join("\n")}
                  readOnly
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;