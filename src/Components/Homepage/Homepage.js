import React, { Component } from 'react';
import './Homepage.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Homepage extends Component {

    render() {
        return (
            <div className="home">
                <h3>Homepage</h3>
                <Link to={'../TripGallery'}>Trip Gallery</Link> <br />
                <Link to={'../CreateTrip'}>Create Trip</Link> <br />
                <Link to={'../Instructions'}>Instructions</Link> <br />
                   
            </div>
        );
    }
}