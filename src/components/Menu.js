import React, { Component } from 'react'

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
		}
		this.updateSearch = this.updateSearch.bind(this);
	}

	updateSearch(query) {
		this.setState({query: query})
		this.props.filterLocations(query)
	}

	// sidebar toggling basics from https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

	render () {
		//console.log(this.props.visible)
		var visibility = 'hide';
		if (this.props.visible) {
			visibility= 'show';
		}

		return (
			<div
				id="menu"
				className={visibility}
			>
				<div className="sidebar-search">
					<input
						type="text"
						placeholder="Search Locations"
						value={this.state.query}
						onChange={(event) => this.updateSearch(event.target.value)}
					/>
				</div>
				<div className='sidebar-flex-scroll'>
					<ul className="locations-list">
						{this.props.locations.map((location) => (
							<li key={location.id}>
								<a
								onClick={(e) => this.props.onListitemClick(location)}
								//onMouseDown={this.props.handleMouseDown}
								>{location.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Menu;
