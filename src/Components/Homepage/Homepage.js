import React, { Component } from 'react';
import './Homepage.css';
import Container from 'react-bootstrap/Container';

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

            
        );
    }
}