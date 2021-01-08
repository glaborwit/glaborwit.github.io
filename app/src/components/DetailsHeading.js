import React from 'react';
import Image from 'react-bootstrap/Image';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsHeading.css'; // global styles

function DetailsHeading(props) {
    return (
        <div className="DetailsHeading">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <h1 className="text-center text-md-left">{props.title}</h1>
                    <h2 className="lighter purple mb-4 text-center text-md-left">{props.tagline}</h2>
                </div>
                <div className="col-md-7">
                    <Image width="100%" src={props.image} draggable={false} />
                </div>
            </div>
        </div>
    )
}

export default DetailsHeading;