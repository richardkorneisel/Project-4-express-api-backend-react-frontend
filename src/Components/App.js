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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      travels: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/api/travels', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        this.setState({
          travels: response.data
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <body>
        <div>
          <header>
            <Header />
          </header>

          <Switch>
            < Route exact path='/' render={(routerProps) =>
              <Homepage {...this.state} {...routerProps} />
            }>
            </Route>
            <Route path="/CreateTrip" component={CreateTrip} />
            < Route path='/TripGallery' render={(routerProps) => <TripGallery {...this.state}{...routerProps} />
            }>
            </Route>

            <Route path="/Instructions" component={Instructions} />
            <Route path="/TripDetail" render={(routerProps) => <TripDetail {...this.state}{...routerProps} />
            }></Route>
          </Switch>
        </div>
      </body>
    );
  }
}

export default App;
