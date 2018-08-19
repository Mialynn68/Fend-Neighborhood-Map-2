import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
//import markerIcon from './images/Coffee_1.png'
/*global google*/

		class MyMap extends Component {

			render() {

				const GoogleMapContainer = withGoogleMap(props => (
					<GoogleMap
						role="application"
						defaultCenter={this.props.center}
						zoom= {this.props.zoom}
						onClick={this.props.onMapClick}
						tabIndex='-1'
					>
						{this.props.locations.map(location =>
							<Marker
								key={location.id}
								icon='./images/Coffee_1.png'
								className='marker'
								alt='marker'
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
									className='infowindow'
									maxWidth='350'
									onCloseClick={this.props.handleToggle}
								>
									<div>
										<h3 className='infowindow-heading'>{this.props.selectedPlace.name}</h3>
										<hr className='infowindow-line'/>
										<div className='infowindow-content'>
										{this.props.selectedPlace.location && this.props.selectedPlace.location.address && this.props.selectedPlace.location.city &&
												<span>{this.props.selectedPlace.location.address}, {this.props.selectedPlace.location.city}</span>}
										</div>
										{this.props.selectedPhoto &&
										<img
											className="photo"
											src={this.props.selectedPhoto.prefix + this.props.selectedPhoto.width + 'x' + this.props.selectedPhoto.height + this.props.selectedPhoto.suffix}
											alt={this.props.selectedPlace.name}
										/>}
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
								tabIndex='-1'
								containerElement={<div className='map-container'/>}
								mapElement={<div className='map-element'/>}
							/>
						</div>
					)
				}
		}

		export default MyMap
