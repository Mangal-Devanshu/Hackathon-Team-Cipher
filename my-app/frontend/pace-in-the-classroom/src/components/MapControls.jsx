import React from 'react';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import '../styling/MapControls.css';

function MapControls({
    dataset,
    setDataset,
    viewMode,
    setViewMode,
    isFetching,
    handleSubmit,
}) {
    const handleDatasetChange = (event) => {
        setDataset(event.target.value);
    };

    const handleModeChange = (event) => {
        setViewMode(event.target.value);
    };

    return (
        <div className="map-controls-container">
            <Row>
                <Col md={4} className="left-column">
                    <div className="map-controls">
                        <Row className="mb-3">
                            <Col>
                                <Form.Label htmlFor="datasetSelect" className="text-primary">Select Dataset:</Form.Label>
                                <Form.Control
                                    as="select"
                                    id="datasetSelect"
                                    value={dataset}
                                    onChange={handleDatasetChange}
                                    className="bg-dark text-white border-primary"
                                >
                                    <option value="">Select a dataset</option>
                                    <option value="chl">Chlorophyll</option>
                                    <option value="carbon">Carbon</option>
                                    <option value="sst">Sea Surface Temperature (SST)</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label htmlFor="modeSelect" className="text-primary">Select Mode:</Form.Label>
                                <Form.Control
                                    as="select"
                                    id="modeSelect"
                                    value={viewMode}
                                    onChange={handleModeChange}
                                    className="bg-dark text-white border-primary"
                                >
                                    <option value="">Select a mode</option>
                                    <option value="globe">3D Globe</option>
                                    <option value="map">2D Map</option>
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col>
                                <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                    disabled={!dataset || !viewMode}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col>
                                {isFetching ? (
                                    <Spinner animation="border" variant="primary" />
                                ) : "Loading..."}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MapControls;
