import React, { useEffect } from 'react';
import Infocard from './components/Infocard';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import CarDashboard from './assets/images/car-study/car-dashboard.png';
import MicrosoftwARroom from './assets/images/microsoft-warroom/microsoft-cover.png';
import BreakingtheIceCover from './assets/images/UCRE/BreakingTheIceCover.png';
import BudgetBuddyCover from './assets/images/budgetbuddy/BudgetBuddyCover.png';
import PicnicCover from './assets/images/picnic/PicnicCover.png';
import TimeWarp from './assets/images/time-warp/timewarpcover.png';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Gabbi LaBorwit | UX Researcher</title>
      </Helmet>
      <div className="container homepage big-margin-top">
        <div className="row justify-content-center">

          <h1 className="col-12 col-lg-10 title mb-0">
            Hello! I'm Gabbi.
          </h1>

          <h3 className="text-left col-12 col-lg-10 headline purple">
            {/* An open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>product</span>. */}

            User Experience Researcher
          </h3>
        </div>

        <div className="row justify-content-center infocards big-margin-top">
          <Infocard
            title="Microsoft wARroom"
            tagline="Investigating the role of mixed reality in the future of workplace collaboration"
            pic={MicrosoftwARroom}
            link="microsoft-warroom"
            comingSoon={false}
          />

          <Infocard
            title="Driver Trust"
            tagline="Exploring drivers’ understanding of and trust towards advanced technology in cars"
            pic={CarDashboard}
            link="https://bootcamp.uxdesign.cc/why-im-driven-to-optimize-in-car-experiences-b69518460a41"
            comingSoon={false}
            customLink={true}
          />
        
          <Infocard
            title="Breaking the Ice"
            // appType="Research-Backed Guidelines"
            tagline="Research-backed guidelines for hosting remote community experiences"
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
            title="Reinforcing Boundaries"
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
      </div>
    </div>
  );
}

export default App;
