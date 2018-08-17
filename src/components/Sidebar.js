import React, { Component } from 'react'
import Menu from './Menu'

class Sidebar extends Component {

  render() {
		//console.log(this.state.visible)
    return (
			<div className="sidebar">
				<div className="sidebar-header">
					<div>
						<h1>Coffee Places</h1>
						<h2>in Hamburg HarbourCity</h2>
					</div>
					<div
						id="burger-button"
						onMouseDown={this.props.handleMouseDown}
						>
							<div className="burger"></div>
							<div className="burger"></div>
							<div className="burger"></div>
					</div>
				</div>
				<Menu
					locations={this.props.locations}
					filterLocations={this.props.filterLocations}
					onListitemClick={this.props.onListitemClick}
					isOpen={this.props.isOpen}
					visible={this.props.visible}
				/>
			</div>
    );
  }
}

export default Sidebar;
