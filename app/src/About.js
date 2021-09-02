import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import Footer from './components/Footer'; 

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/Main.css';
import './css/about.css';

// Images
import Me from './assets/images/about/me-long.jpg';
// import signature from './assets/logos/names/signature3_bw.png';


function About() {
    let compy = '👩🏻‍💻';
    let PlantEmoji = "🪴";
    let BikeEmoji = "🚴‍♀️";
    let GradCapEmoji = "🎓";

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="About">
            <Helmet>
                <title>Gabrielle LaBorwit | About</title>
            </Helmet>

            <div className="container mt-2 mt-md-3 mt-lg-5">
                {/* TL;DR about desc and picture */}
                <div className="row justify-content-center">
                    
                    {/* TL;DR Text and healine on LG + screens */}
                    <div className="col-lg-5 mt-3 mt-md-0 align-self-center d-none d-lg-block">
                        <h2 className="about">
                            I'm Gabrielle, a creative <span className="purple">UX&nbsp;Researcher</span> with a technical background {compy}
                        </h2>
                    </div>

                    <div className="col-12 col-md-10 col-lg-4">
                        {/* Show headline on md and smaller screens */}
                        <h2 className="d-block d-lg-none mt-0 mt-sm-2 mt-md-0 mb-4 about">
                            I'm Gabrielle, a creative <span className="purple">UX&nbsp;Researcher</span> with a technical background {compy}
                        </h2>

                        <Image src={Me} width="100%" alt="me" draggable={false} />
                    </div>
                </div>

                {/* About me: detailed */}
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10 col-lg-2">
                        <h5 className="about text-lg-right">
                            Background
                        </h5>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8">
                        <p>
                            I am a recent <a target="_blank" rel="noopener noreferrer" href="https://www.hcii.cmu.edu/academics/mhci">Master of Human-Computer Interaction</a> (HCI) graduate from Carnegie Mellon University. Although my focus is in HCI, I am equipped with an undergraduate degree in Computer Science and Cognitive Psychology. This provides me with the unique benefit of understanding the actions and motivations of the programmer as well as the needs and desires of the user.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10 col-lg-2">
                        <h5 className="about text-lg-right">
                            Hobbies
                        </h5>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8">
                        <p>
                            In my freetime, I enjoy taking pictures, browsing through <a target="_blank" rel="noopener noreferrer" href="https://gabbi.medium.com/">Medium</a> articles, and cooking. I am open to full-time UX Research roles starting September 2021.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10 col-lg-2">
                        <h5 className="about text-lg-right">
                            Connect
                        </h5>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8">
                        Email: <a href="mailto: gabriellelaborwit@gmail.com">gabriellelaborwit@gmail.com</a>
                        <br />
                        Linkedin: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielle-laborwit/">linkedin.com/in/gabrielle-laborwit</a>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10 col-lg-2">
                        <h5 className="about text-lg-right">
                            What I'm Up To
                        </h5>
                    </div>

                    <div className="col-12 col-md-10 col-lg-8">

                        {/* Item 3: CMU Graduation */}
                        <div className="row justify-content-center mb-3">
                            <div className="col-12 col-sm-3 col-lg-2">
                                Aug 2021
                            </div>
                            <div className="col-12 col-sm-9 col-lg-10">
                                Graudated from CMU with my Master's in HCI {GradCapEmoji}
                            </div>
                        </div>

                        {/* Item 2: Pothos */}
                        <div className="row justify-content-center mb-3">
                            <div className="col-12 col-sm-3 col-lg-2">
                                Apr 2021
                            </div>
                            <div className="col-12 col-sm-9 col-lg-10">
                                Bought my first houseplant, a marble queen pothos {PlantEmoji}
                            </div>
                        </div>

                        {/* Item 1: Bike */}
                        <div className="row justify-content-center mb-3">
                            <div className="col-12 col-sm-3 col-lg-2">
                                Mar 2021
                            </div>
                            <div className="col-12 col-sm-9 col-lg-10">
                                Got a bike after 7 months of waiting due to the bike shortage {BikeEmoji}
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="row justify-content-center mt-5">
                    <p>
                        Signed,
                        <br />
                        <Image src={signature} height="40" className="mt-2" draggable={false} />
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default About;