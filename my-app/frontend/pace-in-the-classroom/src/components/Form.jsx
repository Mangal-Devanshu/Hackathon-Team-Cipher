import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styling/Temp.css'

function FormDisabledExample() {
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload on form submission

        const formData = {
            longitude: longitude,
            latitude: latitude
        };

        try {
            // Send data to the Flask API using fetch
            const response = await fetch('http://localhost:8080/api/coordinates', { // Replace with your Flask API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Response from API:', result);
                alert('Data sent successfully!');
            } else {
                console.error('Failed to send data to the API');
                alert('Failed to send data to the API');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="temp-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput" className="txt">Longitude:</Form.Label>
                    <Form.Control
                        className="form-input"
                        type="text"
                        placeholder="Longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)} // Update longitude state
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput" className="txt">Latitude:</Form.Label>
                    <Form.Control
                        className="form-input"
                        type="text"
                        placeholder="Latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)} // Update latitude state
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default FormDisabledExample;