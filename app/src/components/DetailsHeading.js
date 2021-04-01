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
            <div className="row align-items-center justify-content-center">

                <div className="col-md-1 d-none d-md-block"></div>
                <div className="col-md-5 d-none d-md-block">
                    <h1 className="text-center text-md-left">{props.title}</h1>
                    <h2 className="purple mb-4 text-center text-md-left">{props.tagline}</h2>
                </div>

                <div className="col-12 col-md-6">
                    <SRLWrapper options={lightboxOptions}>
                        <Image className="img-zoom" width="100%" src={props.image} alt={props.alt} draggable={false} />
                    </SRLWrapper>
                </div>

                {/* Title + Tagline below photo on smaller devices */}
                <div className="col-12 mt-4 d-block d-md-none">
                    <h1 className="text-center text-md-left">{props.title}</h1>
                    <h2 className="purple mb-0 text-center text-md-left">{props.tagline}</h2>
                </div>

            </div>
        </div>
    )
}

export default DetailsHeading;