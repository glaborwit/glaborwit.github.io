import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Map from "./Map";
import Nav from "./Nav";
import App from './App';

class Routing extends Component {
    render() {
        return (
            <Router>
                <Nav />

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    
                    <Route exact path="/map">
                        <Map />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));