import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/Infocard.css'; // global styles

function Infocard(props) {
    return (
        <div className="col-12 col-md-10 mb-5">
            <div className={`card ${props.comingSoon ? "coming-soon" : ""}`}>
                <div className="row">
                    <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
                        {props.comingSoon && (
                            <Image width="100%" className="card-img" src={props.pic} />
                        )}
                        {!props.comingSoon && (
                            <Link to={"/" + props.link}>
                                <Image width="100%" className="card-img" src={props.pic} />
                            </Link>
                        )}
                    </div>
                    <div className="col-12 col-lg-7 card-body text-center text-lg-left">
                        <h3 className="card-title mb-1 mb-lg-2">{props.title}</h3>
                        <p className="card-text affiliation mb-2">{props.affiliation}</p>
                        <p className="card-text">{props.tagline}</p>
                        <Link className={`btn ${props.comingSoon ? "disabled" : ""}`} to={"/" + props.link}>See More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infocard;