import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
//import markerIcon from './images/Coffee_1.png'
/*global google*/

		class MyMap extends Component {

			/*constructor(props) {
				super(props);
				this.state = {
					selectedPhoto: {}
				}
				this.selectPhoto = this.selectPhoto.bind(this);
			}

		/*selectPhoto(location) {
			var foursquareId = location.id;
			fetch('https://api.foursquare.com/v2/venues/' + foursquareId +'?client_id=1EUBQBYMRHC4IKAOA3CW2NBLYXHIIBA3I0N10LJMO5BDPWA1&client_secret=DUSYNTNDPRLWODFDI04J1OIBWLD0REWOMUXBH1040V3MT0YR&v=20180810')
			.then(function(response) {
	    return response.json();
	  	})
	  	.then(function(responseJson) {
			var selectedPhoto = responseJson.response.venue.bestPhoto;
			console.log(selectedPhoto);
			this.setState({selectedPhoto: selectedPhoto})
	  });
	}*/


			render() {
				console.log(this.props.selectedPhoto);
				//console.log(this.state.selectedPhoto.prefix + this.state.selectedPhoto.width + 'x' + this.state.selectedPhoto.height + this.state.selectedPhoto.suffix)

				const GoogleMapContainer = withGoogleMap(props => (
					<GoogleMap
						role="application"
						defaultCenter={this.props.center}
						zoom= {this.props.zoom}
						onClick={this.props.onMapClick}
					>
						{this.props.locations.map(location =>
							<Marker
								key={location.id}
								icon='./images/Coffee_1.png'
								className='marker'
								alt='marker'
								tabIndex='0'
								onKeyDown={e => e.keyCode !== 13 || e.target.click()}
								onClick={(e) => this.props.onMarkerClick(location)}
								position={location.location}
								title={location.name}
								name={location.name}
								defaultAnimation={location.name === this.props.selectedPlace.name ?
									google.maps.Animation.BOUNCE : null}
							>
							{this.props.isOpen && location.id === this.props.selectedPlace.id &&
								<InfoWindow
									//position
									className='infowindow'
									onCloseClick={this.props.handleToggle}
								>
									<div>
										<h3 className='infowindow-heading'>{this.props.selectedPlace.name}</h3>
										<hr/>
										<div className='infowindow-content'>
											{this.props.selectedPlace.location && this.props.selectedPlace.location.address && this.props.selectedPlace.location.city &&
											<p
												className='infowindow-content-text'>{this.props.selectedPlace.location.address}<br/>{this.props.selectedPlace.location.city}
											</p>
											}
										</div>
										{/*<img
											src={this.props.selectedPhoto.prefix + this.props.selectedPhoto.width + 'x' + this.props.selectedPhoto.height + this.props.selectedPhoto.suffix}
											width="300px"
											height="200px"
										/>*/}
									</div>
								</InfoWindow>
							}
							</Marker>
						)}
					</GoogleMap>
				))


					return (
						<div className='map'>
							<GoogleMapContainer
								containerElement={<div className='map-container'/>}
								mapElement={<div className='map-element'/>}
							/>
						</div>
					)
				}
		}

		export default MyMap

		//src={response.venue.bestPhoto.prefix + response.venue.bestPhoto.width + 'x' + response.venue.bestPhoto.height + response.venue.bestPhoto.suffix}

		//src=' + this.state.fsqData.photos.groups[1].items["0"].prefix + '300x300' + this.state.fsqData.photos.groups[1].items["0"].suffix + '>'

	/*<img src="" height="300px" width="300px"/>
		<img
			src={this.state.selectedPhoto.prefix + this.state.selectedPhoto.width + 'x' + this.state.selectedPhoto.height + this.state.selectedPhoto.suffix}
			width="300px"
			height="200px"
		/>*/
