import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Rehab Built for Athletes</h1>
          <p className="hero-subtext">
            1-on-1 care for active adults, lifters, and recreational athletes who want to return stronger — not just cleared.
          </p>
          <Link to="/contact" className="btn btn-primary hero-cta">
            Book Your Evaluation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero