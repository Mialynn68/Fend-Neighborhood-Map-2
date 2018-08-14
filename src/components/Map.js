import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


		class MyMap extends Component {

			render() {

				const GoogleMapExample = withGoogleMap(props => (
					<GoogleMap
					defaultCenter={{lat: 53.166083, lng: 9.918994}}
					defaultZoom={13}
					onMarkerClick={this.props.handleMarkerClick}
					>
						{this.props.locations.map(location =>
							<Marker
								key={location.id}
								onClick={this.props.onMarkerClick}
								position={location.location}
								title={location.name}
								name={location.name}
								//animation={location.name === this.props.selectedPlace.name ?
									//this.props.google.maps.Animation.BOUNCE : null}
							>
							{this.props.isOpen &&
								<InfoWindow
									onCloseClick={this.props.handleToggle}
								>
									<h3>{location.name}</h3>
								</InfoWindow>
							}
							</Marker>
						)}
					</GoogleMap>
				))

					return (
						<div className='map'>
							<GoogleMapExample
								containerElement={<div style={{height: '100vh', width: '80vw', position: 'absolute', right: '0'}}/>}
								mapElement={<div style={{height: '100%'}}/>}
							/>
						</div>
					)
				}
		}

		export default MyMap
