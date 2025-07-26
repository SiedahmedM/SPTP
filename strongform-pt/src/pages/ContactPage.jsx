import React, { useState, useEffect } from 'react'
import './ContactPage.css'

function ContactPage() {
  useEffect(() => {
    const handleIFrameMessage = (e) => {
      const clinikoBookings = document.getElementById('cliniko-43670318');
      if (typeof e.data !== 'string') return;
      if (e.data.search('cliniko-bookings-resize') > -1) {
        const height = Number(e.data.split(':')[1]);
        clinikoBookings.style.height = height + 'px';
      }
      e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
    }
    
    window.addEventListener('message', handleIFrameMessage);
    
    return () => {
      window.removeEventListener('message', handleIFrameMessage);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    helpType: ''
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
    setFormData({ name: '', email: '', message: '', helpType: '' })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1>Let's get started.</h1>
          <div className="cliniko-booking">
            <iframe 
              id='cliniko-43670318' 
              src='https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings?embedded=true' 
              frameBorder='0' 
              scrolling='auto' 
              width='100%' 
              height='1000' 
              style={{pointerEvents: 'auto'}}
            ></iframe>
          </div>
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
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="helpType">What are you looking for help with?</label>
                  <select
                    id="helpType"
                    name="helpType"
                    value={formData.helpType}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="running">Running Rehab</option>
                    <option value="strength">Strength Athlete Rehab</option>
                    <option value="sport">Return to Sport</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106344.04521877444!2d-117.83280275!3d33.6846836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbf7a5f5ffff%3A0x0!2sSanta%20Ana%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="info-item">
                <strong>Parking:</strong>
                <p>Free parking available on-site</p>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <p>info@strongformpt.com</p>
              </div>
              <div className="info-item">
                <strong>Phone:</strong>
                <p>(555) 123-4567</p>
              </div>
              <div className="social-icons">
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage