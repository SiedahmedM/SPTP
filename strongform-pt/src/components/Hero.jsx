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
          <h1 className="hero-title">
            Rehab That Gets You Back. <span className="text-copper">Stronger.</span>
          </h1>
          <p className="hero-subtext">
            One-on-one physical therapy for runners, lifters, and athletes.
          </p>
          <a 
            href="https://YOUR_CLINIKO_URL" 
            className="btn btn-primary hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Eval
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero