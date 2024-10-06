import React from "react";
import TitleCard from "../components/TitleCard";

const cardData1 = [
    { image: "/about/1.jpeg", name: "Mr. Nishant Painter", text: "CEO & Founder, Shivantra", href: "https://www.linkedin.com/in/nishant-painter-31388582/" },
    { image: "/about/2.jpg", name: "Prof. (Dr.) Bintu Kadhiwala", text: "Assistant Professor, Computer Department, SCET", href: "https://www.linkedin.com/in/prof-dr-bintu-kadhiwala-69729782/" },
];

const cardData2 = [
    { image: "/about/4.jpeg", name: "Devanshu Mangal", text: "Full Stack Dev", href: "https://www.linkedin.com/in/devanshu-mangal-4bb666297/" },
    { image: "/about/5.1.jpg", name: "Ronit Rathod", text: "Backend + Database", href: "https://www.linkedin.com/in/ronitrathod?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { image: "/about/6.2.jpeg", name: "Dhairya Prajapati", text: "Frontend", href: "https://www.linkedin.com/in/dhairya-prajapati-35662b331/" },
];

const cardData3 = [
    { image: "/about/7.2.jpeg", name: "Manan Tarsairya", text: "Backend + Literature Survey", href: "https://www.linkedin.com/in/manan-tarsariya-903587292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { image: "/about/8.jpg", name: "Jit Prajapati", text: "Website Deployment", href: "https://www.linkedin.com/in/jit-prajapati-7b39392a9/" },
    { image: "/about/9.2.jpg", name: "Jainex Pumbhaidiya", text: "Website Deployment", href: "https://www.linkedin.com/in/jainex-pumbhadiya-5094812b6/" },
];

const cardData4 = [
    { image: "/about/3.1.jpeg", name: "Prof. Dhatri Pandya", text: "Assistant Professor, Computer Department, SCET", href: "https://www.linkedin.com/in/dhatri-pandya-a76569a8/" },
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