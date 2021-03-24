import React, { useState, useEffect } from 'react';
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
          {/* <h1 className="name text-center col-12">GABRIELLE LABORWIT</h1> */}
          {/* <h2 className="purple text-center">UX Researcher</h2> */}
          <h3 className="name text-center col-12">
            <span className="pr-1 wavingHand">{wavingHand}</span> Hello, I'm Gabrielle
          </h3>
          <h3 className="lighter text-left text-md-center col-12 col-sm-11 col-lg-9 col-xl-8">
            Open-minded <span className="purple" style={{fontWeight: 400}}>User Experience Researcher</span> testing more than just usability. Understanding the <span style={{fontWeight: 400, color: "#5D7DC0"}}>why</span> and <span style={{fontWeight: 400, color: "#E3B23C"}}>how</span> behind people’s behaviors to ensure the success of your <span style={{fontWeight: 400, color: "#188B6C"}}>{textArray[textArrayIndex % textArray.length]}</span>
          </h3>
        </div>
        
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
