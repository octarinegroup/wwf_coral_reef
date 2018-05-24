import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper darknav">
        <Link to="/" class="brand-logo">World Wildlife Fund</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/map"><i class="material-icons right">map</i>View Map</Link></li>
        </ul>
      </div>
    </nav>
  )
}