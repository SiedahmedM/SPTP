import React from 'react'
import './ClientWins.css'

function ClientWins() {
  const testimonials = [
    {
      id: 1,
      quote: "I didn't just get cleared — I came back stronger.",
      author: "Sarah M.",
      type: "Runner"
    },
    {
      id: 2,
      quote: "They let me train through my injury. Total game changer.",
      author: "Mike T.",
      type: "Lifter"
    },
    {
      id: 3,
      quote: "Back to playing soccer at 100%. The rehab was incredible.",
      author: "Alex R.",
      type: "Athlete"
    }
  ]

  return (
    <section className="client-wins section">
      <div className="container">
        <h2 className="section-title">Client Wins</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-mark">"</div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span className="author-type">{testimonial.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientWins