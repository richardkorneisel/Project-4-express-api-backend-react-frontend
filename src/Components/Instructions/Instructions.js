import React, { Component } from 'react';
import './Instructions.css';

export default class Instructions extends Component {

    render() {
        return (
            <div className="home">
                <h3>Instructions</h3>
                <h6>Our App allows you to share the details of a trip on the internet.</h6>
                <h6>There are some things we are not able to do at this time though such as host pictures on our App.</h6>
                <h6>We do allow a place for the user to input a URL address for an image hosted on a hosting sight, this allows the user to display an image along with their written description of their trip.</h6> <h6>An example of an image hosting service/website would be Imgur.</h6> 
                <h6><a href="https://imgur.com/" target="_blank">Imgur.com</a></h6>
                <h6>Once you create a free account Imgur provides a direct link to your image and that link can be copied and pasted into our "Image URL" field.</h6>
                <h6>Google Maps also provides a link to share on their web service from which a link can be copied and pasted into the "Map URL" field in the same way.</h6>
            </div>
        );
    }
}