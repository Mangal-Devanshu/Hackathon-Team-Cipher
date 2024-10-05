import React from 'react';
import MyChart from '../components/MyChart';

export function Component() {
    return (
        <section className="relative w-full min-h-screen">
            {/* Asteroids as background */}
            {/* <div className="absolute inset-0 z-20">
                <Asteroids count={150} />
            </div> */}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                {/* <h1 className="text-white text-center text-4xl font-bold my-10">Concentration Analysis</h1> */}
                <MyChart />
                {/* Add any additional content here */}
            </div>
        </section>
    );
}

Component.displayName = "SimulationPage";
