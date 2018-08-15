import React, { Component } from 'react'

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//value: 'select',
			query: '',
		}
		this.updateSearch = this.updateSearch.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateSearch(query) {
		this.setState({query: query})
		this.props.filterLocations(query)
	}

	/*handleSubmit(event) {
		event.preventDefault();
		var value = this.state.value;
		this.props.onFilter(value);
	}*/

  render() {
    return (
			<div className="sidebar">
				<div className="search">
					<input
						type="text"
						placeholder="Search Locations"
						value={this.state.query}
						onChange={(event) => this.updateSearch(event.target.value)}
					/>
				</div>
				<div className='locations-list-container'>
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
