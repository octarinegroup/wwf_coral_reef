import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import logo from './logo.svg';
import './App.css';

import MapContainer from './Containers/MapContainer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand='World Wildlife Fund' left>
          <NavItem href='#'>Welcome!</NavItem>
        </Navbar>
        <MapContainer />
      </div>
    );
  }
}

export default App;
