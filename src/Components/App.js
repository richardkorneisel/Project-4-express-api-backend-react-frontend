import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Create_trip from './Create_trip/Create_trip';
import Trip_Gallery from './Trip_Gallery/Trip_Gallery.js';
import Instructions from './Instructions/Instructions';

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
          <h1>App Page</h1>

          <Route>
            <Header />
            <Homepage/>
            <Create_trip/>
            <Trip_Gallery/>
            <Instructions/>
          </Route>

        </div>
      </body>
    );
  }
}

export default App;
