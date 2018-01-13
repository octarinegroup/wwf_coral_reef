import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarExample from './Components/SidebarExample'
import VectorLayersExample from './Components/VectorLayersExample'
import BenthicMap from './Components/BenthicMap'


class App extends Component {
  render() {
    return (
      <BenthicMap />
    );
  }
}

export default App;
