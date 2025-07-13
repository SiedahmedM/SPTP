import React from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      quote: "I didn't just get cleared — I came back stronger.",
      author: "J.W., recreational hooper"
    },
    {
      quote: "Strongform got me running pain-free. The plan actually made sense.",
      author: "E.L., half-marathoner"
    },
    {
      quote: "I thought I had to stop lifting. Strongform kept me training through rehab.",
      author: "M.R., strength athlete"
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Clients Are Saying</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials