import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePage.css'

function ReturnToSportPage() {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Back on the Field. Confidently.</h1>
          <p className="hero-subtitle">Evidence-based return to sport testing and progression</p>
        </div>
      </section>

      <section className="service-content section">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>What We Treat</h2>
              <ul className="conditions-list">
                <li>Post-op ACL reconstruction</li>
                <li>Ankle sprains and chronic instability</li>
                <li>Shoulder dislocations and labral repairs</li>
                <li>Meniscus repairs</li>
                <li>Hip labral repairs</li>
                <li>Concussion recovery</li>
                <li>Post-fracture rehabilitation</li>
                <li>Sport-specific injury prevention</li>
              </ul>

              <h2>What to Expect</h2>
              <div className="expectation-item">
                <h3>Objective Testing</h3>
                <p>We use jump testing, cutting analysis, and reactive drills to ensure you're truly ready to return to sport, not just pain-free.</p>
              </div>

              <div className="expectation-item">
                <h3>Sport-Specific Drills</h3>
                <p>Progressive exposure to the movements and demands of your sport, building confidence alongside physical readiness.</p>
              </div>

              <div className="expectation-item">
                <h3>Return-to-Play Metrics</h3>
                <p>Clear, objective criteria for return to sport based on current research and your specific sport demands.</p>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-box">
                <h3>Ready to Get Back in the Game?</h3>
                <p>Book your return to sport evaluation today.</p>
                <a 
                  href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Return Eval
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReturnToSportPage