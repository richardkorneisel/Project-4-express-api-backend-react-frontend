import React, { Component } from 'react';
import './TripGallery.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import GalleryCard from '../GalleryCard/GalleryCard'

export default function TripGallery (props) {
    let details=props.travels.travels
    let gallery = details.map((value, index) =>
            <Link to={"/TripDetail/" + value.id} >
                <div key={index}>
                    <div className="container">
                        <div className="centered">{value.title}</div>
                        <img src={value.image_url}></img>
                    </div>
                </div>
            </Link>
        )
 
        //console.log(galleryCard)
        console.log(details)
        //console.log(value)
        //console.log(index)
        return (
            <div className="home">
                <h3>Trip Gallery Page</h3>
                <Link to={'../TripDetail'}>Trip Details</Link> <br />
                {gallery}
            </div>
        );
}