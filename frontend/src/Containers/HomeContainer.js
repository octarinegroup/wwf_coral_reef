import React, { Component } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'

import './HomeContainer.css'
class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class='home-container'>
          <span>
            Coral Reef Data Visualization Demo
          </span>
        </div>
        {/* <div className="home-container-association valign-wrapper">
          In association with <img src="/images/wcs_logo.png" alt="wcs" />
        </div> */}
      </div>
    )
  }
}

export default HomeContainer