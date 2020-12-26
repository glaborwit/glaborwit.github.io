import React, { useEffect } from 'react';
import Infocard from './components/Infocard';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import TimeWarp from './assets/images/time-warp/transparenttimewarpcoverfull.png';
import BudgetBuddyCover from './assets/images/budgetbuddy/mobileandwatchapps.png';
import BreakingtheIceCover from './assets/images/UCRE/BreakingtheIceCover.png';

function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <div className="container big-margin-top">
        <h1 className="name text-center">GABRIELLE LABORWIT</h1>
        <h2 className="purple text-center">UX Researcher</h2>
        <div className="big-margin-top row justify-content-center">
          <Infocard title="Breaking the Ice" affiliation="Carnegie Mellon University" tagline="A virtual theater community experience" pic={BreakingtheIceCover} link="breaking-the-ice" />

          <Infocard title="Budget Buddy" affiliation="Carnegie Mellon University" tagline="The grocery budget assistant for money-conscious shoppers" pic={BudgetBuddyCover} link="budget-buddy" comingSoon={false} />

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
