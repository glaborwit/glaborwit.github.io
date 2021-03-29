import React, { Component } from "react";
import {
    NavLink,
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css';
import '../css/Nav.css';
import Resume from '../assets/GabrielleLaBorwit_Resume.pdf'

// Images
// import logo from '../assets/logos/names/signature3.png'


class NavHam extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Navbar expand="sm" id="overrides" className="col-12">
                        {/* <Link className="navbar-brand py-2" to="/">
                            <Image height="45" draggable={false} src={logo} />
                        </Link> */}
                        <Link className="navbar-brand py-2" to="/">GABRIELLE LABORWIT</Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink exact={true} className="nav-link" to="/">Projects</NavLink>
                                <NavLink className="nav-link" replace to="/about">About</NavLink>
                                <a className="nav-link" href={Resume}>Resume</a>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
};

export default NavHam;