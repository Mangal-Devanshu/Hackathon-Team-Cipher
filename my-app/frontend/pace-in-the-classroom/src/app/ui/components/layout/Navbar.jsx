import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex w-fit justify-center bg-black p-3 sticky top-0 z-50 rounded-lg border-1 border-blue-700 shadow-md shadow-blue-700">
            {[
                { path: "/", label: "Home" },
                { path: "/explore", label: "Explore" },
                { path: "/lessons", label: "Lessons" },
                { path: "/maps", label: "Maps" },
                { path: "/simulation", label: "Simulation" },
                { path: "/about", label: "About" },
                { path: "/references", label: "References" }
            ].map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `mx-3 font-medium text-white text-lg px-1.2 py-1.5 rounded-md transition-all duration-300 ${isActive ? 'bg-blue-700 text-black ring-2 ring-blue-700 animate-pulse' : 'hover:text-blue-700'}`}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
