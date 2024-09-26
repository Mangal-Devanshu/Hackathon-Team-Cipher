import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Lessons = lazy(() => import('./components/Explore'));
const Explore = lazy(() => import('./components/Lessons'));
const Maps = lazy(() => import('./components/Maps'));
const About = lazy(() => import('./components/About'));
const Form = lazy(() => import('./components/Form'));

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="content-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Lessons />} />
              <Route path="/lessons" element={<Explore />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/temp" element={<Form />} />
              <Route path="/about-us" element={<About />} />
              {/* Default route handling */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
