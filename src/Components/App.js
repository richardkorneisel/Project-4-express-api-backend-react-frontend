import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import CreateTrip from './CreateTrip/CreateTrip';
import TripGallery from './TripGallery/TripGallery';
import Instructions from './Instructions/Instructions';
import TripDetail from './TripDetail/TripDetail';
const apiUrl = 'http://localhost:3000/api/travels'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      travels: [],
      trip: []
    }
  }
  resetTripMade=()=>{
    this.setState({
      tripMade: false
    })
  }

  getTravelGallery = () => {
    axios.get(apiUrl, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        this.setState({
          travels: response.data.travels
        })
      })
  }

  componentDidMount() {
    this.getTravelGallery()
  }

  createTrip = async (e) => {
    e.preventDefault();
    let tempArray = []
    let response = await axios.post(`${apiUrl}`, {
      title: e.target.title.value,
      image_url: e.target.image_url.value,
      map_url: e.target.map_url.value,
      trip_report: e.target.trip_report.value,

    })
       
        console.log(response);
        this.getTravelGallery();
        
    console.log(this.state.data)
    this.setState({
      tripMade: true
    })

  };

  deleteTrip = (e, id) => {
    e.preventDefault();
    let tempArray = []
    console.log(`${apiUrl}/${id}`)
    axios.delete(`${apiUrl}/${id}`)
      .then((response) => {

        this.getTravelGallery();

      });
    console.log(this.state.data)
  };


  render() {
    console.log(this.state)
    return (
      <body>
        <div>
          <header>
            <Header />
          </header>

          <Switch>
            <Route exact path='/' render={(routerProps) =>
              <Homepage {...this.state} {...routerProps} />
            }>
            </Route>
            <Route path="/CreateTrip" component={() => (
              <CreateTrip
                travels={this.state.travels}
                createTrip={this.createTrip}
                tripMade={this.state.tripMade}
                resetTripMade={this.resetTripMade}
              />
            )} ></Route>

            <Route path='/TripGallery' render={(routerProps) => <TripGallery {...this.state}{...routerProps}
              deleteTrip={this.deleteTrip}
              
            />
            }>
            </Route>

            <Route path="/Instructions" component={Instructions} ></Route>

            <Route path="/TripDetail/:id" render={(routerProps) => <TripDetail {...this.state}{...routerProps} />
            }></Route>

          </Switch>
        </div>
      </body>
    );
  }
}

export default App;
