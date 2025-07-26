import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import RunningRehabPage from './pages/RunningRehabPage'
import StrengthAthletePage from './pages/StrengthAthletePage'
import ReturnToSportPage from './pages/ReturnToSportPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/running-rehab" element={<RunningRehabPage />} />
            <Route path="/services/strength-athlete" element={<StrengthAthletePage />} />
            <Route path="/services/return-to-sport" element={<ReturnToSportPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App