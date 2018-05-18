import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <Link to="/" class="brand-logo">World Wildlife Fund</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/map"><i class="material-icons right">map</i> Map</Link></li>
        </ul>
      </div>
    </nav>
  )
}