import React from 'react';
import './TripDetail.css';
import Card from 'react-bootstrap/Card';

export default function TripDetails (props) {
         console.log("travel detail",props)
        let details= props.travels
        let tripId= props.match.params.id
       
        console.log(details)
        let trip= details.find(trip => tripId==trip.id)
        
        return (
            <div className="home">
                <h3>Trip Detail Page</h3>
               
                <Card style={{ height: '75%' }} className='TripDetailCard' >
                    <Card.Body className='flex-column d-flex'>

                        <Card.Title>{trip.title}</Card.Title>
                        <Card.Img variant="top" src={trip.image_url} class ="image_fluid"/>
                        <Card.Text>Trip Report</Card.Text>
                        <Card.Text>{trip.trip_report} </Card.Text>
                        <Card.Text><a href={trip.map_url} target="_blank" >Map of area</a></Card.Text>






                    </Card.Body>
                </Card>







            </div>
        );
    
} 