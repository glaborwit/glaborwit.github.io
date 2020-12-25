import React, { useEffect } from 'react';

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Images
import BudgetBuddyCover from '../assets/images/budgetbuddy/mobileandwatchapps.png';

function BudgetBuddy() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="BudgetBuddy">
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Budget Buddy" tagline="The grocery budget assistant app" image={BudgetBuddyCover} />

                {/* Overview */}
                <section>
                    <h3 className="mb-3">OVERVIEW</h3>
                    <div className="row">
                        <div className="col-md-4">

                            <h5>Timeline</h5>
                            <p>
                                Nov-Dec 2020, 1 month
                            </p>

                            <h5>Roles</h5>
                            <p>
                                UX Researcher, UI Design Contributor
                                <br />
                                <i>Wrote interview guides and conducted initial research and prototype tests. Used findings to transform app's interface design.</i>
                            </p>

                            <h5>Teammates</h5>
                            <p>
                                Janelle Wen, Yuwen Lu, Shai Bhardwaj
                            </p>

                            <h5>Research Methods</h5>
                            <p>
                                Pop-Up Research, Directed Storytelling, Customer Journey Mapping
                            </p>
                        </div>

                        <hr className="my-3 ml-3 ml-md-0 my-md-0 d-md-none" />

                        <div className="col-md-8 mt-3 mt-md-0">
                            <h5 className="d-none d-md-block">Summary</h5>
                            <p>
                                lorem ipsum
                            </p>
                        </div>
                    </div>
                </section>


                {/* Insights and Evidence */}
                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-7">
                            <h3 className="mb-3">INSIGHTS AND EVIDENCE</h3>
                            list
                        </div>
                        <div className="col-9 col-md-7 col-lg-5">
                            {/* <Image src={EvidenceSpeechBubbles} width="100%" /> */}
                        </div>
                    </div>
                </section>


                {/* Solution */}
                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-7">
                            <h3 className="mb-3">SOLUTION</h3>
                            lorem ipsum
                        </div>
                        <div className="col-9 col-md-7 col-lg-5">
                            {/* <Image src={EvidenceSpeechBubbles} width="100%" /> */}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default BudgetBuddy;