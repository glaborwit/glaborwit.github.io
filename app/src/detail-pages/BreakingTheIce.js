import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from 'react-bootstrap/Carousel'

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
import ReverseAssumptions from '../assets/images/UCRE/reverse-assumptions.jpg';
import IcebreakerDemo from '../assets/images/UCRE/Icebreaker-Demo-pic.jpg';
//speed dating images
import SpeedDatingBoard1 from '../assets/images/UCRE/speeddatingphotos/Set1_Board1.png';
import SpeedDatingBoard2 from '../assets/images/UCRE/speeddatingphotos/Set1_Board2.png';
import SpeedDatingBoard3 from '../assets/images/UCRE/speeddatingphotos/Set1_Board3.png';
import SpeedDatingBoard4 from '../assets/images/UCRE/speeddatingphotos/Set2_Board1.png';
import SpeedDatingBoard5 from '../assets/images/UCRE/speeddatingphotos/Set2_Board2.png';
import SpeedDatingBoard6 from '../assets/images/UCRE/speeddatingphotos/Set2_Board3.png';
import SpeedDatingBoard7 from '../assets/images/UCRE/speeddatingphotos/Set3_Board1.png';
import SpeedDatingBoard8 from '../assets/images/UCRE/speeddatingphotos/Set3_Board2.png';
import SpeedDatingBoard9 from '../assets/images/UCRE/speeddatingphotos/Set3_Board3.png';
import SpeedDatingBoard10 from '../assets/images/UCRE/speeddatingphotos/Set4_Board1.png';
import SpeedDatingBoard11 from '../assets/images/UCRE/speeddatingphotos/Set4_Board2.png';
import SpeedDatingBoard12 from '../assets/images/UCRE/speeddatingphotos/Set4_Board3.png';

// import Stickies from '../assets/images/StickyNotes.svg';
// import StickiesHighlighted from '../assets/images/StickyNotesHighlighted.svg';



function BreakingtheIce() {
    // const [isShown, setIsShown] = useState(false);
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
                                <em>Led user research efforts: helped create interview guides, conducted interviews, tested prototypes, analyzed research data</em>
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
                                The COVID-19 pandemic has affected both people and businesses in numerous ways. <strong>For theater venues in particular, the pandemic has made it increasingly difficult to connect with their local communities.</strong> Places like the Kelly Strayhorn Theater, a performing arts theater local to Pittsburgh, PA, are no exception.
                        </p>
                            <p>
                                With this in mind, our team spent two months <strong>researching ways to recreate the meaningful interactions</strong> that were once only experienced through in-person theater activities. The result of our research efforts is a set of guidelines for hosting a series of workshops related to a theme of the theater’s choosing. Our guidelines are highly customizable so theaters like the Kelly Strayhorn can host events that fit their ever-changing needs and budgets.
                        </p>
                        </div>
                    </div>
                </section>

                {/* The Problem Space */}
                <section>
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <h3 className="mb-3">Defining the Problem Space</h3>
                            <p>
                                In order to define our problem space, our team employed the <strong>Reverse Assumptions</strong> strategy. We wrote down all of our assumptions encompassing theater and the COVID-19 pandemic, then reversed them. This empowered us to <strong>challenge conventional thinking patterns</strong>, forcing us to re-evaluate current situations surrounding theater and COVID-19 from a completely new perspective.
                            </p>

                            <p>
                                Upon completion, we discovered several opportunities to break the existing rules of interaction between actors and audience members. For instance, promoting the usage of electronics for engagement during a show, actors treating the audience as fellow actors, etc.
                            </p>

                            <div className="row justify-content-center align-items-center">
                                <p className="col-12 col-sm-10 col-md-8 d-inline-block d-lg-none pb-3 pb-sm-5">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" src={ReverseAssumptions} width="100%" alt="Reverse assumptions organized on sticky notes" />
                                    </SRLWrapper>
                                </p>
                            </div>

                            <p>
                                This activity led us to <strong>reframe</strong> the space we were working in by posing a simple, yet intricate question:
                            </p>

                            <p className="blockquote">
                                How might we make people feel connected to the theatre amidst the COVID-19 pandemic without the traditional in-person venue/experience?
                            </p>

                            <p>
                                Additional questions noted were how might we create a sense of community once only felt during a show? How might we foster and strengthen audience engagement that’s not in-person? Lastly, how might we redefine the “stage”?
                            </p>
                        </div>
                        <div className="col-12 col-lg-5 d-none d-lg-block">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={ReverseAssumptions} width="100%" alt="Reverse assumptions organized on sticky notes" />
                            </SRLWrapper>
                        </div>
                    </div>
                </section>

                {/* Insights and Evidence */}
                <section>
                    <div className="row">
                        <div className="col-12">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12">
                                    <h3 className="mb-3">RESEARCH
                                    {/* <span className="stickies" onClick={() => setModalShow(true)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                        {isShown ?
                                            <Image className="ml-4 mouse-pointer" src={StickiesHighlighted} width="77.6" alt="Sticky notes" />
                                            :
                                            <Image className="ml-4 mouse-pointer" src={Stickies} width="77.6" alt="Glowing sticky notes" />
                                        }
                                    </span> */}
                                    </h3>
                                    <p>
                                        Early in our process, we gained a better understanding of people’s needs and the ways in which they engage with virtual events through <strong>Semi-Structured Interviews</strong> and <strong>Think Aloud Protocols</strong>.
                                </p>
                                </div>
                            </div>

                            <h5>Contextual Inquiry</h5>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p>
                                        Next, we used <strong>Contextual Inquiry</strong> to learn more about people’s experiences and expectations when interacting with others at community events. Since we couldn’t conduct these interviews in-person due to pandemic restrictions, we created our own context by hosting a virtual happy hour. To make sure participants felt comfortable and acted as they naturally would, we kept the happy hour as separate from the study as possible (i.e. no researchers observing or recording the sessions). We conducted individual retrospective contextual inquiries immediately after the event, such that participants would have the experience fresh in their minds. The <strong>main insights</strong> we drew from our contextual inquiry were:
                                </p>
                                    <ul>
                                        <li>Structured events can help increase comfort level</li>

                                        <li>People are most invested in conversations they feel personally connected to</li>

                                        <li>People enjoy conversations and topics that don’t require any specific background knowledge</li>

                                        <li>Activities should facilitate meaningful conversation rather than being a distraction that generates superficial interaction</li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-6">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" style={{ boxShadow: "0px 0px 8px #cdcdcd" }} src={IcebreakerDemo} width="100%" alt="Icebreaker Demo" />
                                    </SRLWrapper>
                                </div>

                            </div>

                            <div className="row mb-4">
                                <div className="col-12">
                                    <h5 className="mt-4">Speed Dating</h5>
                                    <p>
                                        Based on our earlier findings, we designed four sets of three storyboards, with each board increasing in risk and each set focused on different aspects of theater-related virtual events. In particular, we decided to address users’ needs for <strong>gamified experiences, community engagement, theater-specific engagement</strong>, and the need for <strong>the physical world to be replicated in an online setting</strong>. These boards were used in our Speed Dating research, the method in which users are shown quickly shown with storyboards and probed about their interest in the ideas demonstrated. Our storyboards can be found below.
                                </p>
                                </div>
                            </div>

                            <div className="row justify-content-center align-items-center mb-2">
                                <div className="col-12 col-lg-10 col-xl-9">
                                    <Carousel className="mb-5" style={{ boxShadow: "0px 0px 5px #cdcdcd" }} interval={null}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard1}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard2}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard3}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard4}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard5}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard6}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard7}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard8}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard9}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard10}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard11}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={SpeedDatingBoard12}
                                                alt="Speed dating storyboard"
                                            />
                                        </Carousel.Item>
                                    </Carousel>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-lg-7">
                                    <p>
                                        Speed Dating further validated the goals and user needs we had uncovered, and supported us in generating potential design directions. We learned:
                                </p>
                                    <ul>
                                        <li>People enjoy gamified social interactions, but not in a competitive nature.</li>
                                        <li>People want to attend events that require the least amount of physical (i.e. material) and mental (i.e. skills, knowledge) preparation.</li>
                                        <li>Activities should focus on fostering relationships and conversation over completing the activity</li>
                                        <li>People are incentivized to partake in an event if they enjoy the others in attendance or if they are interested in the performer hosting.</li>
                                    </ul>
                                </div>
                                <div className="col-9 col-md-7 col-lg-5">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" src={EvidenceSpeechBubbles} width="100%" alt="Quotes from interviews" />
                                    </SRLWrapper>
                                </div>
                            </div>

                            <div className="col-12">
                                <h5 className="mt-4">Final Tests</h5>
                                <p>
                                    Lastly, testing our <strong>experience prototypes</strong> with groups helped us iterate on our ideas and eventually confirm the success of our final product.
                            </p>
                            </div>
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
                                <Image className="img-zoom" src={Solution} width="100%" alt="The guidelines for a successful theater-hosted community event" />
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