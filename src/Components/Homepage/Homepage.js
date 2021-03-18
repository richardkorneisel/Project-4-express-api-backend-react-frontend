import React, { Component } from 'react';
import './Homepage.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';

export default class Homepage extends Component {

    render() {
        return (
            <Container className="homeImage">
                <div className="home">
                    <div className="welcome">
                        <h3>Welcome to the Travel Report App</h3>
                        <h6>A great place to read about the travel destinations you want to go and post about the memorable places you have been.</h6>
                    </div>
                </div>
            </Container>

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