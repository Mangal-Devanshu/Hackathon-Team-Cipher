import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lessons from './components/Explore';
import Explore from './components/Lessons';
import Maps from './components/Maps';
import About from './components/About';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Lessons />} />
            <Route path="/lessons" element={<Explore />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/temp" element={<Form />} />
            <Route path="/about-us" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div >
    </Router>
  );
}

export default App;
