import React from 'react'
import './Approach.css'

function Approach() {
  const steps = [
    {
      number: '1',
      title: 'Assess',
      description: 'Full-body screen, movement analysis, isokinetic testing'
    },
    {
      number: '2',
      title: 'Rebuild',
      description: 'Strength/mobility plan tailored to your sport'
    },
    {
      number: '3',
      title: 'Return',
      description: 'Measurable progress, return-to-play plan'
    }
  ]

  return (
    <section className="approach section">
      <div className="container">
        <h2 className="section-title">Our 3-Step Approach</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach