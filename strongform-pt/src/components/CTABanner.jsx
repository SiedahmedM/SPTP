import React from 'react'
import { Link } from 'react-router-dom'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your Comeback?</h2>
          <p>Book your 1-on-1 performance eval today.</p>
          <Link to="/contact" className="btn btn-primary cta-button">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTABanner