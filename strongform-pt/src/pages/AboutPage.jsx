import React from 'react'
import './AboutPage.css'

function AboutPage() {
  const values = [
    {
      title: 'One-on-One Always',
      description: 'No handoffs. Full 60-minute care.'
    },
    {
      title: 'Train Through It',
      description: 'Rehab should move, not stall.'
    },
    {
      title: 'Return with Confidence',
      description: 'Measurable return-to-play progressions.'
    }
  ]

  const credentials = [
    'Doctor of Physical Therapy (DPT)',
    'Dry Needling Certified',
    'Running Rehab Specialist',
    'Barbell Rehab Method Certified'
  ]

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1>More Than Just Pain Relief</h1>
          <p className="mission-statement">
            At Strongform PT, we help active people not just recover — but rebuild and return stronger.
          </p>
        </div>
      </section>

      <section className="meet-specialist section">
        <div className="container">
          <div className="specialist-content">
            <div className="specialist-text">
              <h2>Meet the Specialist Behind Strongform</h2>
              <p>
                Hi — I'm [Your Name], a Doctor of Physical Therapy with a passion for helping athletes 
                stay in the game. I built Strongform to provide rehab that is smart, progressive, and 
                built around your performance goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-approach section">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials section">
        <div className="container">
          <h2 className="section-title">Credentials</h2>
          <ul className="credentials-list">
            {credentials.map((credential, index) => (
              <li key={index}>{credential}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutPage