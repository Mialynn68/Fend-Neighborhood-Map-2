import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
//import markerIcon from './images/Coffee_1.png'
/*global google*/

		class MyMap extends Component {

			render() {
			//console.log(this.props.selectedPlace)

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
								//icon={markerIcon}
								icon='./images/Coffee_1.png'
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
									maxWidth='400'
									onCloseClick={this.props.handleToggle}
								>
									<div>
										<h3 className='infowindow-heading'>{this.props.selectedPlace.name}</h3>
										<hr/>
										<div className='infowindow-content'>
											{this.props.selectedPlace.location && this.props.selectedPlace.location.address && this.props.selectedPlace.location.city &&
											<p className='infowindow-content-text'>{this.props.selectedPlace.location.address}<br/>{this.props.selectedPlace.location.city}
											</p>
											}
										</div>
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

		//src=' + this.state.fsqData.photos.groups[1].items["0"].prefix + '300x300' + this.state.fsqData.photos.groups[1].items["0"].suffix + '>'
