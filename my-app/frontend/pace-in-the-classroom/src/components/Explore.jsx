import React, { useEffect } from 'react';
import '../styling/Explore.css';

function Explore() {
    useEffect(() => {
        const images = document.querySelectorAll('.explore-container .image');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5, });

        images.forEach((image) => {
            observer.observe(image);
        });

        return () => {
            images.forEach((image) => {
                observer.unobserve(image);
            });
        };
    }, []);

    return (
        <div className="explore-container">
            <div className="image image-1">
                <h1 className="image-head">Section 1 Text</h1>
            </div>
            <div className="image image-2">
                <h1 className="image-head">Section 2 Text</h1>
            </div>
            <div className="image image-3">
                <h1 className="image-head">Section 3 Text</h1>
            </div>
            <div className="image image-4">
                <h1 className="image-head">Section 4 Text</h1>
            </div>
        </div>
    );
}

export default Explore;
