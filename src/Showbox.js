import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const Showbox = ({ score, show }) => {

    //opening modal
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showbooking, setShowbooking] = useState(false);
    const handleClosebooking = () => setShowbooking(false);
    const handleShowbooking = () => setShowbooking(true);
    //saving in local storage
    // const handle = () => {
    //     localStorage.setItem("name", show.name)
    //     localStorage.setItem("Language", show.language)
    //     localStorage.setItem("Runtime", show.runtime)
    // }
    // const [view, setView] = useState(true);
    // <div>
    //     <div>{localStorage.getItem("name")}</div>
    //     <div>{localStorage.getItem("Language")}</div>
    //     <div>{localStorage.getItem("Runtime")}</div>

    // </div>

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={show.image.original} />
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>

                    {/* opening description modal */}

                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" style={{ width: '14rem' }} src={show.image.medium} />
                            <h3>{show.name}</h3>
                            <h4>IMDb: {show.rating.average}</h4>
                            <h5>Release Date: {show.premiered}</h5>
                            <h5>language: {show.language}</h5>
                            <h5>Genre: {show.genres}</h5>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{show.summary}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => { handleClose(); handleShowbooking(); }}>Book Now</Button>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                    {/*opening booking modal */}

                    <Modal show={showbooking} onHide={handleClosebooking}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>{show.name}</h3>
                            <h5>language: {show.language}</h5>
                            <h5>Genre: {show.genres}</h5>
                            <br></br>
                            <Form>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name" />

                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                                <Form.Label>Number of Tickets</Form.Label>
                                <Form.Control type="number" placeholder="Number of Tickets" />
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Confirm Order
                                </Button>
                            </Form>
                        </Modal.Body>

                    </Modal>
                </div>
            </div>

        </div>



    )
}

export default Showbox

