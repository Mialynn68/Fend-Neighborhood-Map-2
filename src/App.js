import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import Sidebar from './components/Sidebar.js'

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
			initialLocations: [],
			locations: [],
			selectedPlace: {},
			defaultCenter: {lat: 53.166083, lng: 9.918994},
			center: {},
			defaultZoom: 12,
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
				alert("error")
			})
	}

	componentDidMount () {
		this.getLocations()
		this.setState({center: this.state.defaultCenter})
		this.setState({zoom: this.state.defaultZoom})
	}

	filterLocations = (value) => {
		if (value !== 'select' && value !== 'all') {
			const result = this.state.initialLocations.filter(location =>
			location.categories.id === '4bf58dd8d48988d1c7941735');
			this.setState({ locations: result })
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
			zoom: 15,
			center: props.location,
			isOpen: true
		})
		//this.handleToggle()
	}

	onListitemClick = (props) => {
		this.setState({
			selectedPlace: props,
			position: props.location,
			zoom: 15,
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
		//console.log(this.state.locations)
    return (
      <div className="App">
				<div className="Container">
					<header className="header">
						<h1 className="title">The Marxen Map</h1>
					</header>
					<div className="main">
						<Sidebar
						 	locations={this.state.locations}
							onFilter={this.filterLocations}
							onListitemClick={this.onListitemClick}
							isOpen={this.state.isOpen}
						/>
						<Map
							locations={this.state.locations}
							defaultCenter={this.state.defaultCenter}
							//center={this.state.center}
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
