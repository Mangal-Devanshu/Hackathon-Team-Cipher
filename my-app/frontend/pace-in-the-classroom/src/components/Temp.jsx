import { useState } from 'react';
import CoralReefSimulation from './CoralReefSimulation';
import Navbar from './Navbar';
import MarineLifeMap from './MarineLifeMap';

function Temp() {
    return (
        <div>
            <div>
                <MarineLifeMap />
            </div>
            {/* <CoralReefSimulation /> */}
        </div>
    );
}

export default Temp;