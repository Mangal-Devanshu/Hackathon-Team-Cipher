import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Globe from './Globe'; // 3D Globe component
import Map2D from './Map2D'; // 2D Map component
import MapControls from './MapControls';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/NewMap.css';

function NewMap() {
  const [data, setData] = useState({ latitudes: [], longitudes: [], data_values: [] });
  const [startLat, setStartLat] = useState(-90);
  const [startLon, setStartLon] = useState(-180);
  const [isFetching, setIsFetching] = useState(false);
  const [viewMode, setViewMode] = useState('');
  const [dataset, setDataset] = useState('');

  const latChunkSize = 90;
  const lonChunkSize = 180;
  const fetchInterval = 500;

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
      setStartLat(-90);
      setStartLon(-180);
      setData({ latitudes: [], longitudes: [], data_values: [] });
    }
  };

  return (
    <Container fluid className="visualization-container text-white">
      <div className="navbar-container">
        <Navbar />
      </div>
      <Row className="justify-content-center mb-4">
        <h1 className="text-light">Data Visualization</h1>
      </Row>

      <Row>
        {/* Map Controls Component */}
        <Col md={4}>
          <MapControls
            dataset={dataset}
            setDataset={setDataset}
            viewMode={viewMode}
            setViewMode={setViewMode}
            isFetching={isFetching}
            handleSubmit={handleSubmit}
          />
        </Col>

        {/* Data Content Section */}
        <Col md={8} className="data-content-container">
          <div className="data-content">
            {data.latitudes.length > 0 && viewMode === 'globe' ? (
              <Globe data={data} dataType={dataset} />
            ) : data.latitudes.length > 0 && viewMode === 'map' ? (
              <Map2D data={data} dataType={dataset} />
            ) : (
              <p className="text-white">Please select options and submit to see the visualization.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewMap;
