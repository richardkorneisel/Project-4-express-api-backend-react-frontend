import React, { Component } from 'react';
import './GalleryCard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { ButtonGroup } from 'react-bootstrap';

export default function GalleryCard(props) {

    let details = props.travels
    const value = props.value;
    console.log(props)
    return (
        <div key={value.id}>
            <Card style={{ width: '18rem' }} className='GalleryCard' >
                <Card.Body className='flex-column d-flex'>
                    <Card.Title>{value.title}</Card.Title>
                    <Link to={"/TripDetail/" + value.id} >
                        <Card.Img variant="top" src={value.image_url} />
                    </Link>
                    <ButtonGroup>
                        <Button variant="success" className='button mt-auto'>
                            <Link to={"/EditTrip/" + value.id} className='buttonLink'>Edit Trip</Link>
                        </Button>{' '}
                        <Button key={`button-${value.id}`}
                            id={value.id}
                            //arrayindex={index}
                            onClick={(e) => props.deleteTrip(e, value.id)}
                            variant="success" className='button mt-auto'>
                            <Link className='buttonLink'>Delete</Link>
                        </Button>{' '}
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    )
}