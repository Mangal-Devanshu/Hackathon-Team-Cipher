import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Globe from './Globe'; // 3D Globe component
import Map2D from './Map2D'; // 2D Map component
import MapControls from './MapControls';
import '../styling/NewMap.css'; // Custom styles if any
import { useNavigate } from 'react-router-dom'; // For navigation

function NewMap() {
  const [data, setData] = useState({ latitudes: [], longitudes: [], data_values: [] });
  const [startLat, setStartLat] = useState(-90);
  const [startLon, setStartLon] = useState(-180);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For loading animation
  const [viewMode, setViewMode] = useState('');
  const [dataset, setDataset] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false); // To manage full-screen view

  const latChunkSize = 90;
  const lonChunkSize = 180;
  const fetchInterval = 500;

  const navigate = useNavigate(); // For navigation

  // Automatically scroll down when data is loaded
  useEffect(() => {
    if (!isLoading && data.latitudes.length > 0) {
      setIsFullScreen(true); // Open the globe/map in full screen when data is loaded
      const element = document.getElementById("visualization");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isLoading, data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/data?start_lat=${startLat}&start_lon=${startLon}&lat_chunk_size=${latChunkSize}&lon_chunk_size=${lonChunkSize}&dataset=${dataset}`);
        if (response.data && response.data.latitudes.length > 0) {
          setData((prevData) => ({
            latitudes: [...prevData.latitudes, ...response.data.latitudes],
            longitudes: [...prevData.longitudes, ...response.data.longitudes],
            data_values: [...prevData.data_values, ...response.data.data_values],
          }));
          setIsLoading(false); // Data loaded, hide loading
        } else {
          setIsFetching(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsFetching(false);
      }
    };

    if (isFetching) {
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
    }
  }, [startLat, startLon, isFetching, dataset]);

  const handleSubmit = () => {
    if (dataset && viewMode) {
      setIsFetching(true);
      setIsLoading(true); // Start loading animation
      setStartLat(-90);
      setStartLon(-180);
      setData({ latitudes: [], longitudes: [], data_values: [] });
    }
  };

  const handleClose = () => {
    setIsFullScreen(false); // Close full screen view
    setData({ latitudes: [], longitudes: [], data_values: [] }); // Reset data when closing
    navigate('/maps'); // Return to the original maps path
  };

  return (
    <div class="h-screen grid grid-rows-2 justify-center">
      <div class="mt-10 w-fit"> {/* Adjusted margin to bring it upwards */}
        <MapControls
          dataset={dataset}
          setDataset={setDataset}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isFetching={isFetching}
          handleSubmit={handleSubmit}
        />
      </div>
      {isFullScreen && (
        <div class="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={handleClose}
            class="absolute top-4 left-4 bg-blue-600 text-white my-2.5 mx-2.5 px-4 py-2 rounded-lg z-10 hover:bg-blue-900">
            Close
          </button>
          <div id="visualization" class="w-full h-full mt-5">
            {data.latitudes.length > 0 && viewMode === 'globe' ? (
              <Globe data={data} dataType={dataset} />
            ) : data.latitudes.length > 0 && viewMode === 'map' ? (
              <Map2D data={data} dataType={dataset} />
            ) : (
              <p class="text-white">Please select options and submit to see the visualization.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewMap;