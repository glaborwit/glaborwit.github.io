import React, { Component } from "react";
import {
    Link
} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { Helmet } from 'react-helmet'; // changes <title> tags for dynamic tab titles

// Images
import FlushedEmoji from './assets/images/cowboy-flushed-emoji.jpg';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/Main.css';
import './css/FourOhFour.css';

class FourOhFour extends Component {
    render() {
        return (
            <div className="container mt-4 mb-5 text-center">
                <Helmet>
                    <title>Gabrielle LaBorwit | 404</title>
                </Helmet>
                <div className="row justify-content-center">
                    <div className="col-9 col-md-7 col-lg-5">
                        <Image draggable="false" src={FlushedEmoji} width="100%" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-10 mb-2 mb-sm-4">
                        <h1 className="mt-3">Yikes!</h1>
                        <h3 className="pb-1">We can't seem to find the page you're searching for.</h3>
                        <h5 className="pb-4">[404 Error: The requested URL was not found on this server]</h5>
                        
                        <Link className="btn btn-fourohfour py-3 px-4" to="/">Go back home</Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default FourOhFour;