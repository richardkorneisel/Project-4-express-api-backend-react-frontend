import React from 'react';
import './TripGallery.css';
import GalleryCard from '../GalleryCard/GalleryCard'

export default function TripGallery(props) {
   
    let details = props.travels
    let galleryCards = details.slice().reverse().map((value, index) => {
        return (
            <GalleryCard {...props} value={value} index={value.id}/>
            
        )    
    })
   
    console.log(details)
    
    console.log(props)
    return (
        <div>
            <div className="TripGallery">
                <h3>Trip Gallery Page</h3>
                <div className="GalleryCards">
                    {galleryCards}
                </div>
            </div>

        </div>
    );
}