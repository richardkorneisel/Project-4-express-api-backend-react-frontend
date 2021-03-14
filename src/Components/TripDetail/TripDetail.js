import React, { Component } from 'react';
import './TripDetail.css';
import TripGallery from '../TripGallery/TripGallery'

export default function TripDetails (props) {

        let details= props.travels
        let imageId= props.match.params.id
        // if (imageId != null){
        //     imageId -= 1
        // } 
        console.log(details)
        console.log(props.match.params.id)
        return (
            <div className="home">
                <h3>Trip Detail Page</h3>
                <h3>Title :   {details[imageId].title}</h3>
                <p>
                    Trip Picture :
                    <img src={details[imageId].image_url} alt="trip picture" width="500" height="600"/> 
                </p>
                <p>
                    Map :
                     <a href={details[imageId].map_url} target="_blank" >Map of area</a> <br/>
                     <br/>


                     Trip Report :   {details[imageId].trip_report}
                </p>
                
            </div>
        );
    
} 