import React, { useState } from 'react';
import Card from './Card';
import '../styling/About.css';
import myImage from '../assets/dhairya.jpg'

const cardsData = [
    { name: "Devanshu Mangal", field: "Database + Backend" },
    { name: "Ronit Rathod", field: "Database + Backend" },
    { name: "Dhairya Prajapati", field: "Frontend" },
    { name: "Manan Tarsaria", field: "Database" },
];

function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
    };

    return (
        <div className="about-container">
            <div className="background-svg"></div>
            <div className="arrow left" onClick={prevCard}>&lt;</div>
            <div className="card-container">
                <Card
                    name={cardsData[currentIndex].name}
                    field={cardsData[currentIndex].field}
                    img={myImage}
                    className="animated-card"
                />
            </div>
            <div className="arrow right" onClick={nextCard}>&gt;</div>
        </div>
    );
}

export default About;
