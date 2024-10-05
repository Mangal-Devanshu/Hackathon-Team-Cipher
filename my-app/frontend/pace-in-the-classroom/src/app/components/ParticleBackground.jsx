import { useEffect } from "react";
import "particles.js";
import Stats from "stats.js";

const ParticleBackground = () => {
    useEffect(() => {
        // Initialize particles.js
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 454,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#2b00ff",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 4,
                    },
                },
                opacity: {
                    value: 0.327,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 10,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 0,
                    color: "#ffffff",
                    opacity: 0.19,
                    width: 5.43,
                },
                move: {
                    enable: true,
                    speed: 3.2,
                    direction: "top",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        });

        // Initialize stats.js
        const stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);

        const updateStats = () => {
            stats.begin();
            stats.end();
            requestAnimationFrame(updateStats);
        };

        requestAnimationFrame(updateStats);

        return () => {
            document.body.removeChild(stats.dom);
        };
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div id="particles-js" className="absolute inset-0"></div>
            <div className="absolute top-12 left-0 bg-blue-900 text-cyan-400 text-xs font-bold px-2 py-1 rounded">
                <span className="js-count-particles">--</span> particles
            </div>
        </div>
    );
};

export default ParticleBackground;
