import React from 'react'
import Hero from '../components/Hero'
import WhoWeHelp from '../components/WhoWeHelp'
import ProcessSteps from '../components/ProcessSteps'
import Differentiators from '../components/Differentiators'
import Approach from '../components/Approach'
import ClientWins from '../components/ClientWins'
import InstagramGrid from '../components/InstagramGrid'
import FinalCTA from '../components/FinalCTA'
import CTASecondary from '../components/CTASecondary'

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <WhoWeHelp />
      <ProcessSteps />
      <Differentiators />
      <ClientWins />
      <InstagramGrid />
      <FinalCTA />
    </div>
  )
}

export default HomePage