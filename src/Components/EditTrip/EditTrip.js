import React, { Component } from 'react';
import './EditTrip.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import TripDetails from '../TripDetail/TripDetail';
import TripGallery from '../TripGallery/TripGallery';

export default class EditTrip extends Component {



    render() {
        console.log(this.props)
        let details = this.props.travels
        let tripId = this.props.match.params.id

        console.log(details)
        let trip = details.find(trip => tripId == trip.id)

        return (
            <div>
                <h1>Edit Trip</h1>

                <form onSubmit={this.props.createTrip} >
                    Trip Title: <input type="text" name="title" value={trip.title} /> <br />
                    Image URL: <input type="text" name="image_url" value={trip.image_url} /><br />
                    Map URL :<input type="text" name="map_url" value={trip.map_url} /><br />
                    Trip Report:<input type="text" name="trip_report" value={trip.trip_report} /><br />
                    <input type="submit" value="Edit Trip Report" /><br />

                </form>

                <ul>{this.props.travels.travels}</ul>



            </div>

        );

    }
}