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

class NavHam extends Component {
    render() {
        return (
            <Navbar expand="sm" id="overrides" className="mx-sm-4">
                <Link className="navbar-brand py-2" to="/">GABRIELLE LABORWIT</Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact={true} className="nav-link" to="/">PROJECTS</NavLink>
                        <NavLink className="nav-link" replace to="/about">ABOUT</NavLink>
                        <a className="nav-link" href={Resume}>RESUME</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};

export default NavHam;