import React from 'react';
import Infocard from './components/Infocard';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
// import PurpleSolid from './assets/images/solid-purple.png';
import TimeWarp from './assets/images/time-warp/timewarpclock.png';
import DashDesign from './assets/images/dashupdate.gif';
import BreakingtheIceCover from './assets/images/UCRE/BreakingtheIceCover.png';

function App() {
  return (
    <div className="App">
      <div className="container big-margin-top">
        <h1 className="name text-center">GABRIELLE LABORWIT</h1>
        <h2 className="purple text-center">UX Researcher</h2>
        <div className="big-margin-top row justify-content-center">
          <Infocard title="Breaking the Ice" affiliation="Carnegie Mellon University" tagline="A Virtual Theater Community Experience" pic={BreakingtheIceCover} link="breaking-the-ice"/>

          <Infocard title="Time Warp in AR" affiliation="Ludwig-Maximilian University of Munich, Human-Centered Ubiquitous Media Lab" tagline="Slowing Down Time in Augmented Reality" pic={TimeWarp} link="time-warp"/>
        </div>

        <div className="big-margin-top row justify-content-center">
          <h2 className="col-12 col-md-10 text-center" style={{fontWeight:"400", fontStyle:"italic"}}>Coming Soon</h2>
          <Infocard title="Adidas Data Dashboard" affiliation="Carnegie Mellon University" tagline="Designing for quantative data" pic={DashDesign} link="data-dashboard" comingSoon={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
