import React from 'react'
import { Link } from 'react-router-dom'
import './WhoWeHelp.css'

function WhoWeHelp() {
  const services = [
    {
      id: 'runners',
      title: 'Runners',
      description: 'Recover your stride, train through injury',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/running-rehab'
    },
    {
      id: 'lifters',
      title: 'Lifters',
      description: 'Stay under the bar',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/strength-athlete'
    },
    {
      id: 'athletes',
      title: 'Athletes',
      description: 'Return to game shape post-op',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
              <div className="help-image-wrapper">
                <img src={service.image} alt={service.title} className="help-image" />
                <div className="help-overlay"></div>
              </div>
              <div className="help-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="help-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp