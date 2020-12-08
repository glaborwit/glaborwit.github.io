// HOW TO USE MAPS API: https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2

// Modules
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class Map extends Component {
    render() {
        return (
            <div id="bootstrap-overrides">
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                />
            </div>
        )
    }
}

export default Map;
export default GoogleApiWrapper({ apiKey: 'TOKEN HERE' })(MapContainer);