import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Logo.css'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <Logo width={300} includeText={true} className="hero-logo" />
          <h1 className="hero-title">Rehab That Builds Runners</h1>
          <p className="hero-subtext">
            1-on-1 care for active adults, lifters, and recreational athletes who want to return stronger — not just cleared.
          </p>
          <Link to="/contact" className="btn btn-primary hero-cta">
            Book Your Evaluation
          </Link>
          
          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">👤</div>
              <h3>1-on-1 Rehab</h3>
              <p>Personalized care with a licensed physical therapist.</p>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">🏋️</div>
              <h3>Gym-Based Training</h3>
              <p>Performance focused rehab in an athletic environment.</p>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">📈</div>
              <h3>Running Analysis</h3>
              <p>Detailed assessment to improve your running form</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero