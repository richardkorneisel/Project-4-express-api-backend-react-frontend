import React, { Component } from 'react';
import './TripDetail.css';
import TripGallery from '../TripGallery/TripGallery'

export default function TripDetails (props) {
         console.log("travel detail",props)
        let details= props.travels
        let tripId= props.match.params.id
       
        console.log(details)
        let trip= details.find(trip => tripId==trip.id)
        
        return (
            <div className="home">
                <h3>Trip Detail Page</h3>
                <h3>Title :   {trip.title}</h3>
                <p>
                    Trip Picture :
                    <img src={trip.image_url} alt="trip picture" width="500" height="600"/> 
                </p>
                <p>
                    Map :
                     <a href={trip.map_url} target="_blank" >Map of area</a> <br/>
                     <br/>


                     Trip Report :   {trip.trip_report}
                </p>
                
            </div>
        );
    
} 