
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Globe from './Globe'; // Assuming Globe.js is in components folder

function Maps() {
  const [data, setData] = useState({ latitudes: [], longitudes: [], chlorophyll_data: [] });
  const [startLat, setStartLat] = useState(-90);
  const [startLon, setStartLon] = useState(-180);
  const [isFetching, setIsFetching] = useState(true);

  const latChunkSize = 90;
  const lonChunkSize = 180;
  const fetchInterval = 500;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/data?start_lat=${startLat}&start_lon=${startLon}&lat_chunk_size=${latChunkSize}&lon_chunk_size=${lonChunkSize}`
        );
        if (response.data && response.data.latitudes.length > 0) {
          setData((prevData) => ({
            latitudes: [...prevData.latitudes, ...response.data.latitudes],
            longitudes: [...prevData.longitudes, ...response.data.longitudes],
            chlorophyll_data: [...prevData.chlorophyll_data, ...response.data.chlorophyll_data],
          }));
        } else {
          setIsFetching(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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

    return () => clearInterval(interval);
  }, [startLat, startLon, latChunkSize, lonChunkSize, isFetching]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chlorophyll Data Globe</h1>
        <p>{data.latitudes.length > 0 ? 'Data loaded successfully!' : 'Loading data...'}</p>
        {data.latitudes.length > 0 && <Globe data={data} />}
      </header>
    </div>
  );
}




export default Maps