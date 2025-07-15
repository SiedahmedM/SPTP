import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Logo.css'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <Logo width={120} height={45} />
          </Link>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </div>
          
          <button className="mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation