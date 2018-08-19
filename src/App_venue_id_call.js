import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Sidebar from './components/Sidebar.js'

/*var foursquare = require('react-foursquare')({
  clientID: '1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1',
  clientSecret: 'DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR'
});

var params = {
  "ll": "53.542913, 9.995835",
	"radius": "500",
	"categoryId": "4bf58dd8d48988d16d941735"
};*/

class App extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			initialLocations: [],
			locations: [],
			selectedPlace: {},
			defaultCenter: {lat: 53.542913, lng: 9.995835},
			center: {},
			defaultZoom: 15,
			zoom: '',
			isOpen: false,
			visible: false,
			selectedPhoto: {}
		}
		this.initialLocations = []

		this.filterLocations = this.filterLocations.bind(this);
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onListitemClick = this.onListitemClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.selectPhoto = this.selectPhoto.bind(this);
	}

	/*getLocations = () => {
		foursquare.venues.getVenues(params)
			.then(res=> {
				this.setState({initialLocations: res.response.venues})
				this.setState({locations: this.state.initialLocations})
			})
			.catch(res=> {
				alert("Sorry, Foursquare locations could not be loaded")
			})
	}*/

	getLocations = () => {

		var locationIds = [
			"4df85cc1d4c02ad734186f0f",
			"59899441c4df1d5dfaf41117",
			"4be5739e910020a172f2d214",
			"4df49bc145dd4e2693449325",
			"4bbb2ad57421a5939f79c440",
			"516ac74ae4b07e9c195d9969",
			"5b54919b95d986002c5b0014",
			"534d1113498ea58ddf403ea9",
			"4b0cf017f964a520b04223e3",
			"4b9f712bf964a520e62237e3",
			"4d0c8a76e0b98cfa88cfd593",
			"4b4f0966f964a52008f926e3",
			"4e170eacaeb7e76b4f2375d7"
		]

		locationIds.map(id => {
			//console.log(id)
			fetch('https://api.foursquare.com/v2/venues/'+id+'?client_id=1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1&client_secret=DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR&v=20180810')
	  	.then(response => response.json())
	  	.then(result =>
				this.onSetResult(result, id));
		//console.log(this.initialLocations)
		})
		this.setState({
			initialLocations: this.initialLocations
		})
	}

	onSetResult = (result, key) => {
		//console.log(key)
		//localStorage.setItem(key, JSON.stringify(result))
		this.initialLocations.push(result)
		console.log(this.initialLocations)
	}

	/*"4df85cc1d4c02ad734186f0f",
	"59899441c4df1d5dfaf41117",
	"4be5739e910020a172f2d214",
	"4df49bc145dd4e2693449325",
	"4bbb2ad57421a5939f79c440",
	"516ac74ae4b07e9c195d9969",
	"5b54919b95d986002c5b0014",
	"534d1113498ea58ddf403ea9",
	"4b0cf017f964a520b04223e3",
	"4b9f712bf964a520e62237e3",
	"4d0c8a76e0b98cfa88cfd593",
	"4b4f0966f964a52008f926e3",
	"4e170eacaeb7e76b4f2375d7"*/

	componentDidMount () {
		this.getLocations()
		this.setState({center: this.state.defaultCenter})
		this.setState({zoom: this.state.defaultZoom})
	}

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

	selectPhoto = (location) => {
		//console.log(location)
		var foursquareId = location.id;
		fetch('https://api.foursquare.com/v2/venues/' + foursquareId +'?client_id=1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1&client_secret=DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR&v=20180810')
	.then((response) => {
		return response.json()
		console.log(response.json);
	})
	.then((responseJson) => {
		var selectedPhoto = responseJson.response.venue.bestPhoto;
		console.log(selectedPhoto);
		this.setState({selectedPhoto: selectedPhoto})
	})
	}

	onMarkerClick = (props) => {
		this.setState({
			selectedPlace: props,
			position: props.position,
			zoom: 17,
			center: props.location,
			isOpen: true
		})
		//this.handleToggle()
	}

	onListitemClick = (props, e) => {
		this.setState({
			selectedPlace: props,
			position: props.location,
			zoom: 17,
			center: props.location,
			isOpen: true
		})
		this.toggleMenu()
		this.selectPhoto(props)
		//console.log('clicked')
		//e.stopPropagation()
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

	handleMouseDown(e) {
		this.toggleMenu()
		console.log('clicked')
		//e.stopPropagation()
	}

	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		})
	}

  render() {
		//console.log(this.state.initialLocations)
    return (
      <div className="App">
				<div className="container">
					{/*<header className="header">
						<h1 className="title">Coffee Places in HafenCity Hamburg</h1>
					</header>*/}
					<div className="main">
						<Sidebar
						 	locations={this.state.locations}
							filterLocations={this.filterLocations}
							onListitemClick={this.onListitemClick}
							handleMouseDown={this.handleMouseDown}
							toggleMenu={this.toggleMenu}
							isOpen={this.state.isOpen}
							visible={this.state.visible}
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
							selectedPhoto={this.state.selectedPhoto}
						/>
					</div>
      	</div>
			</div>
    );
	}
}

export default App;