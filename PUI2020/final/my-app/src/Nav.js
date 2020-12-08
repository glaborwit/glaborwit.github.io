import React, { Component } from "react";
import './Nav.css';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar mb-5">
                <span className="navbar-brand">Custom Curry Index</span>

                <div className="navbar-nav flex-row">
                    <Link to="/" className="nav-item nav-link active px-1 mr-2">Curry Index</Link>

                    <Link to="/map" className="nav-item nav-link px-1 mx-2">Map</Link>
                </div>
            </nav>
        )
    }
}

export default Nav;