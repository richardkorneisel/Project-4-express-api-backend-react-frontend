import React, { Component } from 'react';
import './EditTrip.css';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

export default class EditTrip extends Component {
    constructor(props) {
        super(props)


    }
    componentDidMount() {
        console.log("ComponentDidMount edit trip")
    }
    componentDidUpdate() {
        console.log("ComponentDidUpdate edit trip")
    }

    render() {
        if (this.props.travels.length == 0) {
            this.props.getTravelGallery()
            console.log("is getTravelGallery working")
        }

        console.log(this.props)
        let details = this.props.travels
        let tripId = this.props.match.params.id

        console.log(details)
        let trip = details.find(trip => tripId == trip.id)

        if (this.props.editMade) {
            this.props.resetEditMade()
            return <Redirect to="/TripGallery" />

        }

        return (
            <div className="home">
                <h3>Edit Trip</h3>

                <Form onSubmit={(e) => this.props.editTrip(e, trip.id)} >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={trip.title} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" name="image_url" defaultValue={trip.image_url} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Map URL</Form.Label>
                        <Form.Control type="text" name="map_url" defaultValue={trip.map_url} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Trip Report</Form.Label>
                        <Form.Control type="text" name="trip_report" defaultValue={trip.trip_report} as="textarea" rows={6} />
                    </Form.Group>
                    <Button variant="secondary" as="input" type="submit" value="Save Changes" />{' '}
                </Form>

                <ul>{this.props.travels.travels}</ul>
            </div>

        );

    }
}