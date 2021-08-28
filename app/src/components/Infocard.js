import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/Infocard.css'; // global styles

function Infocard(props) {

    return (
        <div className={`col-12 col-lg-10 overrides card ${props.comingSoon ? "coming-soon" : ""}`}>

            {/* 2 col text and img on medium+ devices */}
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 d-none d-md-block">

                    <h3 className="card-title mb-1 mb-lg-2">{props.title}</h3>

                    <p className="card-text appType mb-2">{props.appType}</p>

                    <p className="card-text">{props.tagline}</p>

                    {!props.comingSoon && !props.customLink && (
                        <Link className="see-more" to={"/" + props.link}>
                            See more {'→'}
                        </Link>
                    )}

                    {!props.comingSoon && props.customLink && (
                        <a className="see-more" href={props.link} target="_blank" rel="noreferrer">
                            Read article {'→'}
                        </a>
                    )}

                    {props.comingSoon && (
                        <span className="see-more"><em>Coming Soon</em></span>
                    )}
                </div>


                <div className="col-md-7 card-img-top d-none d-md-block">
                    {props.comingSoon && (
                        <Image height="100%" draggable={false} className="card-img no-hover" src={props.pic} />
                    )}
                    {!props.comingSoon && !props.customLink && (
                        <Link to={"/" + props.link} className="card-img-link">
                            <Image height="100%" draggable={false} className="card-img" src={props.pic} />
                        </Link>
                    )}

                    {!props.comingSoon && props.customLink && (
                        <a href={props.link} target="_blank" rel="noreferrer" className="card-img-link">
                            <Image height="100%" draggable={false} className="card-img" src={props.pic} />
                        </a>
                    )}
                </div>
            </div>

            {/* 1 row img + new row text on ≤small devices */}
            <div className="row align-items-center justify-content-center">

                <div className="col-12 card-img-top d-block d-md-none">
                    {props.comingSoon && (
                        <Image height="100%" draggable={false} className="card-img no-hover" src={props.pic} />
                    )}
                    {!props.comingSoon && !props.customLink && (
                        <Link to={"/" + props.link} className="card-img-link">
                            <Image height="100%" draggable={false} className="card-img" src={props.pic} />
                        </Link>
                    )}

                    {!props.comingSoon && props.customLink && (
                        <a href={props.link} target="_blank" rel="noreferrer" className="card-img-link">
                            <Image height="100%" draggable={false} className="card-img" src={props.pic} />
                        </a>
                    )}
                </div>

                <div className="col-12 d-block d-md-none mt-4">

                    <h3 className="card-title mb-1 mb-lg-2">{props.title}</h3>

                    <p className="card-text appType mb-2">{props.appType}</p>

                    <p className="card-text">{props.tagline}</p>

                    {!props.comingSoon && !props.customLink && (
                        <Link className="see-more" to={"/" + props.link}>
                            See more {'→'}
                        </Link>
                    )}

                    {!props.comingSoon && props.customLink && (
                        <a className="see-more" href={props.link} target="_blank" rel="noreferrer">
                            Read article {'→'}
                        </a>
                    )}

                    {props.comingSoon && (
                        <span className="see-more"><em>Coming Soon</em></span>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Infocard;