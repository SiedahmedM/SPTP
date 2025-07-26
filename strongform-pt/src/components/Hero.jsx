import React from 'react'
import { Link } from 'react-router-dom'
import logoFull from '../assets/strongform-logo-full.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo-wrapper">
              <img src={logoFull} alt="StrongForm Physical Therapy & Performance" className="hero-logo" />
            </div>
            <h1 className="hero-title">
              Rehab That Gets You Back. <span className="text-copper">Stronger.</span>
            </h1>
            <p className="hero-subtext">
              One-on-one physical therapy for runners, lifters, and athletes.
            </p>
            <a 
              href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings" 
              className="btn btn-primary hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Eval
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero