import React, { useState } from "react";
import "../styling/Lesson.css";

const Lesson = ({ lessonIndex, title, content, discussion, fact, link, openLesson, toggleLesson, image }) => {
  const [showMore, setShowMore] = useState(false);

  return (
  <body>
    <div className="lesson-container" onClick={() => toggleLesson(lessonIndex)}>
      <h5 className="title">{title}</h5>
      <div className="image-container">
        <img src={image} alt={title} className="module-image" />
        {openLesson === lessonIndex && (
          <div className="content-overlay">
            <ul className="key-points">
              {content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              <h6>Did you know?</h6>
              <p>{fact}</p>
            </ul>
            <button className="toggle-button" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Learn More"}
            </button>
            {showMore && (
              <div className="learn-more">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="footer-bar">
        <h6 className="discussion-header">Discussion:</h6>
        <ul className="discussion-points">
          {discussion.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  </body>
  );
};

export default Lesson;
