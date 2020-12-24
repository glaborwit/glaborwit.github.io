import React from 'react';

// Components
import DetailsHeading from '../components/DetailsHeading'

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Main.css'; // global styles
import '../css/DetailsPage.css'; // global styles

// Images
import DashDesign from '../assets/images/dashdesign.jpg';
// import DashUpdate from '../assets/images/dashupdate.gif';

function DataDashboard(props) {
    return (
        <div className="DataDashboard">
            <div className="container mt-2 mt-md-5">
                <DetailsHeading title="Adidas Data Dashboard" image={DashDesign} />
                <h2 style={{fontWeight: "400"}} className="text-center"><i>Write Up Coming Soon</i></h2>
            </div>
        </div>
    )
}

export default DataDashboard;