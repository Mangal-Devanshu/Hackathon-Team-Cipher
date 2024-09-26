// Maps.jsx

import NewMap from './NewMap';
import Navbar from './Navbar'; // This import is no longer needed if Navbar is moved inside NewMap.
import '../styling/Maps.css';

function Maps() {
    return (
        <div className="map-container">
            <div className="maps">
                <NewMap />
            </div>
        </div>
    );
}

export default Maps;