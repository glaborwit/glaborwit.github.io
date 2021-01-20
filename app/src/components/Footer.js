import React from "react";

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css';
import '../css/Footer.css';

// Images
import LinkedInIcon from "../assets/logos/linkedin_black.png";
import MediumIcon from "../assets/logos/medium_icon_black.svg";
import TwitterIcon from "../assets/logos/twitter_black.png";

function Footer() {
    return (
        <div className="footer mb-3 mb-sm-2 mx-2 mx-sm-4 mt-3 d-flex justify-content-between">
            <div>
                {/* LinkedIn Social Icon */}
                <a target="_blank" className="social-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielle-laborwit-357783142/">
                    <img height="15px" src={LinkedInIcon} alt="LinkedIn" />
                </a>

                {/* Medium Social Icon */}
                <a target="_blank" className="social-link" rel="noopener noreferrer" href="https://medium.com/@gabbi">
                    <img height="20px" src={MediumIcon} alt="Medium" />
                </a>

                {/* Twitter Social Icon */}
                <a target="_blank" className="social-link" rel="noopener noreferrer" href="https://twitter.com/laborwitg">
                    <img height="12px" src={TwitterIcon} alt="Twitter" />
                </a>
            </div>
            <div>Created with React by Gabrielle LaBorwit 2021</div>
        </div>
    )
};

export default Footer;
