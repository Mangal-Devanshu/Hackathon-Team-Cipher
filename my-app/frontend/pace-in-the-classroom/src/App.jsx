// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Lessons = lazy(() => import('./components/Explore'));
const Explore = lazy(() => import('./components/Lessons'));
const Maps = lazy(() => import('./components/Maps'));
const About = lazy(() => import('./components/About'));
const Simulation = lazy(() => import('./components/Simulation'));
const Lesson1 = lazy(() => import('./components/Lesson1'));
const Lesson2 = lazy(() => import('./components/Lesson2'));
const Lesson3 = lazy(() => import('./components/Lesson3'));
// (Remaining lazy loaded components)

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center bg-black p-4">
          <div className="inline-block">
            <Navbar />
          </div>
        </div>
        <div className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Lessons />} />
              <Route path="/lessons" element={<Explore />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/lesson1" element={<Lesson1 />} />
              <Route path="/lesson2" element={<Lesson2 />} />
              <Route path="/lesson3" element={<Lesson3 />} />
              {/* (Remaining routes) */}
              {/* Default route handling */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </div>
        {/* Sticky footer */}
        <div class="sticky">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
