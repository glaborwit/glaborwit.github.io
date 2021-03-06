import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles
import { SRLWrapper } from "simple-react-lightbox";

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants' // image lightbox styles

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
            <Helmet>
                <title>Gabrielle LaBorwit | Budget Buddy</title>
            </Helmet>
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Budget Buddy" tagline="The grocery budget assistant app" image={BudgetBuddyCover} alt="Budget Buddy app mobile device add product screen and smartwatch device screen" />

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
                                <em>Wrote interview guides and conducted initial research and prototype tests. Used findings to transform app's interface design.</em>
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
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={JourneyMap} width="100%" alt="Customer journey map: grocery shopper" />
                            </SRLWrapper>
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
                                On the app, users register grocery items via voice dictation or phone-camera scanning technology. They then choose whether to add the item to their list of items currently in their cart or to the list of items they want to buy, but will decide on later depending on their leftover budget. Our app also suggests cheaper alternatives to items and where to find them. This design <strong>gives users the freedom to shop for items they need while maintaining a sense of free-will</strong> for buying “nice-to-have” or “extra” items.
                            </p>

                            <p>
                                Our app also <strong>brings value to the grocery stores</strong> in which our users shop. The “Decide Later” list reminds users about potentially forgotten items, giving these items a second chance at being sold. Suggesting alternatives allows stores to promote older or surplus products, decreasing waste and financial loss due to unsold expired products. Lastly, making customers more confident about the items in their cart reduces the need for associates to put back unwanted items at checkout. This descreases extra handling of items and makes the store a safer environment for both shoppers and associates.
                            </p>
                        </div>
                        <div className="col-5 col-md-4 col-lg-3">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={MobileLists} width="100%" alt="Mobile app interface: 'Cheaper substitute found'" />
                            </SRLWrapper>
                        </div>
                        <div className="col-5 col-md-4 col-lg-3">
                            <SRLWrapper options={lightboxOptions}>
                                <Image className="img-zoom" src={WatchDecideLaterCartListsGif} width="100%" alt="Watch interface" />
                            </SRLWrapper>
                        </div>
                    </div>
                </section>


                {/* Demos */}
                <section>
                    <h3 className="mb-3">DEMOS</h3>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h5 className="mb-2 text-center">Mobile App Demo</h5>
                            <ReactPlayer width="100%" controls={true} url="https://www.youtube.com/watch?v=70wwDN58Udg" />
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <h5 className="mb-2 text-center">Smartwatch App Demo</h5>
                            <ReactPlayer width="100%" controls={true} url="https://vimeo.com/494724695" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default BudgetBuddy;