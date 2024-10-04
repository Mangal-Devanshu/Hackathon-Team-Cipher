import { useState } from 'react';
import NewMap from '../components/NewMap';

export function Component() {
    const [showMap, setShowMap] = useState(false); // State to toggle the NewMap component

    const handleShowMap = () => {
        setShowMap(true); // Trigger map to appear
    };

    return (
        <div className="h-screen flex flex-col overflow-auto relative">
            <div>
                <NewMap />
            </div>
        </div>
    );
}

Component.displayName = "MapsPage";