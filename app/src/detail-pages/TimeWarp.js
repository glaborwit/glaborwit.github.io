import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from 'simple-react-lightbox';
import ScrollIntoView from 'react-scroll-into-view';

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants' // image lightbox styles

// Images
import WarpedTime from '../assets/images/time-warp/transparenttimewarpcoverfull.png';
import SlowmoTransitionNotes from '../assets/images/time-warp/slow_mo_transition_notes.jpg';
import Poster from '../assets/images/time-warp/poster.jpeg';

// Videos
import SlowmoTrial1 from '../assets/images/time-warp/slowmotrial1.mp4';
import FinalPrototype from '../assets/images/time-warp/surfers.mp4';

function TimeWarp() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="TimeWarp">
            <Helmet>
                <title>Gabrielle LaBorwit | Time Warp</title>
            </Helmet>
            <div className="container mt-2 mt-md-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9">

                        <div className="row justify-content-center">
                            <div class="col-12">
                                <DetailsHeading title="Time Warp" image={WarpedTime} tagline="Slowing Down Time in Augmented Reality" alt="person wearing an augmented reality device and watching a bee slow down in front of them by using the time warp program" />
                            </div>
                        </div>

                        {/* Overview */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 mt-3 mt-md-0">
                                    <h3 className="mb-3" id="projectoverview">
                                        OVERVIEW
                                    </h3>
                                    <h4 className="d-none d-md-block">
                                        Summary
                                    </h4>
                                    <p>
                                        Augmented reality (AR) is a relatively new technology that will likely be commonplace in the upcoming years. My goal for this project was to utilize AR technology to enhance the human senses by creating a program that would slow down time.
                                    </p>
                                    <p>
                                        Humans only perceive motion in one way. Our slow-motion viewing prototype overcomes this limitation by allowing humans to perceive motion in an entirely new manner. In a factory, employees can use the technology to better diagnose machine malfunctions. Dancers can use the technology to expedite the process of learning new choreography. In summary, our prototype allows for the <strong>derivation of exact information</strong> from high-speed situations, making problem-solving, imitation, and skill-building easier.
                                    </p>

                                    <p>
                                        This project was conducted as part of the <a target="_blank" rel="noopener noreferrer" href="https://hciunh.org/hci-ubicomp-ires/program-overview/">International Research Experiences for Students (IRES)</a> program, a program funded by the National Science Foundation.
                                    </p>

                                    <h4 className="mt-4">Publication</h4>
                                    <p>
                                        <a href="https://dl.acm.org/doi/10.1145/3384657.3384659" target="_blank" rel="noopener noreferrer">Altering the Speed of Reality?: Exploring Visual Slow-Motion to Amplify Human Perception using Augmented Reality</a>
                                    </p>
                                </div>

                                <div className="col-12 col-md-10">
                                    <div className="row mt-3 mt-md-5 project-overview-details">
                                        <div className="col-md-3">
                                            <h4>Timeline</h4>
                                            <ul>
                                                <li>Jun-Jul 2018</li>
                                                <li>2 months</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Roles</h4>
                                            <ul>
                                                <li>Design Engineer</li>
                                                <li>Software Engineer</li>
                                                <li>Lead Researcher</li>
                                                <li>
                                                    <em>Designed interface, programmed application, wrote interview guides and conducted user research with prototype</em>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Teammates</h4>
                                            <ul>
                                                <li>Pascal Knierim (Project Supervisor)</li>
                                                <li>Dr. Albrecht Schmidt (Lab Supervisor)</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Technologies</h4>
                                            <ul>
                                                Microsoft Hololens
                                                <li>Unity</li>
                                                <li>C#</li>
                                                <li>Visual Studio</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Insights and Evidence */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="creating-the-software">CREATING THE SOFTWARE</h3>

                                    <h4 id="designing-slow-motion">Designing Slow Motion</h4>
                                    <p>
                                        The first step in producing the application was to create the effect of slow motion. I used the Hololens’ built-in camera to stream live video footage into an overlay on the Hololens display.
                                    </p>
                                    <p>
                                        Then, I started storing the footage in memory and slowly played it back in the overlay. This required a significant amount of experimentation with playback rates to make the slow motion appear as natural as possible.
                                    </p>
                                </div>

                                <div className="col-12 mt-3 mb-5">
                                    <ReactPlayer width="100%" height="auto" controls={true} url={SlowmoTrial1} />
                                </div>

                                <div className="col-12 col-md-10">
                                    <h4 id="transition-effects">Transition Effects</h4>
                                    <p>
                                        After several attempts and feedback from my mentor and lab peers, a natural slow-motion effect was achieved. I was then faced with the challenge of choosing appropriate transition effects when toggling between slow motion and live video, deemed “reality mode”. The shift from reality to slow motion was simple: it looked most natural to immediately slow footage down with no transition. The harder problem was designing the shift from slow motion to reality; this transition had to be subtle but clear. To solve this, I observed movies and videos that involve transitions from slow motion to reality. It seemed that the most realistic choice would be to play the remaining slow-motion footage at double the normal speed until it caught up to reality.
                                    </p>
                                </div>

                                <div className="col-12 mt-3 mb-5">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" width="100%" src={SlowmoTransitionNotes} alt="Slow motion transition notes" />
                                    </SRLWrapper>
                                </div>

                                <div className="col-12 col-md-10">
                                    <h4 id="indicators">
                                        Indicators
                                    </h4>
                                    <p>
                                        Lastly, I had to find a way to indicate whether a user was in slow motion or reality mode. Sticking with the theme of time warp, I designed a small clock in the corner with a second hand that ticks at a normal speed when in reality mode, a noticeably slow speed when in slow motion, and fast when transitioning from slow motion to reality mode.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">

                                    <h3 id="final-prototype" className="mb-3">Final Prototype</h3>

                                    <h4 id="demo">Demo</h4>

                                </div>

                                <div className="col-12 mt-1 mb-5">
                                        <ReactPlayer width="100%" height="auto" controls={true} url={FinalPrototype} />
                                </div>
                                
                                <div className="col-12 col-md-10">
                                    <h4 id="user-study">
                                        User Study
                                    </h4>
                                    <p>
                                        Upon completing the prototype, I directed a user study in which participants utilized our program to perform certain tasks. Then, they took a survey about their experience with the program, its features, and use cases that they saw fit for the technology.
                                    </p>

                                    <h4 id="poster" className="mt-5">
                                        Poster Presentation
                                    </h4>
                                    <p>
                                        I was able to present a poster and give a small demonstration of the application at Multimodal Interaction in Augmented and Virtual Reality (WeimARVR) in Weimar, Germany towards the end of that July.
                                    </p>
                                </div>

                                <div className="col-12 col-lg-10 my-3">
                                    <SRLWrapper options={lightboxOptions}>
                                        <Image className="img-zoom" width="100%" src={Poster} alt="Poster about application" />
                                    </SRLWrapper>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-3 d-none d-md-block">
                        <div className="sidecar sticky-top ml-3 ml-lg-5">
                            <ul>
                                <ScrollIntoView selector="#projectoverview">
                                    <li><span>Overview</span></li>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#creating-the-software">
                                    <li><span>Creating the Software</span></li>
                                </ScrollIntoView>

                                <ul>
                                    <ScrollIntoView selector="#designing-slow-motion">
                                        <li><span>Designing Slow Motion</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#transition-effects">
                                        <li><span>Transition Effects</span></li>
                                    </ScrollIntoView>
                                    
                                    <ScrollIntoView selector="#indicators">
                                        <li><span>Indicators</span></li>
                                    </ScrollIntoView>
                                </ul>

                                <ScrollIntoView selector="#final-prototype">
                                    <li><span>Final Prototype</span></li>
                                </ScrollIntoView>

                                <ul>
                                    <ScrollIntoView selector="#demo">
                                        <li><span>Demo</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#user-study">
                                        <li><span>User Study</span></li>
                                    </ScrollIntoView>
                                    
                                    <ScrollIntoView selector="#poster">
                                        <li><span>Poster Presentation</span></li>
                                    </ScrollIntoView>
                                </ul>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimeWarp;