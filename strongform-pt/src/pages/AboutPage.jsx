import React from 'react'
import CTASecondary from '../components/CTASecondary'
import './AboutPage.css'

function AboutPage() {
  const values = [
    {
      title: '1-on-1 Always',
      description: 'No handoffs. Full 60-minute care.'
    },
    {
      title: 'Train Through It',
      description: 'Rehab should move, not stall.'
    },
    {
      title: 'Return with Confidence',
      description: 'Measurable return-to-play progressions.'
    }
  ]

  const credentials = [
    {
      title: 'Running Rehab Specialist',
      description: 'Specialized training in movement analysis and running-specific injury rehabilitation'
    },
    {
      title: 'Barbell Rehab Method Certification',
      description: 'Evidence-based approach to strength training and barbell movement rehabilitation'
    },
    {
      title: 'Dry Needling',
      description: 'Advanced trigger point therapy and myofascial pain treatment techniques'
    },
    {
      title: 'Doctor of Physical Therapy (DPT)',
      description: 'Comprehensive clinical training in musculoskeletal assessment and treatment'
    }
  ]

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1>More Than Just Pain Relief</h1>
          <p className="mission-statement">
            At Strongform PT, we help active people not just recover — but rebuild and return stronger.
          </p>
        </div>
      </section>

      <section className="meet-specialist section">
        <div className="container">
          <div className="specialist-content">
            <div className="specialist-photo">
              <img src="/placeholder-photo.jpg" alt="Doctor Profile" className="profile-photo" />
            </div>
            <div className="specialist-text">
              <h2>Meet the Specialist Behind Strongform</h2>
              <div className="bio">
                <p>
                  Hi — I'm [Your Name], a Doctor of Physical Therapy with a passion for helping athletes 
                  stay in the game. I built Strongform to provide rehab that is smart, progressive, and 
                  built around your performance goals.
                </p>
                <p>
                  With specialized training in running biomechanics and strength-based rehabilitation, 
                  I combine evidence-based treatment with real-world performance applications. My approach 
                  focuses on not just getting you back to activity, but making you more resilient than before.
                </p>
                <p>
                  When I'm not in the clinic, you'll find me training, running, or working on movement 
                  optimization with athletes of all levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-approach section">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials section">
        <div className="container">
          <h2 className="section-title">Credentials & Expertise</h2>
          <div className="credentials-grid">
            {credentials.map((credential, index) => (
              <div key={index} className="credential-card">
                <h3>{credential.title}</h3>
                <p>{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASecondary 
        title="Ready to Work Together?"
        subtitle="Schedule your evaluation and let's build your comeback plan."
        buttonText="Book Your Evaluation"
        variant="light"
      />
    </div>
  )
}

export default AboutPage