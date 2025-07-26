import React from 'react'
import './ProcessSteps.css'

function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Assess",
      description: "Full-body screen + movement analysis for your specific sport or lift"
    },
    {
      number: "2", 
      title: "Rebuild",
      description: "Progressive, strength-based rehab tailored to keep you training"
    },
    {
      number: "3",
      title: "Return",
      description: "Performance-focused progression to get you back fully — not just \"cleared\""
    }
  ]

  return (
    <section className="process-steps">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps