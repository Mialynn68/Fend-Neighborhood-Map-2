import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Sidebar from './components/Sidebar.js'

var foursquare = require('react-foursquare')({
  clientID: '1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1',
  clientSecret: 'DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR'
});

var params = {
  "ll": "53.542913, 9.995835",
	"radius": "500",
	"categoryId": "4bf58dd8d48988d16d941735"
};

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			initialLocations: [],
			locations: [],
			selectedPlace: {},
			//defaultCenter: {lat: 53.166083, lng: 9.918994},
			defaultCenter: {lat: 53.542913, lng: 9.995835},
			center: {},
			defaultZoom: 16,
			zoom: '',
			isOpen: false
		}
	}

	getLocations = () => {
		foursquare.venues.getVenues(params)
			.then(res=> {
				this.setState({initialLocations: res.response.venues})
				this.setState({locations: this.state.initialLocations})
			})
			.catch(res=> {
				alert("Sorry, Foursquare locations could not be loaded")
			})
	}

	/*getLocations = () => {
		fetch('https://api.foursquare.com/v2/venues/search?client_id=1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1&client_secret=DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR&ll=53.542913,9.995835&radius=2000&v=20180810')
  	.then(function(response) {
    return response.json();
  	})
  	.then(function(myJson) {
    //console.log(myJson);
  });
}*/

	componentDidMount () {
		this.getLocations()
		this.setState({center: this.state.defaultCenter})
		this.setState({zoom: this.state.defaultZoom})
	}

	/*filterLocations = (value) => {
		if (value !== 'select' && value !== 'all') {
			const result = this.state.initialLocations.filter(location =>
			location.categories.id === '4bf58dd8d48988d1c7941735')
			this.setState({ locations: result })
		} else {
			this.getLocations()
		}
	}*/

	filterLocations = (query) => {
		if (query) {
		this.setState((prevState, props) => ({
				locations: prevState.locations.filter(location =>
				location.name.toLowerCase().includes(query))
			}))
		} else {
			this.getLocations()
		}
	}

	/*handleToggle () {
		this.state.isOpen &&
		this.setState({isOpen: false})
		this.state.isOpen === false &&
		this.setState({isOpen: true})
	}*/

	onMarkerClick = (props) => {
		this.setState({
			selectedPlace: props,
			position: props.position,
			zoom: 18,
			center: props.location,
			isOpen: true
		})
		//this.handleToggle()
	}

	onListitemClick = (props) => {
		this.setState({
			selectedPlace: props,
			position: props.location,
			zoom: 18,
			center: props.location,
			isOpen: true
		})
		//this.handleToggle()
	}

	onMapClick = (props) => {
			this.setState({
				selectedPlace: {},
				zoom: this.state.defaultZoom,
				center: this.state.defaultCenter,
				isOpen: false
			})
			//this.handleToggle()
	}


  render() {
		console.log(this.state.center)
    return (
      <div className="App">
				<div className="Container">
					<header className="header">
						<h1 className="title">Coffee Places in HafenCity Hamburg</h1>
					</header>
					<div className="main">
						<Sidebar
						 	locations={this.state.locations}
							filterLocations={this.filterLocations}
							onListitemClick={this.onListitemClick}
							isOpen={this.state.isOpen}
						/>
						<Map
							locations={this.state.locations}
							//defaultCenter={this.state.defaultCenter}
							center={this.state.center}
							zoom={this.state.zoom}
							handleToggle={this.handleToggle}
							onMapClick={this.onMapClick}
							onMarkerClick={this.onMarkerClick}
							selectedPlace={this.state.selectedPlace}
							isOpen={this.state.isOpen}
						/>
					</div>
      	</div>
			</div>
    );
	}
}

export default App;
