import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import MapContainer from "./Map";
import Nav from "./Nav";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// Load from storage
function load() {
    let unparsedCurryList = localStorage.getItem('curryList')
    //Using && to condition on unparsedCurryList else null
    return (unparsedCurryList && JSON.parse(unparsedCurryList))
}

// Store curry list in local storage
function store(lizt) {
    localStorage.setItem('curryList', JSON.stringify(lizt))
}

// globals
let loaded_curryList = load();

class Routing extends Component {
    constructor(props) {
        super(props)
        this.globalSetter = this.globalSetter.bind(this)

        this.state = {
            curries: loaded_curryList || []
        };
    }

    globalSetter(lizt){
        this.setState({
            curries: lizt
        });
        
        // Store new lizt in local storage
        store(lizt);
        console.log("curr lizt: ", lizt)
    }

    render() {
        return (
                <div className="container">
                    <HashRouter basename='/'>
                        <Nav />

                        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                        <Switch>
                            <Route exact path="/">
                                <App globalSetter={this.globalSetter} />
                            </Route>

                            <Route path="/map">
                                <MapContainer curries={this.state.curries}/>
                            </Route>
                        </Switch>
                    </HashRouter>
                </div>
        )
    }
}

// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>

ReactDOM.render(<Routing />, document.getElementById('root'));