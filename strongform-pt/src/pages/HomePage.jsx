import React from 'react'
import Hero from '../components/Hero'
import Differentiators from '../components/Differentiators'
import Approach from '../components/Approach'
import ServicesGrid from '../components/ServicesGrid'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import CTASecondary from '../components/CTASecondary'

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Differentiators />
      <CTASecondary 
        title="Have Questions About Your Injury?"
        subtitle="We're here to help you understand your options before you commit."
        buttonText="Ask a Question"
        variant="light"
      />
      <Approach />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </div>
  )
}

export default HomePage