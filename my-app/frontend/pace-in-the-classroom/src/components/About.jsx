import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styling/About.css';

const Data = [
    { name: "Devanshu Mangal", field: "Database + Backend" },
    { name: "Ronit Rathod", field: "Database + Backend" },
    { name: "Dhairya Prajapati", field: "Frontend" },
    { name: "Manan Tarsariya", field: "Database and Automation" },
];

function About() {
    return (
        <div class="flex flex-col bg-black h-screen overflow-auto items-center">
            <div class="fixed">
                <Navbar />
            </div>
            <div class="my-32 w-3/4">
                <div class="flex flex-col m-4">
                    <span class="text-5xl text-center font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        Our Mentors
                    </span>
                    <div class="grid grid-cols-2 gap-4 m-3">
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">01</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">02</div>
                    </div>
                    <span class="text-5xl text-center font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                        Team Members
                    </span>
                    <div class="grid grid-cols-3 gap-4 m-3">
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">03</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">04</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">05</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">06</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">07</div>
                        <div class="bg-blue-600 text-center p-5 rounded-md m-2">08</div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default About;