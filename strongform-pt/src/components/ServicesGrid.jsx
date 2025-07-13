import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesGrid.css'

function ServicesGrid() {
  const services = [
    {
      title: 'Run Without Setbacks',
      description: 'Restore stride, power, and rhythm.',
      link: '/services#running'
    },
    {
      title: 'Game-Ready Return',
      description: 'Return with intent and performance.',
      link: '/services#sport'
    },
    {
      title: 'Train Through Pain',
      description: 'Lift and rebuild without losing progress.',
      link: '/services#strength'
    }
  ]

  return (
    <section className="services-grid section">
      <div className="container">
        <h2 className="section-title">How We Can Help</h2>
        <div className="services-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid