import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Example from './Example';
import "../styling/Lessons.css";

function Lessons() {
    return (
        <div class="flex flex-col bg-black">
            <div>
                <Navbar />
            </div>
            <div class="my-10 h-2/4 w-full">
                <Example numberOfCards={1} cardsData={cardsData1} startTitle={"INTRODUCTION TO PACE"} endTitle={"SECTION ENDED"} />
            </div>
            <div class="my-10 h-2/4 w-full">
                <Example numberOfCards={2} cardsData={cardsData2} startTitle={"The Ocean-Atmosphere Interaction"} endTitle={"SECTION ENDED"} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

const cardsData1 = [
    {
        src: "/lessons/2.jpg",  // Path to the image
        alternative: "Lesson-1",  // Alt text for the image
        title: "What is PACE ?",  // Title to be displayed on the card
        id: 1,  // Unique identifier for the card
    }
];

const cardsData2 = [
    {
        src: "/lessons/3.jpg",  // Path to the image
        alternative: "Lesson-2",  // Alt text for the image
        title: "Understanding the cycle",  // Title to be displayed on the card
        id: 1,  // Unique identifier for the card
    },
    {
        src: "/lessons/4.jpg",
        alternative: "Lesson-3",
        title: "The role of light in ocean",
        id: 2,
    }
];

export default Lessons;