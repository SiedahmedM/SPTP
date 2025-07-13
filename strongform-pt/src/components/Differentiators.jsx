import React from 'react'
import './Differentiators.css'

function Differentiators() {
  const features = [
    {
      icon: '👤',
      title: 'One-on-One, Hour-Long Sessions',
      description: 'No techs. No handoffs.'
    },
    {
      icon: '🏋️',
      title: 'Gym-Based Rehab',
      description: 'We use barbells, sleds & turf — not just a table.'
    },
    {
      icon: '📈',
      title: 'Progressive, Measurable Plans',
      description: 'See your progress week-to-week.'
    }
  ]

  return (
    <section className="differentiators section">
      <div className="container">
        <h2 className="section-title">What Makes Strongform Different</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators