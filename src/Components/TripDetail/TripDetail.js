import React, { Component } from 'react';
import './TripDetail.css';


export default function TripDetails (props) {

        let details= props.travels.travels
        console.log(details[0].title)
        return (
            <div className="home">
                <h3>Trip Detail Page</h3>
                <h3>Title :   {details[0].title}</h3>
                <p>
                    Trip Picture :
                    <img src={details[0].image_url} alt="trip picture" width="500" height="600"/> 
                
                </p>
                <p>
                    map :
                     <a href={details[0].map_url}>Map of area</a> <br/>
                     <br/>


                     Title :   {details[0].trip_report}
                </p>
            </div>
        );
    
} 