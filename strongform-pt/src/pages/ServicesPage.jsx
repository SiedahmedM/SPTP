import React from 'react'
import { Link } from 'react-router-dom'
import CTASecondary from '../components/CTASecondary'
import './ServicesPage.css'

function ServicesPage() {
  const serviceCategories = [
    {
      id: 'assessment',
      title: 'Assessment & Analysis',
      description: 'Comprehensive evaluation to identify root causes and movement dysfunctions',
      icon: '🔍',
      services: [
        'Movement Screening & Analysis',
        'Gait Analysis for Runners',
        'Lift Analysis (Squat, Deadlift, Press)',
        'Sport-Specific Movement Assessment',
        'Biomechanical Evaluation',
        'Injury Risk Assessment'
      ]
    },
    {
      id: 'recovery',
      title: 'Active Recovery',
      description: 'Hands-on treatments and corrective interventions to restore function',
      icon: '🤲',
      services: [
        'Manual Therapy & Joint Mobilization',
        'Dry Needling & Trigger Point Release',
        'Corrective Exercise Programming',
        'Myofascial Release Techniques',
        'Cupping & Instrument-Assisted Soft Tissue',
        'Pain Science Education'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Rehabilitation',
      description: 'Progressive loading and return-to-activity protocols',
      icon: '📈',
      services: [
        'Return-to-Run Progressions',
        'Return-to-Lift Protocols',
        'Strength & Conditioning Programming',
        'Plyometric & Reactive Training',
        'Sport-Specific Conditioning',
        'Load Management Strategies'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Programs',
      description: 'Targeted interventions for specific populations and activities',
      icon: '🎯',
      services: [
        'Running Injury Prevention',
        'Powerlifting & Strength Sports',
        'Post-Surgical Rehabilitation',
        'Athletic Performance Enhancement',
        'Injury Prevention Programs',
        'Movement Quality Optimization'
      ]
    }
  ]

  const specialties = [
    {
      title: 'Running Rehabilitation',
      description: 'Specialized expertise in running-related injuries and performance optimization',
      link: '/services/running-rehab',
      highlight: true
    },
    {
      title: 'Strength Athlete Care',
      description: 'Barbell Rehab Method certified approach to powerlifting and strength sports',
      link: '/services/strength-athlete',
      highlight: true
    },
    {
      title: 'Return to Sport',
      description: 'Comprehensive protocols for getting back to your sport stronger than before',
      link: '/services/return-to-sport',
      highlight: true
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1>Comprehensive <span className="text-copper">Services</span></h1>
          <p className="services-intro">
            Performance-based rehabilitation that gets you back to doing what you love — stronger than before.
          </p>
        </div>
      </section>

      <section className="service-categories section">
        <div className="container">
          <h2 className="section-title">Our Treatment Approach</h2>
          <div className="categories-grid">
            {serviceCategories.map((category) => (
              <div key={category.id} className="category-card" data-category={category.id}>
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
                <ul className="services-list">
                  {category.services.map((service, index) => (
                    <li key={index} className="service-item">
                      <span className="service-bullet">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="specialties section">
        <div className="container">
          <h2 className="section-title">Specialty Programs</h2>
          <p className="section-subtitle">
            Deep expertise in specific populations and training methodologies
          </p>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <Link 
                key={index}
                to={specialty.link}
                className={`specialty-card ${specialty.highlight ? 'featured' : ''}`}
              >
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
                <div className="specialty-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials section">
        <div className="container">
          <h2 className="section-title">Credentials & Expertise</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <h3>Running Rehab Specialist</h3>
              <p>Specialized training in movement analysis and running-specific injury rehabilitation</p>
            </div>
            <div className="credential-card">
              <h3>Barbell Rehab Method Certified</h3>
              <p>Evidence-based approach to strength training and barbell movement rehabilitation</p>
            </div>
            <div className="credential-card">
              <h3>Dry Needling Certified</h3>
              <p>Advanced trigger point therapy and myofascial pain treatment techniques</p>
            </div>
          </div>
        </div>
      </section>

      <CTASecondary 
        title="Ready to Start Your Recovery?"
        subtitle="Every injury is unique. Let's create a personalized plan that gets you back to peak performance."
        buttonText="Schedule Your Evaluation"
        variant="dark"
      />
    </div>
  )
}

export default ServicesPage