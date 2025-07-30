import React from 'react'
import './Differentiators.css'

function Differentiators() {
  const steps = [
    {
      number: '1',
      title: '1-on-1 Care',
      description: 'No aides or techs, just focused treatment'
    },
    {
      number: '2',
      title: 'Data-Driven Progress',
      description: 'Objective measures to track your recovery'
    },
    {
      number: '3',
      title: 'Specialized Expertise',
      description: 'Running Rehab | Barbell Rehab Method Certified | Dry Needling'
    }
  ]

  return (
    <section className="differentiators section">
      <div className="container">
        <h2 className="section-title">Ready to Get Back on Track?</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators