import React from "react";
import TitleCard from "./TitleCard";
import "../styling/About.css"; // Assuming you have custom CSS for animations or other styles

const cardData1 = [
    { image: "/assets/launch.jpg", name: "John Doe", text: "Full Stack Developer" },
    { image: "/assets/launch.jpg", name: "Jane Smith", text: "Data Scientist" },
    { image: "/assets/launch.jpg", name: "Alex Johnson", text: "UX Designer" },
];

const cardData2 = [
    { image: "/assets/pace.jpg", name: "John Doe", text: "Full Stack Developer" },
    { image: "/assets/pace.jpg", name: "Jane Smith", text: "Data Scientist" },
    { image: "/assets/pace.jpg", name: "Alex Johnson", text: "UX Designer" },
];

const cardData3 = [
    { image: "/assets/pace.jpg", name: "John Doe", text: "Full Stack Developer" },
    { image: "/assets/pace.jpg", name: "Jane Smith", text: "Data Scientist" },
    { image: "/assets/pace.jpg", name: "Alex Johnson", text: "UX Designer" },
];

function About() {
    return (
        <div className="flex flex-col bg-black min-h-screen overflow-auto items-center py-12">
            {/* Container for the entire page */}
            <div className="w-5/6 space-y-12">
                {/* Our Mentors Section */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-500 text-transparent bg-clip-text animate-gradient">
                        Our Mentors
                    </h2>
                    <div className="mt-8">
                        <TitleCard cardData={cardData1} numberOfCards={3} />
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="text-center">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-500 text-transparent bg-clip-text animate-gradient">
                        Team Members
                    </h2>
                    <div className="mt-8 space-y-8">
                        <TitleCard cardData={cardData2} numberOfCards={3} />
                        <TitleCard cardData={cardData3} numberOfCards={3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
