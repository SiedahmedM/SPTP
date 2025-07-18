import React from 'react'
import { Link } from 'react-router-dom'
import './WhoWeHelp.css'

function WhoWeHelp() {
  const services = [
    {
      id: 'runners',
      title: 'Runners',
      description: 'Recover your stride, train through injury',
      icon: '🏃‍♂️',
      link: '/services/running-rehab'
    },
    {
      id: 'lifters',
      title: 'Lifters',
      description: 'Stay under the bar',
      icon: '🏋️‍♀️',
      link: '/services/strength-athlete'
    },
    {
      id: 'athletes',
      title: 'Athletes',
      description: 'Return to game shape post-op',
      icon: '⚽',
      link: '/services/return-to-sport'
    }
  ]

  return (
    <section className="who-we-help section">
      <div className="container">
        <h2 className="section-title">Who We Help</h2>
        <div className="help-cards">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link} 
              className="help-card"
            >
              <div className="help-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp