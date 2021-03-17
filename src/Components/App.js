import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import CreateTrip from './CreateTrip/CreateTrip';
import TripGallery from './TripGallery/TripGallery';
import Instructions from './Instructions/Instructions';
import TripDetail from './TripDetail/TripDetail';
import EditTrip from './EditTrip/EditTrip';
import GalleryCard from './GalleryCard/GalleryCard';
import { Container, Col, Row } from 'react-bootstrap';



// const apiUrl = 'http://localhost:3000/api/travels'
const apiUrl = "https://travel-report-app-backend.herokuapp.com/api/travels"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      travels: [],
      trip: []
    }
  }

  resetTripMade = () => {
    this.setState({
      tripMade: false
    })
  }

  resetEditMade = () => {
    this.setState({
      editMade: false
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

  editTrip = async (e, id) => {
    e.preventDefault();
    console.log(e)
    let response = await axios.put((`${apiUrl}/${id}`), {
      title: e.target.title.value,
      image_url: e.target.image_url.value,
      map_url: e.target.map_url.value,
      trip_report: e.target.trip_report.value,
    })

    console.log(response);
    this.getTravelGallery();

    console.log(this.state.data)
    this.setState({
      editMade: true
    })
  };

  deleteTrip = (e, id) => {
    e.preventDefault();
    let temp
     = []
    console.log(`${apiUrl}/${id}`)
    axios.delete(`${apiUrl}/${id}`)
      .then((response) => {

        this.getTravelGallery();
      });
    console.log(this.state.data)
  };

  render() {
    console.log("Trip state", this.state)
    return (

      <div className = "App">
        <Container fluid>
          <Row>
            <Col>
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

                <Route path="/EditTrip/:id" component={(routerProps) => (
                  <EditTrip
                    travels={this.state.travels}
                    {...routerProps}
                    getTravelGallery={this.getTravelGallery}
                    editTrip={this.editTrip}
                    editMade={this.state.editMade}
                    resetEditMade={this.resetEditMade}
                  />
                )} ></Route>

                <Route path='/TripGallery' render={(routerProps) => <TripGallery {...this.state}{...routerProps}
                  deleteTrip={this.deleteTrip}
                />
                }>
                </Route>

                <Route path='/GalleryCard' render={(routerProps) => <GalleryCard {...this.state}{...routerProps}
                  deleteTrip={this.deleteTrip}
                />
                }>
                </Route>

                <Route path="/Instructions" component={Instructions} ></Route>

                <Route path="/TripDetail/:id" render={(routerProps) => <TripDetail {...this.state}{...routerProps} />
                }></Route>

              </Switch>

            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default App;
