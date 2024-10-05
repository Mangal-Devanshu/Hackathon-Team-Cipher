// Maps.jsx
import { useState } from 'react';
import NewMap from '../components/NewMap';
import Asteroids from '../components/Asteroids';
import ToolTip from '../components/ToolTip';  // Importing the ToolTip component

export function Component() {
    const [showMap, setShowMap] = useState(false); // State to toggle the NewMap component

    const handleShowMap = () => {
        setShowMap(true); // Trigger map to appear
    };

    return (
        <section className="relative h-screen flex flex-col overflow-hidden"> {/* relative to contain absolute elements */}
            {/* Asteroids component as the background */}
            <div className="absolute inset-0 z-0 opacity-80"> {/* full-screen background with negative z-index */}
                <Asteroids count={200} direction={"up"} />
            </div>

            {/* Tooltip for providing information */}
            <div className="absolute top-4 right-4 z-40"> {/* Positioning the tooltip */}
                <ToolTip
                    message="Use the form below to search and explore different map locations. Enter the required details and click submit."
                />
            </div>

            {/* NewMap component displayed above */}
            <div className="relative z-10 flex-grow"> {/* Ensure NewMap stays on top */}
                <NewMap />
            </div>
        </section>
    );
}

Component.displayName = "MapsPage";
