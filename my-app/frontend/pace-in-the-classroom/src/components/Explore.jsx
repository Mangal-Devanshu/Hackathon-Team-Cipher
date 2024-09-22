import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../styling/Explore.css';

const videos = [
    {
        id: 1,
        src: '/videos/1.mp4',
        text: 'First Video Text Here',
        link: 'https://example.com/first-video'
    },
    {
        id: 2,
        src: '/videos/2.mp4',
        text: 'Second Video Text Here',
        link: 'https://example.com/second-video'
    },
    {
        id: 3,
        src: '/videos/3.mp4',
        text: 'Third Video Text Here',
        link: 'https://example.com/third-video'
    },
    {
        id: 4,
        src: '/videos/4.mp4',
        text: 'Fourth Video Text Here',
        link: 'https://example.com/third-video'
    },
    {
        id: 5,
        src: '/videos/5.mp4',
        text: 'Sixth Video Text Here',
        link: 'https://example.com/third-video'
    }
];

function Explore() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
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
        <div className="video-sequence-container">
            <video
                key={videos[currentVideoIndex].id}
                src={videos[currentVideoIndex].src}
                className="background-video"
                autoPlay
                muted
                onEnded={handleVideoEnd}
            />
            <div className="text-overlay">
                <h1>{videos[currentVideoIndex].text}</h1>
                <Button
                    variant="primary"
                    href={videos[currentVideoIndex].link}
                    target="_blank"
                >
                    Learn More
                </Button>
            </div>
        </div>
    );
}

export default Explore;
