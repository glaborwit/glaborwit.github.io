import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from 'react-bootstrap/Carousel';
import ScrollIntoView from 'react-scroll-into-view';

// Components
import DetailsHeading from '../components/DetailsHeading';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants'; // image lightbox styles

// Images
import MicrosoftwARroomCover from '../assets/images/microsoft-warroom/microsoft-cover.png';
import ParticipantStats from '../assets/images/microsoft-warroom/participant-stats.png';
import AffinityDiagram from '../assets/images/microsoft-warroom/DiaryStudyNotes.jpg';
import SeverityScale from '../assets/images/microsoft-warroom/severity-scale.jpg';

// storyboards
import Storyboard1 from '../assets/images/microsoft-warroom/storyboards/creators-whiteboarding1.png';
import Storyboard2 from '../assets/images/microsoft-warroom/storyboards/crunchers-whiteboarding2.png';
import Storyboard3 from '../assets/images/microsoft-warroom/storyboards/curators-wARroom3.png';
import Storyboard4 from '../assets/images/microsoft-warroom/storyboards/coaches-training4.png';

// final product photos
import FinalProduct1 from '../assets/images/microsoft-warroom/final-product/product-image1.png';
import FinalProduct2 from '../assets/images/microsoft-warroom/final-product/product-image2.png';
import FinalProduct3 from '../assets/images/microsoft-warroom/final-product/product-image3.png';


