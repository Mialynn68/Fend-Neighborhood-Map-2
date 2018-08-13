import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'


		class MyMap extends Component {

			render() {
				const Map = withGoogleMap(props => (
					<GoogleMap
						defaultCenter={{lat: 53.166083, lng: 9.918994}}
						defaultZoom={13}
						onMarkerClick={this.props.handleMarkerClick}
					>
					</GoogleMap>
				))

				return (
					<div>
					<Map
						containerElement={<div style={{height: '100vh', width: '80vw'}}/>}
						mapElement={<div style={{height: '100%'}}/>}
					/>
					</div>
				)
			}
		}

		export default MyMap
