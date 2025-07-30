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
              <img src={specialistHeadshot} alt="Dr. Ismaeel Zekeria" className="profile-photo" />
            </div>
            <div className="specialist-text">
              <h2>Meet the Specialist</h2>
              <div className="bio">
                <h4>Dr. Ismaeel Zekeria, PT, DPT</h4>
                <h4>Physical Therapist & Coach</h4>
                <p>Running Rehab Specialist | Barbell Rehab (BRM) Certified</p>
                <p>
                  Ismaeel earned his Bachelor's degree from California State University, Long Beach and 
                  his Doctorate of Physical Therapy from the University of St. Augustine. His experience 
                  ranges from everyday movers to endurance athletes, with a special focus on runners 
                  and active professionals looking to get out of pain and back to doing what they love. 
                  His clinical approach is rooted in performance-based rehab, movement analysis, and 
                  strength training principles. He founded Strongform Physical Therapy & Performance on 
                  the belief that rehab should be individualized, progressive, and empowering—not passive 
                  or cookie-cutter. Ismaeel values precision, transparency, and educating his clients so 
                  they understand the "why" behind their plan of care. When he's not in the clinic, you 
                  can find him training, trying out new restaurants, or yelling at the TV during a good 
                  fight night.
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