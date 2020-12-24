import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Player } from 'video-react';

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles
import "../../node_modules/video-react/dist/video-react.css";

// Images
import WarpedTime from '../assets/images/time-warp/timewarpclock.png';
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
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Time Warp" image={WarpedTime} tagline="Slowing Down Time in Augmented Reality" />

                {/* Overview */}
                <section>
                    <h3 className="mb-3">OVERVIEW</h3>
                    <div className="row">
                        <div className="col-md-4">

                            <h5>Timeline</h5>
                            <p>
                                Jun-Jul 2018, 2 months
                            </p>

                            <h5>Roles</h5>
                            <p>
                                Design Engineer, Software Engineer, Lead Researcher
                                <br />
                                <i>Designed interface, programmed application, wrote interview guides and conducted user research with prototype</i>
                            </p>

                            <h5>Teammates</h5>
                            <p>
                                Pascal Knierim (Project Supervisor), Dr. Albrecht Schmidt (Lab Supervisor)
                            </p>

                            <h5>Methods</h5>
                            <p>
                                Experience Prototype
                            </p>

                            <h5>Technologies</h5>
                            <p>
                                Microsoft Hololens, Unity, C#, Visual Studio
                            </p>
                        </div>

                        <hr className="my-3 ml-3 ml-md-0 my-md-0 d-md-none" />

                        <div className="col-md-8 mt-3">
                            <h5 className="d-none d-md-block">Summary</h5>
                            <p>
                                Augmented reality (AR) is a relatively new technology that will likely be commonplace in the upcoming years. My goal for this project was to utilize AR technology to enhance the human senses by creating a program that would slow down time.
                            </p>
                            <p>
                                Humans only perceive motion in one way. Our slow-motion viewing prototype overcomes this limitation by allowing humans to perceive motion in an entirely new manner. In a factory, employees can use the technology to better diagnose machine malfunctions. Dancers can use the technology to expedite the process of learning new choreography. In summary, our prototype allows for the <b>derivation of exact information</b> from high-speed situations, making problem-solving, imitation, and skill-building easier.
                            </p>
                            <p>
                                <br />
                                This project was conducted as part of the <a target="_blank" rel="noopener noreferrer" href="https://hciunh.org/hci-ubicomp-ires/program-overview/">International Research Experiences for Students (IRES)</a> program, a program funded by the National Science Foundation.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Insights and Evidence */}
                <section>
                    <h3 className="mb-3">CREATING THE SOFTWARE</h3>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7">
                            <h5>Designing Slow Motion</h5>
                            <p>
                                The first step in producing the application was to create the effect of slow motion. I used the Hololens’ built-in camera to stream live video footage into an overlay on the Hololens display.
                            </p>
                            <p>
                                Then, I started storing the footage in memory and slowly played it back in the overlay. This required a significant amount of experimentation with playback rates to make the slow motion appear as natural as possible.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 col-xl-4 mx-auto">
                            <Player>
                                <source src={SlowmoTrial1} />
                            </Player>
                        </div>
                    </div>


                    <div className="row mt-5 mt-md-4 align-items-center">
                        <div className="col-12 col-md-7">
                            <h5>Transition Effects</h5>
                            <p>
                                After several attempts and feedback from my mentor and lab peers, a natural slow-motion effect was achieved. I was then faced with the challenge of choosing appropriate transition effects when toggling between slow motion and live video, deemed “reality mode”. The shift from reality to slow motion was simple: it looked most natural to immediately slow footage down with no transition. The harder problem was designing the shift from slow motion to reality; this transition had to be subtle but clear. To solve this, I observed movies and videos that involve transitions from slow motion to reality. It seemed that the most realistic choice would be to play the remaining slow-motion footage at double the normal speed until it caught up to reality.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 col-xl-4 mx-auto">
                            <Image width="100%" src={SlowmoTransitionNotes} alt="Slow motion transition notes" />
                        </div>
                    </div>


                    <div className="row mt-5 mt-md-4 align-items-center">
                        <div className="col-12 col-xl-7">
                            <h5>Indicators</h5>
                            <p>
                                Lastly, I had to find a way to indicate whether a user was in slow motion or reality mode. Sticking with the theme of time warp, I designed a small clock in the corner with a second hand that ticks at a normal speed when in reality mode, a noticeably slow speed when in slow motion, and fast when transitioning from slow motion to reality mode.
                            </p>
                        </div>
                    </div>


                    <h4 className="mt-5 mb-3">FINAL PROTOTYPE</h4>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <h5>Final Prototype</h5>
                            <Player muted={true}>
                                <source src={FinalPrototype} />
                            </Player>
                        </div>
                        <div className="mt-4 mt-md-0 col-12 col-md-5">
                            <h5>User Study</h5>
                            <p>
                                Upon completing the prototype, I directed a user study in which participants utilized our program to perform certain tasks. Then, they took a survey about their experience with the program, its features, and use cases that they saw fit for the technology.
                            </p>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-3">POSTER PRESENTATION</h3>
                            <p>
                                I was able to present a poster and give a small demonstration of the application at Multimodal Interaction in Augmented and Virtual Reality (WeimARVR) in Weimar, Germany towards the end of that July.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                            <Image width="100%" src={Poster} alt="Poster about application" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default TimeWarp;