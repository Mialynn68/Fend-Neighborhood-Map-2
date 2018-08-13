import React from 'react'
import {compose, withProps} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


		const MyMapComponent = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
				loadingElement: <div style={{height: '100%'}}/>,
				containerElement: <div style={{height: '100vh', width: '80vw'}}/>,
				mapElement: <div style={{height: '100%'}}/>,
				}),
				withScriptjs,
				withGoogleMap
		)((props) =>
			<GoogleMap
				defaultCenter={{lat: 53.166083, lng: 9.918994}}
				defaultZoom={13}
				>
					{props.isMarkerShown &&
						<Marker
							position={{lat: 53.166083, lng: 9.918994}}
							onClick={props.onMarkerClick}
						/>
					}
				</GoogleMap>
		)

		class MyMap extends React.PureComponent {
			state={
				isMarkerShown: false,
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
					/>
				)
			}
		}

		export default MyMap
