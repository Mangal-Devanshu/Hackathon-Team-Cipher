import React from "react";
import TitleCard from "../components/TitleCard";

const cardData1 = [
    { image: "/about/1.jpeg", name: "Mr. Nishant Painter", text: "CEO & Founder, Shivantra", href: "" },
    { image: "/assets/launch.jpg", name: "Prof. (Dr.) Bintu Kadhiwala", text: "Assistant Professor, Computer Department, SCET", href: "" },
];

const cardData2 = [
    { image: "/assets/pace.jpg", name: "Devanshu Mangal", text: "Frontend + Backend", href: "" },
    { image: "/assets/pace.jpg", name: "Ronit Rathod", text: "Backend + Database", href: "" },
    { image: "/assets/pace.jpg", name: "Dhairya Prajapati", text: "Frontend", href: "" },
];

const cardData3 = [
    { image: "/assets/pace.jpg", name: "Manan Tarsairya", text: "Backend + Literature Survey", href: "" },
    { image: "/assets/pace.jpg", name: "Jit Prajapati", text: "Website Deployment", href: "" },
    { image: "/assets/pace.jpg", name: "Jainex Pumbhaidiya", text: "Website Deployment", href: "" },
];

const cardData4 = [
    { image: "/assets/pace.jpg", name: "Prof. Dhatri Pandya", text: "Assistant Professor, Computer Department, SCET", href: "" },
];

export function Component() {
    return (
        <div className="flex flex-col bg-black min-h-screen overflow-auto items-center py-12">
            {/* Container for the entire page */}
            <div className="w-5/6 space-y-12">
                {/* Our Mentors Section */}
                <div className="text-center">
                    <h2 className="text-5xl text-blue-700 font-bold bg-clip-text animate-gradient">
                        Our Mentors
                    </h2>
                    <div className="mt-8">
                        <TitleCard cardData={cardData1} numberOfCards={2} />
                    </div>
                </div>
                {/* Special Thanks Section */}
                <div className="text-center">
                    <h2 className="text-5xl text-blue-700 font-bold bg-clip-text animate-gradient">
                        Special Thanks
                    </h2>
                    <div className="mt-8">
                        <TitleCard cardData={cardData4} numberOfCards={1} />
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="text-center">
                    <h2 className="text-5xl text-blue-700 font-bold bg-clip-text animate-gradient">
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

Component.displayName = "AboutPage";