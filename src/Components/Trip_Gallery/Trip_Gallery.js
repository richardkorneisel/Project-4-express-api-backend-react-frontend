import React, { Component } from 'react';
import './Trip_Gallery.css';
import Trip_Detail from '../Trip_Detail/Trip_Detail';

export default class Trip_Gallery extends Component {

    render() {
        return (
            <div className="home">
                <h3>Trip Gallery Page</h3>
                <Trip_Detail/>
            </div>
        );
    }
}