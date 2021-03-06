import React, { useEffect } from 'react';
import Infocard from './components/Infocard';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import TimeWarp from './assets/images/time-warp/transparenttimewarpcoverfull.png';
import BudgetBuddyCover from './assets/images/budgetbuddy/mobileandwatchapps.png';
import BreakingtheIceCover from './assets/images/UCRE/BreakingtheIceCover.png';
import PicnicCover from './assets/images/picnic/PicnicCover.png';

function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Helmet>
        <title>Gabrielle LaBorwit</title>
      </Helmet>
      <div className="container big-margin-top">
        <h1 className="name text-center">GABRIELLE LABORWIT</h1>
        <h2 className="purple text-center">UX Researcher</h2>
        <div className="big-margin-top row justify-content-center">
          <Infocard title="Breaking the Ice" affiliation="Carnegie Mellon University" tagline="A virtual theater community experience" pic={BreakingtheIceCover} link="breaking-the-ice" />

          <Infocard title="Budget Buddy" affiliation="Carnegie Mellon University" tagline="The grocery budget assistant for money-conscious shoppers" pic={BudgetBuddyCover} link="budget-buddy" comingSoon={false} />

          <Infocard title="Picnic" affiliation="Carnegie Mellon University" tagline="Strengthening the boundary between work and life for remote working professionals and students" pic={PicnicCover} link="picnic" comingSoon={false} />

          <Infocard title="Time Warp in AR" affiliation="Ludwig-Maximilian University of Munich, Human-Centered Ubiquitous Media Lab" tagline="Slowing down time in augmented reality" pic={TimeWarp} link="time-warp" />
        </div>

        {/* <div className="big-margin-top row justify-content-center">
          <h2 className="col-12 col-md-10 text-center" style={{fontWeight:"400", fontStyle:"italic"}}>Coming Soon</h2>
        </div> */}
      </div>
    </div>
  );
}

export default App;
