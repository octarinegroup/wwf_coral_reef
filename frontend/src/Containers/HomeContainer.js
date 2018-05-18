import React, { Component } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        Home
      </div>
    )
  }
}

export default HomeContainer