import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>STRONGFORM PT</h3>
            <p>Rehab Built for Athletes</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <nav className="footer-nav">
              <Link to="/services#running">Running Rehab</Link>
              <Link to="/services#sport">Return to Sport</Link>
              <Link to="/services#strength">Strength Athlete Rehab</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>(714) 489-1817</p>
            <p>ismaaeel@strongformpt.com</p>
            <p>17811 DAVENPORT RD #46<br />Dallas, TX 75252</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Strongform Physical Therapy & Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer