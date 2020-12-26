import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import ReactPlayer from 'react-player/youtube';

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles
import "../../node_modules/video-react/dist/video-react.css";

// Images
import BudgetBuddyCover from '../assets/images/budgetbuddy/mobileandwatchapps.png';
import JourneyMap from '../assets/images/budgetbuddy/model-journey-map.jpg';
import MobileLists from '../assets/images/budgetbuddy/MobileAllLists.png';
import WatchDecideLaterCartListsGif from '../assets/images/budgetbuddy/Watch-Cart-DecideLater.gif';

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
                                Although many people don’t explicitly set a budget before shopping, anxiety around buying or spending “too much” can still exist in shoppers’ minds. This is especially true when shopping for food, as this type of spending occurs more frequently as it can be considered a necessity. As such, our team wanted to explore this area in the context of the COVID-19 pandemic, since spending constraints could only add to the stress shoppers face outside of the grocery store.
                            </p>
                            <p>
                                Thus, we created Budget Buddy, an app for smartphones and smartwatches. Budget Buddy helps users stay within their grocery budgets while still giving them a sense of much-appreciated freedom in what they buy. In addition, the app was carefully designed to benefit grocery shoppers and the stores in which they shop.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Insights */}
                <section>
                    <h3 className="mb-3">RESEARCH INSIGHTS</h3>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-5">
                            <p>
                                Before ideating on possible solutions, our team conducted 12 user interviews through directed storytelling with participants between the ages of 20-30. We created journey maps chronicling each participant’s most recent grocery shopping experience, then used those to create one consolidated map modeling our overall target user’s experience.
                            </p>
                            <p className="d-none d-lg-block pt-3">
                                After further analysis, we uncovered three key insights:
                            </p>
                            <ol>
                                <li>Participants enjoy the experience of grocery shopping in-store</li>
                                <li>Money-conscious shoppers are conflicted with how to stay within budget while also still buying the “nice-to-have” items that they randomly discovered during the trip</li>
                                <li>Shoppers try not to touch their phone, belongings, and objects as much as possible for safety precautions</li>
                            </ol>
                        </div>
                        <div className="col-12 col-lg-7 mt-2 mt-md-3 mt-lg-0">
                            <Image src={JourneyMap} width="100%" />
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4 d-lg-none">
                        <div className="col-12">
                            <p>
                                After further analysis, we uncovered three key insights:
                            </p>
                            <ol>
                                <li>Participants enjoy the experience of grocery shopping in-store</li>
                                <li>Money-conscious shoppers are conflicted with how to stay within budget while also still buying the “nice-to-have” items that they randomly discovered during the trip</li>
                                <li>Shoppers try not to touch their phone, belongings, and objects as much as possible for safety precautions</li>
                            </ol>
                        </div>
                    </div>
                </section>


                {/* Solution */}
                <section>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6">
                            <h3 className="mb-3">SOLUTION</h3>
                            <p>
                                After many design iterations, our team created Budget Buddy, an app to help manage shoppers’ budgets while not constraining them to a pre-planned grocery list. We designed our app for both smartphones and smartwatches so that customers could easily keep track of their budgets while choosing not to touch their phone or other belongings.
                            </p>
                            <p>
                                On the app, users register grocery items via voice dictation or phone-camera scanning technology. They then choose whether to add the item to their list of items currently in their cart or to the list of items they want to buy, but will decide on later depending on their leftover budget. Our app also suggests cheaper alternatives to items and where to find them. This design gives users the freedom to shop for items they need while maintaining a sense of free-will for buying “nice-to-have” or “extra” items.
                            </p>
                        </div>
                        <div className="col-5 col-md-4 col-lg-3">
                            <Image src={MobileLists} width="100%" />
                        </div>
                        <div className="col-5 col-md-4 col-lg-3">
                            <Image src={WatchDecideLaterCartListsGif} width="100%" />
                        </div>
                    </div>
                </section>


                {/* Demos */}
                <section>
                    <h3 className="mb-3">App Demo (Smartwatch)</h3>
                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=KqspdTtGBcI" />
                </section>

            </div>
        </div>
    )
}

export default BudgetBuddy;