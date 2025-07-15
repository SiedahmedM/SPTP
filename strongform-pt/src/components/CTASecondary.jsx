import React from 'react'
import { Link } from 'react-router-dom'
import './CTASecondary.css'

function CTASecondary({ 
  title = "Questions About Your Injury?", 
  subtitle = "Get a quick phone consultation to see if we're the right fit.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  variant = "light" 
}) {
  return (
    <section className={`cta-secondary section ${variant}`}>
      <div className="container">
        <div className="cta-secondary-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <Link to={buttonLink} className="btn btn-secondary cta-secondary-button">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASecondary