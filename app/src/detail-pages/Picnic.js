import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";

// Components
import DetailsHeading from '../components/DetailsHeading';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants' // image lightbox styles

// Images
import PicnicCover from '../assets/images/picnic/PicnicCover.png';
import AffinityDiagramPicnic from '../assets/images/picnic/AffinityDiagramPicnic.jpg';
import ActivityProcesss from '../assets/images/picnic/activity-processs.png';
import BettyStoryboard from '../assets/images/picnic/betty-storyboard.png';

function Picnic() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="Picnic">
            <Helmet>
                <title>Gabrielle LaBorwit | Picnic</title>
            </Helmet>
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Picnic" tagline="Strengthening the boundary between work and life for remote working professionals and students" image={PicnicCover} alt="Screen images of Picnic app home screen, post-activity reflection screen, and social screen" />

                {/* Overview */}
                <section>
                    <h3 className="mb-3">OVERVIEW</h3>
                    <div className="row">
                        <div className="col-md-4">

                            <h5>Timeline</h5>
                            <p>
                                Sept–Dec 2020, 4 months
                            </p>

                            <h5>Role</h5>
                            <p>
                                UX Researcher
                                <br />
                                <i>Worked with team to write interview guides, conducted user research and prototype tests</i>
                            </p>

                            <h5>Teammates</h5>
                            <p>
                                Cam Davison, Nitya Devireddy, Sarah Hand, Lauren Hung, Anna Yuan
                            </p>

                            <h5>Research Methods</h5>
                            <p>
                                Think Aloud Protocol, Storyboarding, Wizard of Oz Testing, Focus Groups
                            </p>
                        </div>

                        <hr className="my-3 ml-3 ml-md-0 my-md-0 d-md-none" />

                        <div className="col-md-8 mt-3 mt-md-0">
                            <h5 className="d-none d-md-block">Summary</h5>
                            <p>
                                Managing work-life balance is a difficult task, especially during a pandemic that forces people to work from home. In this situation, the lack of separation between one’s home and office space can cause people to overwork and have increased stress levels at home.
                            </p>

                            <p>
                                Our app, Picnic, combats this problem by helping better-define users’ boundaries between their work and home space, in addition to reframing the perception of productivity. In particular, our app strengthens users’ boundaries and feelings of productivity through subtle mindfulness activities called Picnics.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Insights and Evidence */}
                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-5">
                            <h3 className="mb-3">INSIGHTS AND EVIDENCE</h3>
                            <p>
                                Our team conducted several rounds of user interviews to learn more about people’s experiences working and learning from home. During our analysis, we used affinity diagrams to uncover the main topics that arose. After our initial research was completed, we found three main insights:
                            </p>
                            <ol>
                                <li>Lack of a clear boundary between work and home space make it easy to overwork</li>
                                <li>The absence of a commute causes stress as people feel obliged to be “more productive”</li>
                                <li>Disruptions can help people realize when they are working too much</li>
                            </ol>
                        </div>
                        <div className="col-12 col-lg-7">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={AffinityDiagramPicnic} width="100%" />
                            </SRLWrapper>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="mb-3">SOLUTION</h3>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <h5>App Overview</h5>
                            <p>
                                Throughout the design process, our team went through three prototype iterations, with each iteration followed by a round of user testing. In the final prototype, after users first download the app, they are prompted to create an avatar to accompany them throughout their wellness journey. Then, they record the time(s) they want to begin and/or end their workday and leave the app to go about their day. At their designated time, the user receives a prompt for an approachable, lightweight activity designed specifically to help them transition away from work and into leisure time. Upon completion, they are prompted to reflect on their experience and can choose to share the activity with friends.
                            </p>
                        </div>

                        <div className="col-12">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={ActivityProcesss} alt="walkthrough images of Picnic app home screen, two example activities, and post-activity reflection screen." width="100%" />
                            </SRLWrapper>
                        </div>

                        <div className="col-12 mt-3">
                            <h5>The Psychology</h5>
                            <p>
                                At its core, our prototype utilizes <b>embedded design</b>. By intermixing relevant and irrelevant activities, this psychological method is used to promote subtle but deliberate change in users’ attitudes and mindsets. Picnic uses this technique by framing each mindfulness exercise as a quick and fun activity to complete at the end of the day.
                            </p>
                            
                            <h5>Results</h5>
                            <p>
                                During the final testing stage, users reported feeling calmer and more refreshed after completing their daily activity. They also felt it was easier to detach from their workday and transition into leisure time. Even participants who decided to go back to work after the activity reported feelings of mental clarity and increased productivity. In all, we found that our app beneficially disrupts workflows and successfully aids in the transition between work and life.
                            </p>
                        </div>
                        <div className="col-12">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={BettyStoryboard} alt="Storyboard showing Betty stressed over work during post-work hours in frame 1, using the Picnic app in frame 2, and feeling more relaxed with her mind off work after completing a Picnic (i.e. in-app activity) in frame 3" width="100%" />
                            </SRLWrapper>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Picnic;