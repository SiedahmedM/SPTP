import React from 'react'
import CTASecondary from '../components/CTASecondary'
import './ServicesPage.css'

function ServicesPage() {
  const services = [
    {
      id: 'running-rehab',
      title: 'Running Rehab',
      description: 'Gait analysis, run form breakdown, return-to-run progression',
      icon: '🏃‍♂️',
      link: '/services/running-rehab'
    },
    {
      id: 'strength-athlete',
      title: 'Strength Athlete Rehab',
      description: 'Lift analysis (deadlift, squat, press), modify load → fix mechanics',
      icon: '🏋️‍♀️',
      link: '/services/strength-athlete'
    },
    {
      id: 'return-to-sport',
      title: 'Return to Sport',
      description: 'Post-op or acute injury recovery, jump, cut, sprint, reactive drills',
      icon: '⚽',
      link: '/services/return-to-sport'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1>How We Can <span className="text-copper">Help</span></h1>
          <p className="services-intro">
            We don't treat diagnoses. We treat athletes. Choose the path that fits you:
          </p>
        </div>
      </section>

      <section className="services-tiles section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <a 
                key={service.id}
                href={service.link}
                className="service-tile"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASecondary 
        title="Not Sure Which Service Fits?"
        subtitle="Every injury is different. Let's talk through your specific situation."
        buttonText="Get a Free Consultation"
        variant="dark"
      />
    </div>
  )
}

export default ServicesPage