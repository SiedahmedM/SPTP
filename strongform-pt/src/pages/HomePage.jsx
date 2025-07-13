import React from 'react'
import Hero from '../components/Hero'
import Differentiators from '../components/Differentiators'
import Approach from '../components/Approach'
import ServicesGrid from '../components/ServicesGrid'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Differentiators />
      <Approach />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </div>
  )
}

export default HomePage