import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';

function AddCurryModal(props) {
    return (
        <Modal id="bootstrap-overrides"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={props.currySetter}>
                <Modal.Body className="container">
                    <h2>New Curry Entry</h2>
                    <div className="row">
                        <div className="col-8">
                            <Form.Label className="mb-1">Restaurant</Form.Label><br />
                            <Form.Control size="sm" type="text" placeholder="Name of Restaurant" />
                            <br />

                            <Form.Label className="mb-1">Full Address of Restaurant</Form.Label>
                            <Form.Control size="sm" type="text" placeholder='e.g. "123 Thai St, Pittsburgh, PA"' />
                            <br />

                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Form.Label className="mb-0">Curry Name</Form.Label>
                                        <br /><span className="sublabel">Include "curry" in name</span>
                                        <Form.Control size="sm" type="text" placeholder='e.g. "Red Curry"' />
                                    </div>
                                    <div className="col-4">
                                        <Form.Label className="mb-0">Rating</Form.Label>
                                        <br /><span className="sublabel">1=worst, 5=best</span>
                                        <Form.Control size="sm" type="text" placeholder="1-5" />
                                    </div>
                                </div>
                            </div>

                            <br />
                            <Form.Label className="mb-1">Taste Notes</Form.Label>
                            <Form.Control as="textarea" placeholder="Taste description of curry" rows={3} />

                        </div>

                        <div className="col-4">
                            <Form.Group>
                                <Form.Label className="mb-1">Add a Photo</Form.Label>
                                <Form.File id="exampleFormControlFile1" />
                            </Form.Group>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" size="sm" onClick={props.onHide}>Close</Button>
                    <Button variant="primary" type="submit" size="sm">Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

class Curry extends React.Component {

    render() {
        return (
            <div className="container mt-4 mt-sm-auto">
                <div className="row">
                    <div className="col-sm-4">
                        <Image alt="curry" src={"/assets/images/noodlehead-red.jpg"} />
                    </div>
                    <div className="col-sm-8">
                        <h2>{this.props.restaurant}</h2>
                        <h3>{this.props.curry}</h3>
                        <p>
                            Taste notes: {this.props.tastingNotes}
                            <br />Rating: {this.props.rating}/5
                        </p>

                        <span className="delete-btn">
                            Delete
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class CurryIndex extends React.Component {
    renderCurryItem(restaurant, curryType, tastingNotes, rating) {
        return <Curry restaurant={restaurant} curry={curryType} tastingNotes={tastingNotes} rating={rating} />;
    }

    render() {
        // const status = 'Next player: X'; 

        return (
            <div className="container">
                {/* <div className="status">{status}</div> */}
                <div className="row">
                    <div className="col-sm-6">
                        {this.renderCurryItem("Thai Cottage", "Red Curry", "savory, mostly salty, spicy", 5)}
                    </div>
                    <div className="col-sm-6">
                        {this.renderCurryItem("Thai & Noodle Outlet", "Green Curry", "savory, salty, sweet", 4)}
                    </div>
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
    state = {
        modalShow: false,
        currArr: {},
    }

    setModalShow(bool) {
        this.setState({ modalShow: bool });
    }

    addNewCurry(e) {
        // pass as setter into modal component as prop
        // use set state to add a new obj to set
        console.log("arr: ", e.target.elements);
    }

    render() {
        return (
            <div id="bootstrap-overrides">

                {/* Navbar */}
                <nav className="navbar mb-5">
                    <span className="navbar-brand">Custom Curry Index</span>

                    <div id="navbarNav">
                        <div className="navbar-nav flex-row">
                            <a href="#curryindex" className="nav-item nav-link active px-1 mr-2">Curry Index</a>
                            <a href="#map" className="nav-item nav-link px-1 mx-2">Map</a>
                        </div>
                    </div>
                </nav>

                {/* Curry Index: List of curries */}
                <div className="container">
                    <div className="header pb-3">
                        <h1>Saved Curries</h1>
                        <a href="#add" onClick={() => this.setModalShow(true)}>
                            <u>+ Add New Curry</u>
                        </a>
                    </div>
                    <CurryIndex />
                </div>
                <AddCurryModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    currySetter={this.addNewCurry}
                />

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
