import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";

// Components
import DetailsHeading from '../components/DetailsHeading';
import UCRESolutionModal from '../SpecificComponents/UCRESolutionModal';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants' // image lightbox styles

// Images
import BreakingtheIceCover from '../assets/images/UCRE/BreakingtheIceCover.png';
import EvidenceSpeechBubbles from '../assets/images/UCRE/EvidenceSpeechBubbles.svg';
import Solution from '../assets/images/UCRE/solution.png';

import Stickies from '../assets/images/StickyNotes.svg';
import StickiesHighlighted from '../assets/images/StickyNotesHighlighted.svg';



function BreakingtheIce() {
    const [isShown, setIsShown] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="BreakingtheIce">
            <Helmet>
                <title>Gabrielle LaBorwit | Breaking the Ice</title>
            </Helmet>
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Breaking the Ice" tagline="A Virtual Theater Community Experience" image={BreakingtheIceCover} alt="Guidelines for a great theater community experience online" />

                {/* Overview */}
                <section>
                    <h3 className="mb-3">OVERVIEW</h3>
                    <div className="row">
                        <div className="col-md-4">

                            <h5>Timeline</h5>
                            <p>
                                Oct–Dec 2020, 2 months
                            </p>

                            <h5>Role</h5>
                            <p>
                                Research Lead
                                <br />
                                <i>Led user research efforts: helped create interview guides, conducted interviews, tested prototypes, analyzed research data</i>
                            </p>

                            <h5>Teammates</h5>
                            <p>
                                Meo Zhang, Wenqing Yin, Jenny Xin
                            </p>

                            <h5>Research Methods</h5>
                            <p>
                                Semi-Structured Interviews, Contextual Inquiry, Think Aloud Protocols, Speed Dating, Experience Prototypes, Storyboarding
                        </p>
                        </div>

                        <hr className="my-3 ml-3 ml-md-0 my-md-0 d-md-none" />

                        <div className="col-md-8 mt-3 mt-md-0">
                            <h5 className="d-none d-md-block">Summary</h5>
                            <p>
                                The COVID-19 pandemic has affected both people and businesses in numerous ways. <b>For theater venues in particular, the pandemic has made it increasingly difficult to connect with their local communities.</b> Places like the Kelly Strayhorn Theater, a performing arts theater local to Pittsburgh, PA, are no exception.
                        </p>
                            <p>
                                With this in mind, our team spent two months <b>researching ways to recreate the meaningful interactions</b> that were once only experienced through in-person theater activities. The result of our research efforts is a set of guidelines for hosting a series of workshops related to a theme of the theater’s choosing. Our guidelines are highly customizable so theaters like the Kelly Strayhorn can host events that fit their ever-changing needs and budgets.
                        </p>
                        </div>
                    </div>
                </section>


                {/* Insights and Evidence */}
                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            <h3 className="mb-3">RESEARCH 
                                <span className="stickies" onClick={() => setModalShow(true)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                    {isShown ?
                                        <Image className="ml-4 mouse-pointer" src={StickiesHighlighted} width="77.6" />
                                        :
                                        <Image className="ml-4 mouse-pointer" src={Stickies} width="77.6" />
                                    }
                                </span>
                            </h3>
                            <p>
                                Early in our process, we gained a better understanding of people’s needs and the ways in which they engage with virtual events through <b>Semi-Structured Interviews</b> and <b>Think Aloud Protocols</b>.
                            </p>
                            <p>
                                Next, we used <b>Contextual Inquiry</b> to learn more about people’s experiences and expectations when interacting with others at community events. Since we couldn’t conduct these interviews in-person due to pandemic restrictions, we created our own context by hosting a virtual happy hour. To make sure participants felt comfortable and acted as they naturally would, we kept the happy hour as separate from the study as possible (i.e. no researchers observing or recording the sessions). We conducted individual retrospective contextual inquiries immediately after the event, such that participants would have the experience fresh in their minds.
                            </p>
                            <p>
                                <b>Speed Dating</b> further validated the goals and user needs we had uncovered, and supported us in generating potential design directions. Lastly, testing our <b>experience prototypes</b> with groups helped us iterate on our ideas and eventually confirm the success of our final product.
                            </p>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-7">
                            <h3 className="mb-3">INSIGHTS AND EVIDENCE</h3>
                            <p>
                                From our reseach, we uncovered four key insights:
                            </p>
                            <ol>
                                <li>People like structured activities</li>
                                <li>People are motivated to get to know others on a more personal level</li>
                                <li>People’s background knowledge shapes their online experience in how comfortable they are when interacting with others</li>
                                <li>People like to participate in activities that are fun and not difficult (i.e. little mental or physical preparation required)</li>
                            </ol>
                        </div>
                        <div className="col-9 col-md-7 col-lg-5">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={EvidenceSpeechBubbles} width="100%" />
                            </SRLWrapper>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-lg-7 col-xl-8">
                            <h3 className="mb-3">SOLUTION</h3>
                            <p>
                                Using the data we collected, we know individual workshops are most successful when set up with the following structure:
                            </p>
                            <ol>
                                <li>
                                    Workshops should start with a few rounds of well-structured, small-group icebreakers. To achieve this, hosts should create several ice breaker question card decks for groups to parse through.
                                </li>
                                <li>
                                    Next, participants should all meet together again to learn about the workshop’s topic from an expert on the subject (e.g. performer teaches about acting). It’s essential for the expert to encourage audience interaction here to continue fostering the relationships being formed.
                                </li>
                                <li>
                                    Lastly, participants should break into groups again to do some fun hands-on activities to put what they learned into practice.
                                </li>
                            </ol>
                            <p>
                                Together, these guidelines can help focus events on creating meaningful interactions rather than completing the actual activity, allowing communities to stay connected both during and after the COVID-19 pandemic.
                            </p>
                        </div>
                        <div className="col-sm-10 col-md-7 col-lg-5 col-xl-4">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={Solution} width="100%" />
                            </SRLWrapper>
                        </div>
                    </div>
                    {/* <Image src={UCREPoster} className="col-lg-7 mt-5" width="100%" /> */}
                </section>
                <UCRESolutionModal
                    modalShowBool={modalShow}
                    modalHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default BreakingtheIce;