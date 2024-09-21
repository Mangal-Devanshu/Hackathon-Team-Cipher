import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Navbar.css';

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("Home");

    useEffect(() => {
        switch (location.pathname) {
            case '/home':
                setActiveLink("Home");
                break;
            case '/explore':
                setActiveLink("Explore");
                break;
            case '/lessons':
                setActiveLink("Lessons");
                break;
            case '/maps':
                setActiveLink("Maps");
                break;
            case '/about-us':
                setActiveLink("About Us");
                break;
        }
    }, [location]);

    return (
        <nav className="navbar nav-pills">
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "Home" ? "active bg-danger" : ""}`}
                            to="/home"
                            onClick={() => setActiveLink("Home")}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "Explore" ? "active bg-danger" : ""}`}
                            to="/explore"
                            onClick={() => setActiveLink("Explore")}
                        >
                            Explore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "Lessons" ? "active bg-danger" : ""}`}
                            to="/lessons"
                            onClick={() => setActiveLink("Lessons")}
                        >
                            Lessons
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "Maps" ? "active bg-danger" : ""}`}
                            to="/maps"
                            onClick={() => setActiveLink("Maps")}
                        >
                            Maps
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeLink === "About Us" ? "active bg-danger" : ""}`}
                            to="/about-us"
                            onClick={() => setActiveLink("About Us")}
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="search-bar form-control me-2 fw-bold" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary fw-bold" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
