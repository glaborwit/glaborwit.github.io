import React from 'react';
import Infocard from './components/Infocard';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import PurpleSolid from './assets/images/solid-purple.png';
import TimeWarp from './assets/images/timewarp.png';

function App() {
  return (
    <div className="App">
      <div className="container big-margin-top">
        <h1>GABRIELLE LABORWIT</h1>
        <h2>UX Researcher</h2>
        <div className="big-margin-top row justify-content-center">
          <div className="col-12 col-md-5">
            <Infocard title="Breaking the Ice" affiliation="Carnegie Mellon University" tagline="A Virtual Theater Community Experience" pic={PurpleSolid} />
          </div>
          <div className="col-12 col-md-5">
            <Infocard title="Time Warp in AR" affiliation="Ludwig-Maximilian University of Munich, Human-Centered Ubiquitous Media Lab" tagline="Augmented reality is a relatively new technology that will likely be commonplace in the upcoming years. My goal for this project was to utilize that technology to enhance the human senses." pic={TimeWarp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
