import React from 'react';
import Image from 'react-bootstrap/Image';
import { SRLWrapper } from "simple-react-lightbox";

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsHeading.css'; // global styles

// Constant variables
import { lightboxOptions } from '../SpecificComponents/Constants' // image lightbox styles



function DetailsHeading(props) {
    return (
        <div className="DetailsHeading">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <h1 className="text-center text-md-left">{props.title}</h1>
                    <h2 className="purple mb-4 text-center text-md-left">{props.tagline}</h2>
                </div>
                <div className="col-md-7">
                    <SRLWrapper options={lightboxOptions}>
                        <Image className="img-zoom" width="100%" src={props.image} alt={props.alt} draggable={false} />
                    </SRLWrapper>
                </div>
            </div>
        </div>
    )
}

export default DetailsHeading;