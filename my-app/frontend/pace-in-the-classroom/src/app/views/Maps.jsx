import { useState } from 'react';
import NewMap from '../components/NewMap';
import InfoButton from '../components/InfoButton';
import ReactPlayer from 'react-player'; // Importing ReactPlayer for video playback

export function Component() {
    const [showMap, setShowMap] = useState(false); // State to toggle the NewMap component

    const handleShowMap = () => {
        setShowMap(true); // Trigger map to appear
    };

    return (
        <section className="relative bg-transparent h-screen flex flex-col overflow-hidden"> {/* Removed transform scale-80 */}
            {/* React Player for background video */}
            <div className="absolute bg-transparent inset-0 z-0 w-[100%] h-[80%] opacity-80"> {/* Fullscreen container */}
                <ReactPlayer
                    url='/videos/16.mp4' // Replace with the actual path to the video
                    playing={true}
                    loop={true}
                    muted={true}
                    width='100%' // Full viewport width
                    height='100%' // Full viewport height
                    className="object-cover" // Ensures the video covers the background
                />
            </div>

            {/* Container for the map and tooltip */}
            <div className="relative z-10 flex-grow flex items-center justify-center overflow-hidden">
                {/* Tooltip for providing information */}
                <div className="absolute bottom-28 right-4 z-40">
                    <InfoButton text="You can select from three datasets—Carbon, Sea Surface Temperature (SST), and Chlorophyll (CHL) from the PACE program—and visualize the data in two ways: on a dynamic 3D globe to explore global patterns and trends, or through graph visuals showing concentration levels over the past 30 days for detailed analysis. Use these tools to deepen your understanding of oceanic conditions and their effects on marine ecosystems."/>
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