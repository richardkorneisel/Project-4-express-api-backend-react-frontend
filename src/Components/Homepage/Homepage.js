import React, { Component } from 'react';
import './Homepage.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';

export default class Homepage extends Component {

    render() {
        return (
            <div className="homeImage">
               <div className="home">
                <h3>Homepage</h3>
                </div>
            </div>

            /* <Jumbotron fluid>
                <Container>
                    <Image className = "homeImage" src = 'https://i.imgur.com/iKoYp02.jpg' fluid/>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron> */
        );
    }
}