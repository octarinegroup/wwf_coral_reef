import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export const Footer = props => (
  <div className="footer-wrapper">
    <Link to="/" className="valign-wrapper">World Wildlife Fund <img src="/images/wwf_logo.png" alt="wwf" /></Link>
  </div>
)