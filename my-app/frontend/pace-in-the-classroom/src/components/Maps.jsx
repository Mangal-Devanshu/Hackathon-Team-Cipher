import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Globe from './Globe'; // 3D Globe component
import Map2D from './Map2D'; // 2D Map component
import '../styling/ToggleSwitch.css'; // For styling

function Maps() {
  const [data, setData] = useState({ latitudes: [], longitudes: [], data_values: [] });
  const [startLat, setStartLat] = useState(-90);
  const [startLon, setStartLon] = useState(-180);
  const [isFetching, setIsFetching] = useState(true);
  const [viewMode, setViewMode] = useState('globe'); // State to toggle between globe and map
  const [dataset, setDataset] = useState('chl'); // Default to chlorophyll

  const latChunkSize = 90;
  const lonChunkSize = 180;
  const fetchInterval = 500;

  // Fetch data in chunks using pagination
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/data?start_lat=${startLat}&start_lon=${startLon}&lat_chunk_size=${latChunkSize}&lon_chunk_size=${lonChunkSize}&dataset=${dataset}`
        );
        if (response.data && response.data.latitudes.length > 0) {
          setData((prevData) => ({
            latitudes: [...prevData.latitudes, ...response.data.latitudes],
            longitudes: [...prevData.longitudes, ...response.data.longitudes],
            data_values: [...prevData.data_values, ...response.data.data_values],
          }));
        } else {
          setIsFetching(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsFetching(false);
      }
    };

    const interval = setInterval(() => {
      fetchData();
      setStartLon((prevLon) => {
        const newLon = prevLon + lonChunkSize;
        if (newLon >= 180) {
          const newLat = startLat + latChunkSize;
          if (newLat >= 90) {
            setIsFetching(false);
            return -180;
          }
          setStartLat(newLat);
          return -180;
        }
        return newLon;
      });
    }, fetchInterval);

    if (!isFetching) clearInterval(interval);

    return () => clearInterval(interval);
  }, [startLat, startLon, latChunkSize, lonChunkSize, isFetching, dataset]);

  // Handle mode switching (globe or map)
  const handleModeChange = (event) => {
    setViewMode(event.target.value);
  };

  // Handle dataset change and reset the state
  const handleDatasetChange = (event) => {
    setDataset(event.target.value);
    setData({ latitudes: [], longitudes: [], data_values: [] }); // Clear existing data when changing dataset
    setStartLat(-90);
    setStartLon(-180);
    setIsFetching(true); // Restart fetching for the new dataset
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Visualization</h1>

        {/* Dataset Selection */}
        <div>
          <label htmlFor="datasetSelect">Select Dataset: </label>
          <select id="datasetSelect" value={dataset} onChange={handleDatasetChange}>
            <option value="chl">Chlorophyll</option>
            <option value="carbon">Carbon</option>
            <option value="sst">Sea Surface Temperature (SST)</option>
          </select>
        </div>

        {/* Mode Selection Dropdown */}
        <div>
          <label htmlFor="modeSelect">Select Mode: </label>
          <select id="modeSelect" value={viewMode} onChange={handleModeChange}>
            <option value="globe">3D Globe</option>
            <option value="map">2D Map</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button onClick={() => { setIsFetching(true); }}>Submit</button>
        </div>

        {/* Data Loading Indicator */}
        <p>{isFetching ? 'Loading data...' : 'Data loaded successfully!'}</p>

        {/* Render 3D Globe or 2D Map */}
        {data.latitudes.length > 0 && (
          viewMode === 'globe' ? <Globe data={data} dataType={dataset} /> : <Map2D data={data} dataType={dataset} />
        )}
      </header>
    </div>
  );
}

export default Maps;