function MicrosoftWarroom() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="MicrosoftWarroom">
            <Helmet>
                <title>Gabrielle LaBorwit | Microsoft wARroom</title>
            </Helmet>

            <div className="container mt-2 mt-md-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9">

                        <div className="row justify-content-center">
                            <div className="col-12">
                                <DetailsHeading title="Microsoft wARroom" tagline="Investigating the role of mixed reality in the future of workplace collaboration" image={MicrosoftwARroomCover} alt="Hololens with excel sheet and sticky notes hanging virtually" />
                            </div>
                        </div>

                        {/* Overview */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 mt-3 mt-md-0">
                                    <h3 className="mb-3" id="projectoverview">OVERVIEW</h3>
                                    <h4 className="d-none d-md-block">Summary</h4>
                                    <p>
                                        With the power of mixed reality in our hands, we initiated our project by asking a central question: how might we support 3D collaboration between information workers?

                                    </p>
                                    <p>
                                        Information workers, also called knowledge workers, are people whose jobs revolve around handling information. They include programmers, engineers, designers, accountants, and a plethora of other professions.
                                    </p>
                                    <p>
                                        wARroom is a mixed reality program for the Microsoft Hololens. It enables teams around the world to <b>share their ideas with one another in a 3D space</b> in ways that can’t be replicated on traditional 2D platforms.
                                    </p>
                                </div>
                            
                                <div className="col-12 col-md-10">
                                    <div className="row mt-3 mt-md-5 project-overview-details">
                                        <div className="col-md-3">
                                            <h4>Timeline</h4>
                                            <ul>
                                                <li>Feb–May 2021</li>
                                                <li>5 months</li>
                                            </ul>

                                            <h4 className="mt-0 mt-md-5">Client</h4>
                                            <ul>
                                                <li>Microsoft</li>
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
                                                        Guided team through user interview process. Led decisions on method<span class="d-none d-md-inline d-lg-none">-</span>ology, interview guide creation, and data synthesis and analysis.
                                                        <br />
                                                        Applied business principles learned in class towards product development.

                                                    </em>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4 className="d-block d-md-none d-lg-block">Teammates</h4>

                                            <h4 className="d-none d-md-block d-lg-none">Team-mates</h4>

                                            <ul>
                                                <li>John Plunkett</li>
                                                <li>Steven Orchosky</li>
                                                <li>Uma Aruna<span class="d-none d-md-inline d-lg-none">-</span>chalam</li>
                                                <li>Nobu Morikawa</li>
                                                <li>Tarang Shah</li>
                                                <li>Guanzhao Li</li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h4>Research Methods</h4>
                                            <ul>
                                                <li>Diary Study</li>
                                                <li>Semi-Structured Interviews</li>
                                                <li>Pop-Up Research</li>
                                                <li>Storyboarding</li>
                                                <li>Affinity Diagramming</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Research */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="research">
                                        RESEARCH
                                    </h3>
                                    <h4 id="initial-explorations">
                                        Initial Explorations
                                    </h4>
                                    <p>
                                        Before diving into interviews, we conducted background research on the tools information workers use most and a competitive landscape on other 3D and mixed reality collaboration tools. We then held informational interviews with information workers to get a feel for their day-to-day work experiences. Following these conversations, we conducted a diary study with seven more information workers.
                                    </p>

                                    <h4 id="diary-study" className="mt-5">
                                        Diary Study
                                    </h4>
                                </div>

                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center my-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom" src={ParticipantStats} width="100%" alt="Recruited 7 information workers from 3 different countries and 5 unique industries" />
                                            </SRLWrapper>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10">
                                    <p>
                                        For the diary study, we asked participants to write notes down each time they collaborated for their job over the course of a workweek. Specifically, we asked them to write down:
                                    </p>
                                    <ul>
                                        <li>What the collaboration/meeting was about</li>
                                        <li>Tools and equipment (e.g. computer, tablet) used</li>
                                        <li>Highlights and painpoints</li>
                                        <ul>
                                            <li>Frustrations, positive interactions</li>
                                        </ul>
                                    </ul>

                                    <p>
                                        After they finished journalling, we scheduled an hour-long follow-up interview with each participant to go over their notes and ask any remaining questions.
                                    </p>
                                </div>

                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center my-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom" src={AffinityDiagram} width="100%" alt="Affinity diagrammed interview notes on Miro" />
                                            </SRLWrapper>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10">
                                    <h4 id="findings" className="mt-5">
                                        Findings
                                    </h4>
                                    <p>
                                        We sorted the findings from our affinity diagram into insights onto a severity scale measuring much each finding affected an information workers’ ability to efficiently complete tasks. We also affixed a sticker to the edge of each insight based on whether the insight could be more easily or better addressed in 2D (red square sticker), 3D (green sticker), or both (yellow sticker).
                                    </p>
                                </div>

                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center my-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom" src={SeverityScale} width="100%" alt="Insights sorted onto a severity scale as either critical, severe, major, or minor problems" />
                                            </SRLWrapper>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10">
                                    <p>
                                        We decided to focus on three insights moving forward, realizing that a successful collaboration program would need to keep each in mind.
                                    </p>
                                    <ol>
                                        <li>It’s easy to assume that everyone is always on the same page</li>
                                        <li>Non-verbal cues such as facial expression and body movement are crucial when it comes to communication</li>
                                        <li>Each communication platform serves a different purpose</li>
                                    </ol>
                                </div>
                            </div>
                        </section>


                        {/* Storyboards */}
                        <section>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="storyboards">
                                        STORYBOARDS
                                    </h3>
                                    <p>
                                        Next, our team created storyboards of the ideas we came up with to address the insights we drew. Below is a sample of a few of the boards we drew. Each board solves a problem for a different market segment of information workers.
                                    </p>
                                </div>

                                <div className="col-12 my-5">
                                    <Carousel className="pb-2" style={{ boxShadow: "0px 0px 5px #cdcdcd" }} interval={null}>
                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={Storyboard1}
                                                alt="Storyboard 1- whiteboarding idea for creators"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={Storyboard2}
                                                alt="Storyboard 2- whiteboarding idea for crunchers"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={Storyboard3}
                                                alt="Storyboard 3- wARroom for curators"
                                                draggable={false}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Image
                                                className="d-block w-100"
                                                src={Storyboard4}
                                                alt="Storyboard 4- training for coaches"
                                                draggable={false}
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>

                                <div className="col-12 col-md-10">
                                    After showcasing our boards to our project sponsor, we collectively decided to proceed with the wARroom concept. Both our team and sponsor wanted us to design a future-thinking product that could address needs of various information worker market segments. Our wARroom idea met this request.
                                </div>

                                <div className="col-12 mb-3">
                                    <p className="blockquote">
                                        <b>War Room:</b> a shared space where entire teams can come together to solve a complex problem and collaborate on long-term projects.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Final Product */}
                        <section>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="final-product">
                                        FINAL PRODUCT
                                    </h3>
                                    <p>
                                        Our final product, wARroom, is a program for the Microsoft Hololens where teams across the world can come together in a mixed reality setting to both showcase their work and create.
                                    </p>

                                    <p>
                                        Our final product, wARroom, is a program for the Microsoft Hololens where teams across the world can come together in a mixed reality setting to both showcase their work and create.
                                    </p>

                                    <p>
                                        The sketches below show our wARroom concept used by a team of creators and controllers in the fashion industry.
                                    </p>
                                </div>

                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center mt-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom" src={FinalProduct1} width="100%" alt="Product use case sketch 1" />
                                            </SRLWrapper>

                                            <p className="credit mb-2">
                                                Illustrated by <a href="http://steveorchosky.com/" target="_blank" rel="noopener noreferrer">Steve Orchosky</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10 mb-5">
                                    <p>
                                        In the first image, fashion designers stand in the main lobby, looking at still previews of different wARrooms enlarged on the wall. There is a 3D model of a new sweater in the center of the room.
                                    </p>
                                </div>



                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center mt-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom" src={FinalProduct2} width="100%" alt="Product use case sketch 2" />
                                            </SRLWrapper>

                                            <p className="credit mb-2">
                                                Illustrated by <a href="http://steveorchosky.com/" target="_blank" rel="noopener noreferrer">Steve Orchosky</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-md-10 mb-5">
                                    <p>
                                        The creators on the right decide to enter the rightmost wARroom to check out the new sweater in an immersive customer persona environment.
                                    </p>
                                </div>



                                <div className="col-12">
                                    <div className="row justify-content-center align-items-center mt-4">
                                        <div className="col-12">
                                            <SRLWrapper options={lightboxOptions}>
                                                <Image className="img-zoom mt-4" src={FinalProduct3} width="100%" alt="Product use case sketch 3" />
                                            </SRLWrapper>

                                            <p className="credit mb-2">
                                                Illustrated by <a href="http://steveorchosky.com/" target="_blank" rel="noopener noreferrer">Steve Orchosky</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-10">
                                    <p>
                                        Back in the main lobby, a designer is playing around with the color of the sweater. Given the mixed reality nature, the 3D item is lifesize and true-to-fit for the most realistic design experience.
                                    </p>
                                </div>

                            </div>
                        </section>

                        {/* Reflection */}
                        <section>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-10">
                                    <h3 className="mb-3" id="reflection">
                                        REFLECTION
                                    </h3>
                                    <h4 id="leadership-experience">
                                        Leadership Experience in Research
                                    </h4>
                                    <p>
                                        Given the interdisciplinary nature of our team, many of my peers weren’t familiar with qualitative research methods. I gained leadership experience by taking charge and guiding my team through tasks such as writing interview guides, participant recruitment, and deciding on research methods to use. I was also able to practice explaining core research concepts to team members from engineering and business backgrounds, all while including everyone in the research process from start to finish.
                                    </p>
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

                                <ScrollIntoView selector="#research">
                                    <li><span>Research</span></li>
                                </ScrollIntoView>

                                <ul>
                                    <ScrollIntoView selector="#initial-explorations">
                                        <li><span>Initial Explorations</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#diary-study">
                                        <li><span>Diary Study</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#findings">
                                        <li><span>Findings</span></li>
                                    </ScrollIntoView>
                                </ul>

                                {/* <ScrollIntoView selector="#final-product">
                                    <li><span>Final Product</span></li>
                                </ScrollIntoView> */}

                                {/* <ul> */}
                                    <ScrollIntoView selector="#storyboards">
                                        <li><span>Storyboards</span></li>
                                    </ScrollIntoView>

                                    <ScrollIntoView selector="#final-product">
                                        <li><span>Final Product</span></li>
                                    </ScrollIntoView>
                                {/* </ul> */}

                                <ScrollIntoView selector="#reflection">
                                    <li><span>Reflection</span></li>
                                </ScrollIntoView>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MicrosoftWarroom;