import React, { Component } from 'react'
import Menu from './Menu'

class Sidebar extends Component {

	/*constructor(props, context) {
		super(props, context);
		this.state = {
			visible: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
	}

	handleMouseDown(e) {
		this.toggleMenu()
		console.log('clicked')
		e.stopPropagation()
	}

	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		})
	}*/


  render() {
		//console.log(this.state.visible)
    return (
			<div
				className="sidebar"

				>
				<div className="sidebar-header">
					<h1>Coffee Places</h1>
					<h2>in Hamburg HarbourCity</h2>
					<button
						id="burger-button"
						onMouseDown={this.props.handleMouseDown}
						>
					</button>
				</div>
				<Menu
					locations={this.props.locations}
					filterLocations={this.props.filterLocations}
					onListitemClick={this.props.onListitemClick}
					isOpen={this.props.isOpen}
					//handleMouseDown={this.props.handleMouseDown}
					visible={this.props.visible}
				/>
			</div>
    );
  }
}

/*render() {
	return (
		<div className="sidebar">
			<form onSubmit={this.handleSubmit}>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="select" disabled>Search Within Locations</option>
					<option value="4bf58dd8d48988d10d941735">Restaurants</option>
					<option value="4d4b7105d754a06374d81259">Cafés</option>
					<option value="all">Show All</option>
				</select>
				<input type="submit" value="Submit" />
			</form>
			<ul className="locations">
				{this.props.locations.map((location) => (
					<li
						key={location.id}
						//onClick={this.props.onListitemClick}
						onClick={(e) => this.props.onListitemClick(location)}
						>{location.name}
					</li>
				))}
			</ul>
		</div>
	);
}
}*/

export default Sidebar;
