import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from 'react-bootstrap/Carousel';
import ScrollIntoView from 'react-scroll-into-view';

// Components
import DetailsHeading from '../components/DetailsHeading';
import UCRESolutionModal from '../SpecificComponents/UCRESolutionModal';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants'; // image lightbox styles

// Images
// import BreakingtheIceCover from '../assets/images/UCRE/BreakingtheIceCover.png';
import BreakingtheIceCover from '../assets/images/UCRE/BreakingTheIceCover.png';
import EvidenceSpeechBubbles from '../assets/images/UCRE/EvidenceSpeechBubbles.svg';
import Solution from '../assets/images/UCRE/solution.png';
import ReverseAssumptions from '../assets/images/UCRE/reverse-assumptions.jpg';
import IcebreakerDemo from '../assets/images/UCRE/Icebreaker-Demo-pic.jpg';
//speed dating images
import SpeedDatingBoard2 from '../assets/images/UCRE/speeddatingphotos/Set1_Board2.png';
import SpeedDatingBoard3 from '../assets/images/UCRE/speeddatingphotos/Set1_Board3.png';
import SpeedDatingBoard1 from '../assets/images/UCRE/speeddatingphotos/Set1_Board1.png';
import SpeedDatingBoard4 from '../assets/images/UCRE/speeddatingphotos/Set2_Board1.png';
import SpeedDatingBoard5 from '../assets/images/UCRE/speeddatingphotos/Set2_Board2.png';
import SpeedDatingBoard6 from '../assets/images/UCRE/speeddatingphotos/Set2_Board3.png';
import SpeedDatingBoard7 from '../assets/images/UCRE/speeddatingphotos/Set3_Board1.png';
import SpeedDatingBoard8 from '../assets/images/UCRE/speeddatingphotos/Set3_Board2.png';
import SpeedDatingBoard9 from '../assets/images/UCRE/speeddatingphotos/Set3_Board3.png';
import SpeedDatingBoard10 from '../assets/images/UCRE/speeddatingphotos/Set4_Board1.png';
import SpeedDatingBoard11 from '../assets/images/UCRE/speeddatingphotos/Set4_Board2.png';
import SpeedDatingBoard12 from '../assets/images/UCRE/speeddatingphotos/Set4_Board3.png';
//UFT images
import UFT1 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT1.jpg';
import UFT2 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT2.jpg';
import UFT3 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT3.jpg';
import UFT4 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT4.jpg';
import UFT5 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT5.jpg';
import UFT6 from '../assets/images/UCRE/ThinkAloud-UFTs/UFT6.jpg';


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
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9">

                        <div className="row justify-content-center">
                            <div className="col-12">
                                <DetailsHeading title="Breaking the Ice" tagline="A Virtual Theater Community Experience" image={BreakingtheIceCover} alt="Guidelines for a great theater community experience online" />
                            </div>
                        </div>

                        {/* Overview */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 mt-3 mt-md-0">
                                    <h3 className="mb-3" id="projectoverview">OVERVIEW</h3>
                                    <h4 className="d-none d-md-block">Summary</h4>
                                    <p>
                                        The COVID-19 pandemic has affected both people and businesses in numerous ways. <strong>For theater venues in particular, the pandemic has made it increasingly difficult to connect with their local communities.</strong> Places like the Kelly Strayhorn Theater, a performing arts theater local to Pittsburgh, PA, are no exception.
                                    </p>
                                    <p>
                                        With this in mind, our team spent two months <strong>researching ways to recreate the meaningful interactions</strong> that were once only experienced through in-person theater activities. The result of our research efforts is a set of guidelines for hosting a series of workshops related to a theme of the theater’s choosing. Our guidelines are highly customizable so theaters like the Kelly Strayhorn can host events that fit their ever-changing needs and budgets.
                                    </p>
                                </div>
                            
                                <div className="col-12 col-md-10">
                                    <div className="row mt-3 mt-md-5 project-overview-details">
                                        <div className="col-md-3">
                                            <h4>Timeline</h4>
                                            <ul>
                                                <li>Oct–Dec 2020</li>
                                                <li>2 months</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Role</h4>
                                            <ul>
                                                <li>
                                                    Research Lead
                                                </li>
                                                <li>
                                                    <em>
                                                        Led user research efforts: helped create interview guides, conducted interviews, tested prototypes, analyzed research data
                                                    </em>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Teammates</h4>
                                            <ul>
                                                <li>Meo Zhang</li>
                                                <li>Wenqing Yin</li>
                                                <li>Jenny Xin</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Research Methods</h4>
                                            <ul>
                                                <li>Semi-Structured Interviews</li>
                                                <li>Contextual Inquiry</li>
                                                <li>Think Aloud Protocols</li>
                                                <li>Speed Dating</li>
                                                <li>Experience Prototypes</li>
                                                <li>Storyboarding</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* The Problem Space */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="problemspace">DEFINING THE PROBLEM SPACE</h3>
                                    <p>
                                        In order to define our problem space, our team employed the <strong>Reverse Assumptions</strong> strategy. We wrote down all of our assumptions encompassing theater and the COVID-19 pandemic, then reversed them. This empowered us to <strong>challenge conventional thinking patterns</strong>, forcing us to re-evaluate current situations surrounding theater and COVID-19 from a completely new perspective.
                                    </p>

                                    <p>
                                        Upon completion, we discovered several opportunities to break the existing rules of interaction between actors and audience members. For instance, promoting the usage of electronics for engagement during a show, actors treating the audience as fellow actors, etc.
                                    </p>
                                </div>

                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center my-4">
                                        <SRLWrapper options={lightboxOptions}>
                                            <Image className="img-zoom" src={ReverseAssumptions} width="100%" alt="Reverse assumptions organized on sticky notes" />
                                        </SRLWrapper>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10">
                                    <p>
                                        This activity led us to <strong>reframe</strong> the space we were working in by posing a simple, yet intricate question:
                                    </p>
                                </div>

                                <div className="col-12 px-0">
                                    <p className="blockquote">
                                        How might we make people feel connected to the theatre amidst the COVID-19 pandemic without the traditional in-person venue/experience?
                                    </p>
                                </div>

                                <div className="col-12 col-md-10">
                                    <p>
                                        Additional questions noted were how might we create a sense of community once only felt during a show? How might we foster and strengthen audience engagement that’s not in-person? Lastly, how might we redefine the “stage”?
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Insights and Evidence */}
                        <section>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="research">RESEARCH
                                    {/* <span className="stickies" onClick={() => setModalShow(true)} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                        {isShown ?
                                            <Image className="ml-4 mouse-pointer" src={StickiesHighlighted} width="77.6" alt="Sticky notes" />
                                            :
                                            <Image className="ml-4 mouse-pointer" src={Stickies} width="77.6" alt="Glowing sticky notes" />
                                        }
                                    </span> */}
                                    </h3>

                                    <h4 id="semi-structured-interviews">
                                        Semi-Structured Interviews
                                    </h4>
                                    <p>
                                        Once we defined the problem space, we conducted Semi-Structured Interviews to gain a better understanding of people’s needs and the ways in which they engage with theater. For this phase, I wrote an interview guide delving into people’s impressions of theater productions they’ve attended in the past, their theater-going process (from acquiring tickets to leaving the show), and thoughts on virtual theater performances.
                                    </p>

                                    <h4 className="mt-5" id="think-aloud-protocol">
                                        Think Aloud Protocol
                                    </h4>
                                    <p>
                                        In order to uncover more about how people experience online theater, we conducted Think Aloud Protocol Research. We decided to use the platform YouTube Live to show users clips from theater productions as the site has a chat feature, something our group was considering pursuing in our final product. As a team, we wrote up three tasks for users to complete while watching the clips and thinking aloud, all with the underlying goal of seeing how users interact with and think about the chat. Then, we each led one interview, individually wrote up usability findings templates based on our participant’s interview (pictured below), and later came together and synthesized our findings.
                                    </p>
                                </div>
                                <div className="col-12 my-5">
                                    <Carousel className="pb-2" style={{ boxShadow: "0px 0px 5px #cdcdcd" }} interval={null}>
                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT1}
                                                alt="Usability Finding Template 1"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT2}
                                                alt="Usability Finding Template 2"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT3}
                                                alt="Usability Finding Template 3"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT4}
                                                alt="Usability Finding Template 4"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT5}
                                                alt="Usability Finding Template 5"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={UFT6}
                                                alt="Usability Finding Template 6"
                                                draggable={false}
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>

                                <div className="col-12 col-md-10">
                                    After the data was compiled, two things became clear:
                                    <ul className="mt-1">
                                        <li>Live chat is not a feature people wanted to use</li>
                                        <li>Online productions can get a bit “boring”</li>
                                    </ul>
                                    <p>
                                        This led us to ideate on other ways online viewers could connect with other audience members online, and if while watching theater productions was even the right way of thinking about theater engagement.
                                    </p>

                                    <h4 className="mt-5" id="contextual-inquiry">
                                        Contextual Inquiry
                                    </h4>
                                    <p>
                                        Following some team discussion, we decided to start focusing on non-performance events. We used <strong>Contextual Inquiry</strong> to learn more about people’s experiences and expectations when interacting with others at community events. Since we couldn’t conduct these interviews in-person due to pandemic restrictions, we created our own context by hosting a virtual happy hour. To make sure participants felt comfortable and acted as they naturally would, we kept the happy hour as separate from the study as possible (i.e. no researchers observing or recording the sessions).
                                    </p>
                                    <p>
                                        Prior to the session, I set up the happy hour platform, and then as a team, we planned activities for it. We each conducted individual retrospective contextual inquiries immediately after the event, such that participants would have the experience fresh in their minds.
                                    </p>
                                </div>

                                <div className="col-12 my-5">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" style={{ boxShadow: "0px 0px 8px #cdcdcd" }} src={IcebreakerDemo} width="100%" alt="Icebreaker Demo of woman laughing at card prompt 'What's the first theater performance you ever saw?'" />
                                    </SRLWrapper>
                                </div>

                                <div className="col-12 col-md-10">
                                    The <strong>main insights</strong> we drew from our contextual inquiry were:
                                    <ul className="mt-1">
                                        <li>Structured events can help increase comfort level</li>

                                        <li>People are most invested in conversations they feel personally connected to</li>

                                        <li>People enjoy conversations and topics that don’t require any specific background knowledge</li>

                                        <li>Activities should facilitate meaningful conversation rather than being a distraction that generates superficial interaction</li>
                                    </ul>


                                    <h4 className="mt-5" id="speed-dating">Speed Dating</h4>
                                    <p>
                                        Based on our earlier findings, we each designed a set of three storyboards, with each board increasing in risk and each set focused on different aspects of theater-related virtual events. In particular, we decided to address users’ needs for <strong>gamified experiences, community engagement, theater-specific engagement</strong>, and the need for <strong>the physical world to be replicated in an online setting</strong>. These boards were used in our Speed Dating research, the method in which users are shown quickly shown with storyboards and probed about their interest in the ideas demonstrated. Our storyboards can be found below.
                                    </p>
                                </div>

                                <div className="col-12 my-5">
                                    <Carousel className="pb-2" style={{ boxShadow: "0px 0px 5px #cdcdcd" }} interval={null}>
                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard1}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard2}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard3}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard4}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard5}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard6}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard7}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard8}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard9}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard10}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard11}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={SpeedDatingBoard12}
                                                alt="Speed dating storyboard"
                                                draggable={false}
                                            />
                                        </Carousel.Item>
                                    </Carousel>

                                </div>

                                <div className="col-12 col-md-10">
                                    Speed Dating further validated the goals and user needs we had uncovered, and supported us in generating potential design directions. We learned:
                                    <ul className="mt-1">
                                        <li>People enjoy gamified social interactions, but not in a competitive nature.</li>
                                        <li>People want to attend events that require the least amount of physical (i.e. material) and mental (i.e. skills, knowledge) preparation.</li>
                                        <li>Activities should focus on fostering relationships and conversation over completing the activity</li>
                                        <li>People are incentivized to partake in an event if they enjoy the others in attendance or if they are interested in the performer hosting.</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-12 col-lg-9 mx-auto my-5">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" src={EvidenceSpeechBubbles} width="100%" alt="Quotes from interviews" />
                                    </SRLWrapper>
                                </div>

                                <div className="col-12 col-md-10">
                                    <h4 className="mt-5" id="experience-prototype">Experience Prototype</h4>
                                    <p>
                                        Nearing the final stages of our research journey, we began ideating on concepts for our final prototype. After sketching out and discussing our ideas, we ultimately chose to develop an online theater workshop relating to a specific topic. To test the idea, we created an <strong>experience prototype</strong>: a Hamilton-themed workshop. Hamilton-loving participants would learn about scriptwriting techniques from an expert and then complete script-writing activities with fellow attendees.

                                        We ran the workshop on Zoom, with screen and video sharing tools as our friend, and interviewed participants immediately after. Testing our experience prototype with actual Hamilton-lovers helped us more accurately evaluate whether our engagement goal was achieved. Our data was incorporated into our final solution, detailed below.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="solution">SOLUTION</h3>
                                    Using the data we collected, we know individual workshops are most successful when set up with the following structure:
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
                                <div className="col-sm-10 col-md-10 col-lg-8 mt-4">
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

                    <div className="col-3 d-none d-md-block">
                        <div className="sidecar sticky-top ml-3 ml-lg-5">
                            <ul>
                                <ScrollIntoView selector="#projectoverview">
                                    <li><span>Overview</span></li>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#problemspace">
                                    <li><span>Problem Space</span></li>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#research">
                                    <li><span>Research</span></li>
                                </ScrollIntoView>

                                <ul>
                                    <ScrollIntoView selector="#semi-structured-interviews">
                                        <li><span>Semi-Structured Interviews</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#think-aloud-protocol">
                                        <li><span>Think Aloud</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#contextual-inquiry">
                                        <li><span>Contextual Inquiry</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#speed-dating">
                                        <li><span>Speed Dating</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#experience-prototype">
                                        <li><span>Experience Prototype</span></li>
                                    </ScrollIntoView>
                                </ul>

                                <ScrollIntoView selector="#solution">
                                    <li><span>Solution</span></li>
                                </ScrollIntoView>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BreakingtheIce;