import React, { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with email service or backend here
    alert('Thank you for your message! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1>Ready to Start?</h1>
          <p>Book online or send a quick message below.</p>
          <a 
            href="https://janeapp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary booking-btn"
          >
            Book Online
          </a>
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-content">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">What are you looking for help with? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <strong>Phone:</strong>
                <p>(555) 123-4567</p>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <p>info@strongformpt.com</p>
              </div>
              <div className="info-item">
                <strong>Address:</strong>
                <p>123 Performance Way<br />Athletic City, ST 12345</p>
              </div>
              <div className="info-item">
                <strong>Hours:</strong>
                <p>Monday - Friday: 7:00 AM - 7:00 PM<br />
                Saturday: 8:00 AM - 2:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage