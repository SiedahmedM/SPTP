import React from 'react'
import { Link } from 'react-router-dom'
import './ServicePage.css'

function RunningRehabPage() {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container">
          <h1>Rehab That Respects the Runner</h1>
          <p className="hero-subtitle">Get back to running stronger than before</p>
        </div>
      </section>

      <section className="service-content section">
        <div className="container">
          <div className="service-details">
            <div className="service-main">
              <h2>What We Treat</h2>
              <ul className="conditions-list">
                <li>Shin splints</li>
                <li>Plantar fasciitis</li>
                <li>Runner's knee (patellofemoral pain)</li>
                <li>IT band syndrome</li>
                <li>Achilles tendinopathy</li>
                <li>Hip pain and impingement</li>
                <li>Stress fractures</li>
                <li>Post-marathon recovery</li>
              </ul>

              <h2>What to Expect</h2>
              <div className="expectation-item">
                <h3>Comprehensive Gait Analysis</h3>
                <p>We analyze your running form using video analysis to identify movement patterns that may be contributing to your pain or limiting your performance.</p>
              </div>

              <div className="expectation-item">
                <h3>Movement Correction</h3>
                <p>Through targeted exercises and drills, we help you develop more efficient running mechanics that reduce stress on injured tissues.</p>
              </div>

              <div className="expectation-item">
                <h3>Return-to-Run Plan</h3>
                <p>We create a personalized progression plan that gets you back to your target mileage safely, incorporating strength work and mobility to prevent re-injury.</p>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="cta-box">
                <h3>Ready to Run Pain-Free?</h3>
                <p>Book your running evaluation and get back on the road.</p>
                <a 
                  href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Running Eval
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RunningRehabPage