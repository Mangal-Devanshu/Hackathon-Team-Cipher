import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Explore from './components/Explore';
import Maps from './components/Maps';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;