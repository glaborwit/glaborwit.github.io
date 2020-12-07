// Modules
import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

function throwError(inputName){
    console.log(inputName, " is required.")
}

function submitForm(e, func) {
    // Error checker: make sure all input values are filled (except excluded inputs if any)

    // console.log(func(e))
    let excludedInputs = "curryPhoto tastingNotes";
    let error = false;
    
    // Go through each input field and make sure it's not empty
    for (var i = 0; i < e.target.elements.length - 2; i++) {
        if(e.target[i].value === "" && !excludedInputs.includes(e.target[i].name)){
            throwError(e.target[i].name);
            error = true;
        }
    }
    if (error === true){
        return null
    }
    
    func(e);
}

function AddCurryModal(props) {
    return (
        <Modal id="bootstrap-overrides"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={(e) => submitForm(e, props.currySetter)}>
                <Modal.Body className="container">
                    <h2>New Curry Entry</h2>
                    <div className="row">
                        <div className="col-8">
                            <Form.Label className="mb-1">Restaurant</Form.Label><br />
                            <Form.Control size="sm" name="restaurantName" type="text" placeholder="Name of Restaurant" />
                            <br />

                            <Form.Label className="mb-1">Full Address of Restaurant</Form.Label>
                            <Form.Control size="sm" name="restaurantAddress" type="text" placeholder='e.g. "123 Thai St, Pittsburgh, PA"' />
                            <br />

                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-8">
                                        <Form.Label className="mb-0">Curry Name</Form.Label>
                                        <br /><span className="sublabel">Include "curry" in name</span>
                                        <Form.Control size="sm" name="curryType" type="text" placeholder='e.g. "Red Curry"' />
                                    </div>
                                    <div className="col-4">
                                        <Form.Label className="mb-0">Rating</Form.Label>
                                        <br /><span className="sublabel">1=worst, 5=best</span>
                                        <Form.Control size="sm" name="curryRating" type="text" placeholder="1-5" />
                                    </div>
                                </div>
                            </div>

                            <br />
                            <Form.Label className="mb-1">Taste Notes</Form.Label>
                            <Form.Control as="textarea" name="tastingNotes" placeholder="Taste description of curry" rows={3} />

                        </div>

                        <div className="col-4">
                            <Form.Group>
                                <Form.Label className="mb-1">Add a Photo</Form.Label>
                                <Form.File name="curryPhoto" id="exampleFormControlFile1" />
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

// Store curry list in local storage
function store(lizt) {
    localStorage.setItem('curryList', JSON.stringify(lizt))
}

// Load from storage
function load() {
    let unparsedCurryList = localStorage.getItem('curryList')
    //Using && to condition on unparsedCurryList else null
    return (unparsedCurryList && JSON.parse(unparsedCurryList))
}

// Globals
let loaded_curryList = load();

class Curry extends React.Component {
    render() {
        return (
            <div className="col-sm-6 mb-4">
                <div className="container mt-4 mt-sm-auto">
                    <div className="row">
                        <div className="col-sm-4">
                            <Image alt="curry" src={"noodlehead-red.jpg"} />
                        </div>
                        <div className="col-sm-8">
                            <h2 className="mb-0 curry-card-title">{this.props.restaurant}</h2>
                            <h3>{this.props.curry}</h3>
                            <p>
                                Taste notes: {this.props.tastingNotes}
                                <br />Rating: {this.props.rating}/5
                            </p>

                            <span className="delete-btn" onClick={(e) => this.props.deleteItem(e, this.props.i)}>
                                {/* <span onClick={() => deleteCurry()} className="delete-btn"> */}
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
    state = {
        //Using || for backup assignment if no curryList in storage
        curryList: loaded_curryList || [],
        newCurryContent: "",
        modalShow: false
    };

    renderCurryItem(restaurant, curryType, tastingNotes, rating, i) {
        return <Curry restaurant={restaurant} curry={curryType} tastingNotes={tastingNotes} rating={rating} i={i} deleteItem={this.deleteItem} />;
    }

    addItem = (e) => {
        let currCurryList = this.state.curryList;

        let newCurry = {};
        for (var i = 0; i < e.target.elements.length - 2; i++) {
            newCurry[e.target.elements[i].name] = e.target[i].value;
        }
        console.log("New curry: ", newCurry)
        currCurryList.push(newCurry)
        this.setState({ curryList: currCurryList });
        store(currCurryList)
    };

    deleteItem = (event, i) => {
        event.stopPropagation(); // Makes the delete button work
        let currCurryList = this.state.curryList;
        currCurryList.splice(i, 1);
        this.setState({ curryList: currCurryList });
        store(currCurryList);
    };

    setModalShow(bool) {
        this.setState({ modalShow: bool });
    }

    render() {
        // console.log("rerender");
        let curriesInIndex = [];
        if (this.state.curryList != null) {
            for (let i = 0; i < this.state.curryList.length; i++) {
                let curry = this.state.curryList[i];
                curriesInIndex.push(
                    this.renderCurryItem(
                        curry.restaurantName,
                        curry.curryType,
                        curry.tastingNotes,
                        curry.curryRating,
                        i
                    )
                );
                // console.log(curry); // Debug
            }
        }

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
                        <h1 className="mb-0">Saved Curries</h1>
                        <a href="#add" onClick={() => this.setModalShow(true)}>
                            <u>+ Add New Curry</u>
                        </a>
                    </div>
                    <div className="container">
                        <div className="row">
                            {curriesInIndex}
                        </div>
                    </div>
                </div>
                <AddCurryModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    currySetter={() => this.addItem.bind(this)}
                />
            </div>


            //     <div className="App">
            //         <div className="Header">
            //             <h2>Simple To Do</h2>
            //             <input
            //                 type="text"
            //                 value={this.state.newCurryContent}
            //                 onChange={(evt) => {
            //                     console.log(evt.target.value);
            //                     this.setState({ newCurryContent: evt.target.value });
            //                 }}
            //                 placeholder="new to do...."
            //             />
            //             <span onClick={() => this.addItem()} className="AddNewToDoButton">
            //                 Add
            //   </span>
            //         </div>
            //         <ul>{curriesInIndex}</ul>
            //     </div>
        );
    }
}

export default App;
