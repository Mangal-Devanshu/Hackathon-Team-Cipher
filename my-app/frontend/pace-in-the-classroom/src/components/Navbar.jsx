import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styling/Navbar.css';

function Navbar() {
    return (
        <Nav variant="pills" className="custom-navbar">
            {[
                { path: "/home", label: "Home" },
                { path: "/explore", label: "Explore" },
                { path: "/lessons", label: "Lessons" },
                { path: "/maps", label: "Maps" },
                { path: "/temp", label: "Temp" },
                { path: "/about-us", label: "About Us" }
            ].map((item) => (
                <Nav.Item className="custom-nav-link" key={item.path}>
                    <Nav.Link
                        as={NavLink}
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'active blink' : '')} // Add 'blink' class when active
                    >
                        {item.label}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default Navbar;
