import React from 'react';
import './App.css'; // Importing the CSS file
import './index.css';

// Importing components
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import Vip from './components/Vip';
function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <Navbar />
      <div className="container-fluid">
      

        <Vip />

        <div className="container-fluid">
        <div className="progress d-flex flex-column" style={{ backgroundColor: 'gainsboro', height: '100%' }}>
          <div className="row">
            <div className="col-md-7">
              <LeftContainer />
            </div>
            <div className="col-md-4">
              <RightContainer />
            </div>
          </div>
        </div>
      </div>


      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
