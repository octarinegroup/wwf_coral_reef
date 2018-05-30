import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey lighten-1">
          <a href="https://www.worldwildlife.org/" target="_blank" className="brand-logo left"><img src="/images/wwf_logo.png" alt="WWF" /></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/map"><i class="material-icons right">map</i>View Map</Link></li>
        </ul>
      </div>
    </nav>
  )
}