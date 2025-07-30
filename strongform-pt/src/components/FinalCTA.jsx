import React from 'react'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to <span className="text-copper">Move Better?</span></h2>
          <p>Start your journey back to peak performance</p>
          <a 
            href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA