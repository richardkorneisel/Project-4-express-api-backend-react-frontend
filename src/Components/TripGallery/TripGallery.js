import React, { Component } from 'react';
import './TripGallery.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';


export default function TripGallery (props) {
    

   
        let trip=props.travels
        console.log(trip.travels)
        return (
            <div className="home">
                <h3>Trip Gallery Page</h3>
                <Link to={'../TripDetail'}>Trip Details</Link> <br />
            </div>
        );
}