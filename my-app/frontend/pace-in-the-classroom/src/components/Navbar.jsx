import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-center bg-black p-3 sticky top-5 z-50 rounded-xl border-2 border-blue-800">
            {[
                { path: "/home", label: "Home" },
                { path: "/explore", label: "Explore" },
                { path: "/lessons", label: "Lessons" },
                { path: "/maps", label: "Maps" },
                { path: "/simulation", label: "Simulation" },
                { path: "/about-us", label: "About Us" }
            ].map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => `mx-3 font-medium text-white text-lg px-1.5 py-1.5 rounded-md transition-all duration-300  ${isActive ? 'bg-blue-800 text-black ring-2 ring-blue-800 animate-pulse' : 'hover:text-blue-800'}`}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;