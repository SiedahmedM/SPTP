import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePage.css'

function StrengthAthletePage() {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Stay Under the Bar — Even in Rehab</h1>
          <p className="hero-subtitle">Keep training while we fix what's holding you back</p>
        </div>
      </section>

      <section className="service-content section">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>What We Treat</h2>
              <ul className="conditions-list">
                <li>Low back pain during deadlifts or squats</li>
                <li>Hip pinch at the bottom of squats</li>
                <li>Knee pain during squats or lunges</li>
                <li>Shoulder pain during pressing movements</li>
                <li>Elbow pain (tennis elbow, golfer's elbow)</li>
                <li>Wrist pain during front rack position</li>
                <li>SI joint dysfunction</li>
                <li>Post-competition recovery</li>
              </ul>

              <h2>What to Expect</h2>
              <div className="expectation-item">
                <h3>Barbell Movement Analysis</h3>
                <p>We analyze your squat, deadlift, and press technique to identify form breakdowns that may be causing pain or limiting your performance.</p>
              </div>

              <div className="expectation-item">
                <h3>Load Modifications</h3>
                <p>We help you modify your training to work around pain while maintaining your strength. No need to stop lifting entirely.</p>
              </div>

              <div className="expectation-item">
                <h3>Accessory Programming</h3>
                <p>Targeted accessory work to address weak links in your kinetic chain, improving both performance and resilience.</p>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-box">
                <h3>Ready to Lift Pain-Free?</h3>
                <p>Book your strength assessment and get back under the bar.</p>
                <a 
                  href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Strength Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StrengthAthletePage