import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="Container">
					<header className="header">
						<h1 className="title">The Marxen Map</h1>
					</header>
					<div className="main">
        		<Map/>
					</div>
      	</div>
			</div>
    );
  }
}

export default App;
