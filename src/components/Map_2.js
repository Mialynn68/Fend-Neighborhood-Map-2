import React, {Component} from 'react'
import {compose, withProps, withStateHandlers} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

		const MyMapComponent = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
				loadingElement: <div style={{height: '100%'}}/>,
				containerElement: <div style={{height: '100vh', width: '80vw'}}/>,
				mapElement: <div style={{height: '100%'}}/>,
				}),
				withStateHandlers(() => ({
					isOpen: false,
				}), {
					onToggleOpen: ({isOpen}) => () => ({
						isOpen: !isOpen,
					})
				}),
				withScriptjs,
				withGoogleMap
		)(props =>
			<GoogleMap
				defaultCenter={{lat: 53.166083, lng: 9.918994}}
				defaultZoom={13}
				>
						<Marker
							position={{lat: 53.166083, lng: 9.918994}}
							onClick={props.onMarkerClick}
						>
							{props.isOpen && <InfoWindow
								onCloseClick={props.onToggleOpen}
							>
							</InfoWindow>}
						</Marker>
				</GoogleMap>
		)

		class MyMap extends Component {
			state={
				isOpen: true
			}

			componentDidMount() {
				this.showMarker()
			}

			showMarker = () => {
				this.setState({
					isMarkerShown: true
				})
			}

			handleMarkerClick = () => {
				this.setState({
					isMarkerShown: false
				})
				this.showMarker()
			}

			render() {
				return (
					<MyMapComponent
						isMarkerShown={this.state.isMarkerShown}
						onMarkerClick={this.handleMarkerClick}
						isOpen={this.state.isOpen}
					/>
				)
			}
		}

		export default MyMap
