import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styling/Explore.css';

const videos = [
    {
        id: 1,
        src: '/videos/1.mp4',
        text: 'OCI INSTRUMENT',
        description: 'The Optical Character Recognition Instrument provides accurate data on character recognition and is used widely in industries.',
        link: 'https://example.com/first-video'
    },
    {
        id: 2,
        src: '/videos/2.mp4',
        text: 'SPXone POLARIMETER',
        description: 'Advanced microscopy techniques allow us to observe intricate details of microstructures, improving research and development in multiple fields.',
        link: 'https://example.com/second-video'
    },
    {
        id: 3,
        src: '/videos/3.mp4',
        text: 'HARP2 POLARIMETER',
        description: 'Spectroscopy is crucial for identifying chemical properties and compositions in various applications from astronomy to medicine.',
        link: 'https://example.com/third-video'
    }
];

function Explore() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    useEffect(() => {
        // Preload videos
        videos.forEach(video => {
            const preloadedVideo = document.createElement('video');
            preloadedVideo.src = video.src;
        });
    }, []);

    return (
        <div className="explore-container">
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="video-sequence-container">
                <video
                    key={videos[currentVideoIndex].id}
                    src={videos[currentVideoIndex].src}
                    className="background-video"
                    autoPlay
                    muted
                    onEnded={handleVideoEnd}
                />

                {/* Text Overlay with Information */}
                <div className="text-overlay">
                    <h1>{videos[currentVideoIndex].text}</h1>
                    <p>{videos[currentVideoIndex].description}</p>
                    <Button
                        variant="primary"
                        href={videos[currentVideoIndex].link}
                        target="_blank"
                    >
                        Learn More
                    </Button>
                </div>

                {/* Navigation Arrows */}
                <Row className="arrows">
                    <Col xs="auto">
                        <Button variant="light" className="arrow-btn" onClick={handlePrevious}>
                            &lt;
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="light" className="arrow-btn" onClick={handleNext}>
                            &gt;
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Explore;
