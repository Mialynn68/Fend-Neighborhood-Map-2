import React, {Component} from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
/*global google*/

		class MyMap extends Component {

			render() {

				const GoogleMapExample = withGoogleMap(props => (
					<GoogleMap
					defaultCenter={this.props.defaultCenter}
					//center={this.props.center}
					//defaultZoom={this.props.defaultZoom}
					zoom= {this.props.zoom}
					onClick={this.props.onMapClick}
					>
						{this.props.locations.map(location =>
							<Marker
								key={location.id}
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

		//src=' + this.state.fsqData.photos.groups[1].items["0"].prefix + '300x300' + this.state.fsqData.photos.groups[1].items["0"].suffix + '>'
