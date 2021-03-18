import React, { Component } from 'react';
import './CreateTrip.css';
import { Redirect } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'

export default class CreateTrip extends Component {

    render() {
     console.log(this.props.travels)
     
    if (this.props.tripMade){
      this.props.resetTripMade()
       return <Redirect to = "/TripGallery"/>

     }

        return (
          <div className="home">
            <h3>Create Trip Report</h3>

            <Form onSubmit={this.props.createTrip} >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="i.e. Bismark ND" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name="image_url" placeholder="i.e. https://i.imgur.com/g4qSl7y.jpg" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Map URL</Form.Label>
                <Form.Control type="text" name="map_url" placeholder="i.e. https://i.imgur.com/g4qSl7y.jpg" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Trip Report</Form.Label>
                <Form.Control type="text" name="trip_report" placeholder="i.e. I caught a fish here." as="textarea" rows={6} />
              </Form.Group>
              <Button variant="success" as="input" type="submit" value="Add Trip Report" />
            </Form>

            <ul>{this.props.travels.travels}</ul>

          </div>
          
        );       
    }
}