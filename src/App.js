import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'

var foursquare = require('react-foursquare')({
  clientID: '1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1',
  clientSecret: 'DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR'
});

var params = {
  "ll": "53.166083, 9.918994",
	"radius": "6000",
	"categoryId": "4bf58dd8d48988d16d941735,4d4b7105d754a06374d81259"
};

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			locations: [],
			isOpen: false
		}
	}

	getLocations = () => {
		foursquare.venues.getVenues(params)
			.then(res=> {
				this.setState({ locations: res.response.venues })
			})
			.catch(res=> {
				alert("error")
			})
	}

	componentDidMount () {
		this.getLocations()
	}

	handleToggle () {
		this.state.isOpen === false ?
		this.setState({isOpen: true}) : this.setState({isOpen: false})
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			//activeMarker: marker,
			position: props.position,
		})
		this.handleToggle()
	}

	onMapClick = (props) => {
			this.setState({
				selectedPlace: {}
			})
			this.handleToggle()
		}


  render() {
		//console.log(this.state.locations)
    return (
      <div className="App">
				<div className="Container">
					<header className="header">
						<h1 className="title">The Marxen Map</h1>
					</header>
					<div className="main">
						<Map
							locations={this.state.locations}
							handleToggle={this.handleToggle}
							onMapClick={this.onMapClick}
							onMarkerClick={this.onMarkerClick}
							isOpen={this.state.isOpen}
						/>
					</div>
      	</div>
			</div>
    );
	}
}

export default App;
