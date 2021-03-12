import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

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
     console.log(this.state.travels)

    return (
      <body>
        <div>
            <h1>Home</h1>
          
        </div>

      </body>
    );
  }
}

export default App;
