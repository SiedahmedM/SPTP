import React from 'react'
import CTASecondary from '../components/CTASecondary'
import specialistHeadshot from '../assets/specialist-headshot.png'
import './AboutPage.css'

function AboutPage() {
  const values = [
    {
      title: 'Train Through It',
      description: 'You don\'t need to stop to get better'
    },
    {
      title: 'Individualized Always',
      description: 'No cookie-cutter protocols'
    },
    {
      title: 'Stronger Exit',
      description: 'Rehab is the beginning of your comeback'
    }
  ]


  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1>Mission Statement</h1>
          <p className="mission-statement">
            Strongform was built for people who take training seriously. Rehab shouldn't hold you back — it should build you up.
          </p>
        </div>
      </section>

      <section className="meet-specialist section">
        <div className="container">
          <div className="specialist-content">
            <div className="specialist-photo">
              <img src={specialistHeadshot} alt="Doctor Profile" className="profile-photo" />
            </div>
            <div className="specialist-text">
              <h2>Meet the Specialist</h2>
              <div className="bio">
                <h4>DPT from University of St. Augustine (Dallas)</h4>
                <p>
                  OC-based runner, podcast listener, movement nerd, food explorer
                </p>
                <blockquote>
                  "I built Strongform to give athletes rehab that respects their goals."
                </blockquote>
                <p>
                  With specialized training in running biomechanics and strength-based rehabilitation, 
                  I combine evidence-based treatment with real-world performance applications. My approach 
                  focuses on not just getting you back to activity, but making you more resilient than before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-approach section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
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