import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


		class MyMap extends Component {

			render() {
				const locations = this.props.locations
				const markers

				markers = locations.map((location, i) => {
					const id = location.id
					const lat = location.venue.location.lat
					const lng = location.venue.location.lng
					const name = location.name

					return (
						<Marker
							key= {id}
							position={{lat: lat, lng: lng}}
							onClick={this.props.onMarkerClick}
							>
							{this.props.isOpen &&
								<InfoWindow
									onCloseClick={this.props.handleToggle}
								>
									<h3>{name}</h3>
								</InfoWindow>
							}
							</Marker>
					)
				})

				const Map = withGoogleMap(props =>
					<GoogleMap
						defaultCenter={{lat: 53.166083, lng: 9.918994}}
						defaultZoom={13}
						onMarkerClick={this.props.handleMarkerClick}
					>
						{markers}
					</GoogleMap>
				)

				const mapContainer =
				<Map
					containerElement={<div style={{height: '100vh', width: '80vw'}}/>}
					mapElement={<div style={{height: '100%'}}/>}
				/>

				return (
					<div>
						{mapContainer}
					</div>
				)
			}
		}

		export default MyMap
