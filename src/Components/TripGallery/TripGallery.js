import React, { Component } from 'react';
import './TripGallery.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import GalleryCard from '../GalleryCard/GalleryCard'

export default function TripGallery(props) {
    let details = props.travels
    let gallery = details.map((value, index) =>
        <div>
            <Link to={"/TripDetail/" + index} >
                <div key={index}>
                    <div className="container">
                        <div className="centered">{value.title}</div>
                        <img src={value.image_url}></img>
                        <div >{value.id}</div>
                    </div>
                </div>
            </Link>

            <button
                key={`button-${value.id}`}
                id={value.id}
                arrayindex={index}
                onClick={(e) => props.deleteTrip(e, value.id)}
            >
                Delete
            </button>
        </div>

    )


    //value.id vs index row 9
    //console.log(galleryCard)
    console.log(details)
    //console.log(value.id)
    //console.log(index)
    return (
        <div>
            <div className="home">
                <h3>Trip Gallery Page</h3>
                <Link to={'../TripDetail'}>Trip Details</Link> <br />
                {gallery}
            </div>

        </div>
    );
}