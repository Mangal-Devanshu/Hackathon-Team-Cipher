import { useState } from 'react';
import Navbar from './Navbar';

function Temp() {
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [nppResult, setNppResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8080/calculate_npp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    longitude: longitude,
                    latitude: latitude,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setNppResult(data);
            } else {
                setError('Error fetching NPP data: ' + data.error);
            }
        } catch (error) {
            setError('Failed to fetch data.');
        }

        setLoading(false);
    };

    return (
        <div>
            <h1>NPP Simulation</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Longitude:
                    <input
                        type="number"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Latitude:
                    <input
                        type="number"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Calculate NPP</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {nppResult && (
                <div>
                    <h3>Results</h3>
                    <p>NPP: {nppResult.NPP}</p>
                    <p>Longitude: {nppResult.longitude}</p>
                    <p>Latitude: {nppResult.latitude}</p>
                </div>
            )}
        </div>
    );
}

export default Temp;