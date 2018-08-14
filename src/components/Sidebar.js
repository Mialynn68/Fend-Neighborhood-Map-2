import React, { Component } from 'react';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'select',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		var value = this.state.value;
		this.props.onFilter(value);
	}

  render() {
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
				{/*<div>
        { this.props.venues.map(item=> { return <div key={item.id}>{item.name}</div>}) }
			</div>*/}
			</div>
    );
  }
}

export default Sidebar;
