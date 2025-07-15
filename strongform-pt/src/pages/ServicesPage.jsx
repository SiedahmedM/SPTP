import React from 'react'
import CTASecondary from '../components/CTASecondary'
import './ServicesPage.css'

function ServicesPage() {
  const services = [
    {
      id: 'running',
      title: 'Running Rehab',
      subtitle: 'Run Without Setbacks',
      description: 'Ideal for injured runners or those struggling with chronic pain',
      features: [
        'Comprehensive movement screens',
        'Video gait analysis',
        'Custom programming',
        'Return-to-running protocols'
      ],
      ideal: 'Perfect for runners dealing with IT band syndrome, plantar fasciitis, runner\'s knee, or Achilles issues.'
    },
    {
      id: 'sport',
      title: 'Return to Sport',
      subtitle: 'Game-Ready Return',
      description: 'For basketball/field sport athletes post-injury or post-op',
      features: [
        'Isokinetic testing',
        'Sport-specific reloading',
        'Agility and power development',
        'Return-to-play testing'
      ],
      ideal: 'Designed for athletes recovering from ACL tears, ankle sprains, or other sport-related injuries.'
    },
    {
      id: 'strength',
      title: 'Strength Athlete Rehab',
      subtitle: 'Train Through Pain',
      description: 'Built for lifters and gym-goers',
      features: [
        'Movement assessment under load',
        'Modified training programs',
        'Technique refinement',
        'Progressive loading strategies'
      ],
      ideal: 'For lifters dealing with shoulder impingement, low back pain, or mobility restrictions.'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1>How We Can Help</h1>
          <p className="services-intro">
            Performance-based rehab tailored to your sport and goals
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`service-detail section ${index % 2 === 1 ? 'alt-bg' : ''}`}
        >
          <div className="container">
            <div className="service-content">
              <h2>{service.title}</h2>
              <h3 className="service-subtitle">{service.subtitle}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <p className="service-ideal">{service.ideal}</p>
            </div>
          </div>
        </section>
      ))}

      <CTASecondary 
        title="Not Sure Which Service Fits?"
        subtitle="Every injury is different. Let's talk through your specific situation."
        buttonText="Get a Free Consultation"
        variant="dark"
      />

      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Book your evaluation today and start your journey back to peak performance.</p>
            <a href="/contact" className="btn btn-primary">Schedule Your Evaluation</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage