import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/Main.css';

// Images
import Me from './assets/images/about/me-long.jpg';
import signature from './assets/logos/names/signature3_bw.png'

import PlantSticker from './assets/images/about/plant-sticker.png';
import BikeSticker from './assets/images/about/bike-sticker.png';

import { lightboxOptions } from './SpecificComponents/Constants'; // image lightbox styles


function About() {
    let wavingHand = '👋';


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="About pb-2 pb-sm-5">
            <Helmet>
                <title>Gabrielle LaBorwit | About</title>
            </Helmet>

            <div className="container mt-2 mt-md-3 mt-lg-5">

                {/* TL;DR about desc and picture */}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-5">
                        {/* Show headline on md and smaller screens */}
                        <h2 style={{lineHeight: "2.5rem"}} className="d-block d-lg-none mb-4">
                            Welcome! I'm Gabrielle, a creative <span className="purple"><b>UX Researcher</b></span> with a technical background.
                        </h2>


                        <Image src={Me} width="100%" alt="me" draggable={false} />
                    </div>

                    {/* TL;DR Text and healine on LG + screens */}
                    <div className="col-12 col-md-10 col-lg-5 mt-3 mt-md-0 align-self-center d-none d-lg-block">
                        <h2 style={{lineHeight: "2.5rem"}}>
                            I'm Gabrielle, a creative <span className="purple"><b>UX Researcher</b></span> with a technical background.
                        </h2>
                    </div>
                </div>

                {/* About me: detailed */}
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10">
                        <p>
                            I am currently getting my <a target="_blank" rel="noopener noreferrer" href="https://www.hcii.cmu.edu/academics/mhci">Master of Human-Computer Interaction</a> (HCI) degree at Carnegie Mellon University. Although my focus is in HCI, I am equipped with an undergraduate degree in Computer Science and Cognitive Psychology. This provides me with the unique benefit of understanding the actions and motivations of the programmer as well as the needs and desires of the user.
                        </p>

                        <p>
                            When I am not studying, I enjoy taking pictures, browsing through <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@gabbi">Medium</a> articles, and cooking.
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

                {/* Extras Section */}

                {/* Headline */}
                <div className="row justify-content-center align-items-center big-margin-top">
                    <div className="col-12 col-md-10">
                        <h2>What I'm Up To</h2>
                    </div>
                </div>

                {/* Content */}
                <div className="row justify-content-center align-items-center mt-3">
                    {/* Item 1: Pothos */}
                    <div className="col-5 col-md-4 col-lg-2">
                        <SRLWrapper options={lightboxOptions}>
                            <Image src={PlantSticker} className="img-zoom" width="100%" />
                        </SRLWrapper>
                    </div>

                    <div className="col-7 col-md-6 col-lg-3">
                        <i>April 2021 </i>
                        <br />
                        Bought an indoor plant– meet my marble queen pothos!
                    </div>

                    {/* Item 2: Bike */}
                    <div className="col-5 col-md-4 col-lg-2 mt-5 mt-lg-0">

                        <SRLWrapper options={lightboxOptions}>
                            <Image src={BikeSticker} className="img-zoom" width="100%" alt="New bike" />
                        </SRLWrapper>
                    </div>

                    <div className="col-7 col-md-6 col-lg-3 mt-5 mt-lg-0">
                        <i>March 2021 </i>
                        <br />
                        Got a bike after 7 months of waiting due to the bike shortage.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;