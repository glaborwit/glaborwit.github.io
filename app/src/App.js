import React, { useEffect } from 'react';
import Infocard from './components/Infocard';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import BreakingtheIceCover from './assets/images/UCRE/BreakingTheIceCover.png';
import BudgetBuddyCover from './assets/images/budgetbuddy/BudgetBuddyCover.png';
import PicnicCover from './assets/images/picnic/PicnicCover.png';
import TimeWarp from './assets/images/time-warp/timewarpcover.png';

import BreakingTheIceCoverGIF from './assets/images/UCRE/BreakingTheIceCoverGIF.gif';
import BudgetBuddyGIF from './assets/images/budgetbuddy/budgetbuddycover-watchsliding.gif';
import PicnicGIF from './assets/images/picnic/picnicgif.gif';

function App() {

  // const textArray = ['product', 'service', 'project'];

  // const [textArrayIndex, updateIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set interval for changing word in self tagline
  //   const interval = setInterval(() => {
  //     if(textArrayIndex === textArray.length-1){
  //       updateIndex(0)
  //     }
  //     else{
  //       updateIndex(textArrayIndex + 1)
  //     }
  //     console.log("Current index: ", textArrayIndex)
  //   }, 1700);
  //   return () => clearInterval(interval);

  // }, [textArray.length, textArrayIndex]);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Gabrielle LaBorwit | UX Researcher</title>
      </Helmet>
      <div className="container homepage big-margin-top">
        <div className="row justify-content-center">

          <h1 className="col-12 col-lg-10 mb-1">
            Gabrielle LaBorwit
          </h1>

          <h3 className="text-left col-12 col-lg-10 headline purple">
            {/* An open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>product</span>. */}

            User Experience Researcher
          </h3>
        </div>

        <div className="row justify-content-center infocards big-margin-top">
        
          <Infocard
            title="Breaking the Ice"
            // appType="Research-Backed Guidelines"
            tagline="Research-backed guidelines for hosting remote community experiences"
            pic={BreakingtheIceCover}
            onHover={BreakingTheIceCoverGIF}
            link="breaking-the-ice"
            comingSoon={false}
          />

          <Infocard
            title="Budget Buddy"
            // appType="Cross-Platform App for Watch and Mobile"
            tagline="Cross-platform grocery budget assistant for money-conscious shoppers"
            pic={BudgetBuddyCover}
            onHover={BudgetBuddyGIF}
            link="budget-buddy"
            comingSoon={false}
          />

          <Infocard
            title="Picnic"
            // appType="Mindfulness Intervention Mobile App"
            tagline="Mobile app strengthening the boundary between work and life for remote working professionals and students"
            pic={PicnicCover}
            onHover={PicnicGIF}
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

        {/* <div className="big-margin-top row justify-content-center">
          <h2 className="col-12 col-md-10 text-center" style={{fontWeight:"400", fontStyle:"italic"}}>Coming Soon</h2>
        </div> */}

        </div>
      </div>
    </div>
  );
}

export default App;
