import React, { useEffect } from 'react';
import Infocard from './components/Infocard';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
// import BreakingtheIceCover from './assets/images/UCRE/BreakingtheIceCover.png';
import BreakingtheIceCover from './assets/images/UCRE/SolutionCoverBorder.jpg';
import BudgetBuddyCover from './assets/images/budgetbuddy/mobileandwatchapps.png';
import PicnicCover from './assets/images/picnic/PicnicCover.png';
import TimeWarp from './assets/images/time-warp/transparenttimewarpcoverfull.png';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <Helmet>
        <title>Gabrielle LaBorwit | UX Researcher</title>
      </Helmet>
      <div className="container big-margin-top">
        <h1 className="name text-center">GABRIELLE LABORWIT</h1>
        <h2 className="purple text-center">UX Researcher</h2>
        <div className="big-margin-top row justify-content-center">

          <Infocard
            title="Breaking the Ice"
            // appType="Research-Backed Guidelines"
            tagline="Research-backed guidelines for a virtual theater community experience"
            pic={BreakingtheIceCover}
            link="breaking-the-ice"
            comingSoon={false}
          />

          <Infocard
            title="Budget Buddy"
            // appType="Cross-Platform App for Watch and Mobile"
            tagline="Cross-platform grocery budget assistant for money-conscious shoppers"
            pic={BudgetBuddyCover}
            link="budget-buddy"
            comingSoon={false}
          />

          <Infocard
            title="Picnic"
            // appType="Mindfulness Intervention Mobile App"
            tagline="Mobile app strengthening the boundary between work and life for remote working professionals and students"
            pic={PicnicCover}
            link="picnic"
            comingSoon={false}
          />

          <Infocard
            title="Time Warp in AR"
            // appType="Augmented Reality Program for the Microsoft Hololens"
            tagline="Augmented reality program to enhance the human senses by slowing down time"
            pic={TimeWarp}
            link="time-warp"
            comingSoon={false}
          />
          
        </div>

        {/* <div className="big-margin-top row justify-content-center">
          <h2 className="col-12 col-md-10 text-center" style={{fontWeight:"400", fontStyle:"italic"}}>Coming Soon</h2>
        </div> */}
      </div>
    </div>
  );
}

export default App;
