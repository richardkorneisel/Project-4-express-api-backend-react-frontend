import React, { Component } from 'react';
import './CreateTrip.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import TripDetails from '../TripDetail/TripDetail';
import TripGallery from '../TripGallery/TripGallery';

export default class CreateTrip extends Component {

    render() {
     console.log(this.props.travels)

     if (this.props.tripMade){
      this.props.resetTripMade()
       return <Redirect to = "/TripGallery"/>

     }

        return (
            <div>
            <h1>Create Trip Report</h1>
           
            <form onSubmit={this.props.createTrip} >
          Trip Title: <input type="text" name="title" placeholder="i.e. Bismark ND" /> <br/>
          Image URL: <input type="text" name="image_url"placeholder="i.e. https://i.imgur.com/g4qSl7y.jpg" /><br/>
          Map URL :<input type="text" name="map_url" placeholder="i.e. https://i.imgur.com/g4qSl7y.jpg" /><br/>
          {/* Trip Report :<textarea input type="text" name="trip_report" >Enter text here...</textarea> <br/> */}
          Trip Report:<input type="text" name="trip_report" placeholder="i.e. I caught a fish here."/><br/>
         <input type="submit" value="Add Trip Report" /><br/>
        </form>
        
            <ul>{this.props.travels.travels}</ul>
            
              
           
          </div>
          
        );
        
    }
}