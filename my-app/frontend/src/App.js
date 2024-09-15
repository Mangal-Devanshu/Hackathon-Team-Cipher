import React from 'react';
import MyNavbar from './Navbar';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
