import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import './index.css'; // Import your custom CSS (if any)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
