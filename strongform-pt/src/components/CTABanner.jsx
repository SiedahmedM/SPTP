import React from 'react'
import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your Comeback?</h2>
          <p>Book your 1-on-1 performance eval today.</p>
          <a 
            href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings"
            className="btn btn-primary cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTABanner