import { useState } from 'react';
import NewMap from '../components/NewMap';
import ToolTip from '../components/ToolTip';  // Importing the ToolTip component
import InfoButton from '../components/InfoButton';
import ReactPlayer from 'react-player'; // Importing ReactPlayer for video playback

export function Component() {
    const [showMap, setShowMap] = useState(false); // State to toggle the NewMap component

    const handleShowMap = () => {
        setShowMap(true); // Trigger map to appear
    };

    return (
        <section className="relative h-screen flex flex-col overflow-auto transform scale-80">
            {/* React Player for background video */}
            <div className="absolute inset-0 z-0">
                <ReactPlayer
                    url='/videos/16.mp4' // Replace with the actual path to the video
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='100%'
                    className="object-cover"
                    style={{
                        transform: 'scale(0.95)', // Adjust the scale value to zoom out (1.2 is 120% zoom)
                        transformOrigin: 'center', // Ensures the video scales from the center
                    }}
                />
            </div>

            {/* Container for the map and tooltip */}
            <div className="relative z-10 flex-grow flex items-center justify-center overflow-hidden">
                {/* Tooltip for providing information */}
                <div className="absolute bottom-28 right-4 z-40">
                    <InfoButton text="You can select the dataset and the mode in order to visualize it on the 3D globe." />
                </div>

                {/* NewMap component displayed above */}
                <div className="relative z-10 mt-24">
                    <NewMap />
                </div>
            </div>
        </section>
    );
}

Component.displayName = "MapsPage";