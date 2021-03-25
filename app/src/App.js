import React, { useState, useEffect } from 'react';
import Infocard from './components/Infocard';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/Main.css';

// Images
import BreakingtheIceCover from './assets/images/UCRE/BreakingTheIceCover.png';
import BudgetBuddyCover from './assets/images/budgetbuddy/BudgetBuddyCover.png';
import PicnicCover from './assets/images/picnic/PicnicCover1.png';
import TimeWarp from './assets/images/time-warp/timewarpcover.png';

import HammerGIF from './assets/images/UCRE/hammer.gif';

function App() {

  const textArray = ['product', 'service', 'project'];

  const [textArrayIndex, updateIndex] = useState(0);

  useEffect(() => {
    // window.scrollTo(0, 0);

    // Set interval for changing word in self tagline
    const interval = setInterval(() => {
      if(textArrayIndex === textArray.length-1){
        updateIndex(0)
      }
      else{
        updateIndex(textArrayIndex + 1)
      }
      console.log("Current index: ", textArrayIndex)
    }, 1700);
    return () => clearInterval(interval);

  }, [textArray.length, textArrayIndex]);

  let wavingHand = '👋'

  return (
    <div className="App">
      <Helmet>
        <title>Gabrielle LaBorwit | UX Researcher</title>
      </Helmet>
      <div className="container big-margin-top">
        <div className="row justify-content-center">

          {/* Desc on md widths */}
          <h1 className="col-12 col-md-10 d-none d-md-block">
            Hello, I'm Gabrielle <span className="pl-1 wavingHand">{wavingHand}</span>
          </h1>

          <h2 className="d-none d-md-block text-left col-12 col-md-10 lighter">
            An open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>{textArray[textArrayIndex % textArray.length]}</span>.
          </h2>

          {/* Desc on sm widths */}
          <h2 style={{fontWeight:"600"}} className="col-12 col-md-10 d-block d-md-none">
            Hello, I'm Gabrielle <span className="pl-1 wavingHand">{wavingHand}</span>
          </h2>
          
          <h3 style={{lineHeight: "1.3em"}} className="d-block d-md-none text-left col-12 col-md-10 lighter">
            An open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>{textArray[textArrayIndex % textArray.length]}</span>.
          </h3>

          {/* <h2 className="text-left col-12 col-lg-10 col-xl-8">
            <span style={{fontWeight: "800"}}><span className="pr-1 wavingHand">{wavingHand}</span> Hello, I'm Gabrielle.</span> <span class="lighter">Open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>{textArray[textArrayIndex % textArray.length]}</span>.</span>
          </h2> */}
        </div>
        
        <div className="big-margin-top row justify-content-center">

          <Infocard
            title="Breaking the Ice"
            // appType="Research-Backed Guidelines"
            tagline="Research-backed guidelines for a virtual theater community experience"
            pic={BreakingtheIceCover}
            onHover={HammerGIF}
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
