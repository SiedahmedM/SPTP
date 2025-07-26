import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoFull from '../assets/strongform-logo-full.png'
import './Hero.css'

function Hero() {
  const canvasRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles = []
    const particleCount = 50
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(210, 105, 30, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles
      particles.forEach((particle, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.strokeStyle = `rgba(210, 105, 30, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    })
  }

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-overlay">
        <div className="container">
          <div 
            className="hero-content"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div 
              className="hero-logo-wrapper"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="logo-glow"></div>
              <img 
                src={logoFull} 
                alt="StrongForm Physical Therapy & Performance" 
                className={`hero-logo ${isHovered ? 'logo-float' : ''}`}
              />
            </div>
            <h1 className="hero-title">
              <span className="title-word">Rehab</span> 
              <span className="title-word">That</span> 
              <span className="title-word">Gets</span> 
              <span className="title-word">You</span> 
              <span className="title-word">Back.</span> 
              <span className="title-word text-copper">Stronger.</span>
            </h1>
            <p className="hero-subtext">
              One-on-one physical therapy for runners, lifters, and athletes.
            </p>
            <div className="hero-cta-wrapper">
              <a 
                href="https://strongform-physical-therapy-and-performance.ca1.cliniko.com/bookings" 
                className="btn btn-primary hero-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-text">Book Your Eval</span>
                <div className="btn-shine"></div>
              </a>
              <div className="pulse-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero