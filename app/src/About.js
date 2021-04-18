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
import signature from './assets/logos/names/signature3_bw.png';

import PlantSticker from './assets/images/about/plant-sticker.png';
import BikeSticker from './assets/images/about/bike-sticker.png';


function About() {
    let wavingHand = '👋';
    let compy = '👩🏻‍💻';

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
                    <div className="col-12 col-md-10 col-lg-5">
                        {/* Show headline on md and smaller screens */}
                        <h2 className="d-block d-lg-none mb-4 about">
                            I'm Gabrielle, a creative <span className="purple">UX&nbsp;Researcher</span> with a technical background {compy}
                        </h2>

                        <Image src={Me} width="100%" alt="me" draggable={false} />
                    </div>

                    {/* TL;DR Text and healine on LG + screens */}
                    <div className="col-lg-5 mt-3 mt-md-0 align-self-center d-none d-lg-block">
                        <h2 className="about">
                            I'm Gabrielle, a creative <span className="purple">UX&nbsp;Researcher</span> with a technical background {compy}
                        </h2>
                    </div>
                </div>

                {/* About me: detailed */}
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10">
                        <p>
                            I'm currently getting my <a target="_blank" rel="noopener noreferrer" href="https://www.hcii.cmu.edu/academics/mhci">Master of Human-Computer Interaction</a> (HCI) degree at Carnegie Mellon University. Although my focus is in HCI, I'm equipped with an undergraduate degree in Computer Science and Cognitive Psychology. This provides me with the unique benefit of understanding the actions and motivations of the programmer as well as the needs and desires of the user.
                        </p>

                        <p>
                            When I'm not studying, I enjoy taking pictures, browsing through <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@gabbi">Medium</a> articles, and cooking.
                        </p>

                        Signed,
                        <br />
                        <Image src={signature} height="40" className="mt-2" draggable={false} />


                        <h5 className="mt-5">Want to say hi?<span className="pl-1 wavingHand">{wavingHand}</span> Let’s connect!</h5>

                        Email: <a href="mailto: gabriellelaborwit@gmail.com">gabriellelaborwit@gmail.com</a>
                        <br />
                        Linkedin: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielle-laborwit/">linkedin.com/in/gabrielle-laborwit</a>

                    </div>
                </div>
            </div>

            {/* Extras Section */}
            <div className="container fun fullwidth bg-purple">
                <div className="container pb-2 pb-sm-5">
                    {/* Headline */}
                    <div className="row my-auto justify-content-center align-items-center big-margin-top">
                        <div className="col-12 col-md-10">
                            <h2 className="about">
                                What I'm Up To
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="row justify-content-center align-items-center mt-3">
                        {/* Item 1: Pothos */}
                        <div className="col-5 col-md-4 col-lg-2">
                            <Image src={PlantSticker} className="sticker" width="100%" alt="Plant sticker" />
                        </div>

                        <div className="col-7 col-md-6 col-lg-3">
                            <i>April 2021 </i>
                            <br />
                            Bought an indoor plant– meet my marble queen pothos!
                    </div>

                        {/* Item 2: Bike */}
                        <div className="col-5 col-md-4 col-lg-2 mt-5 mt-lg-0">
                            <Image src={BikeSticker} className="sticker" width="100%" alt="New bike" />
                        </div>

                        <div className="col-7 col-md-6 col-lg-3 mt-5 mt-lg-0">
                            <i>March 2021 </i>
                            <br />
                            Got a bike after 7 months of waiting due to the bike shortage.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container fullwidth bg-purple px-0">
                <Footer className="footer-overrides" />
            </div>
        </div>
    );
}

export default About;