import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaStar, FaBrain } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'
import './Hero.css'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Strategy', 'Growth', 'Data', 'Insights']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <FaStar size={14} /> Available for new projects
          </div>

          <h1 className="hero-title">
            Transforming<br />
            <span className="rotating-word">{words[currentWord]}</span><br />
            into Action
          </h1>

          <p className="hero-description">
            Driven by curiosity and a love for problem-solving, I bridge business needs with intelligent, data-backed solutions. I thrive on simplifying tough workflows, enhancing user experiences, and crafting strategies that deliver measurable impact.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="secondary-btn">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>24+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>18+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="hero-card ai-card">
            <FaBrain />
            <div>
              <h4>AI-Powered</h4>
              <p>Analytics</p>
            </div>
          </div>

          <div className="hero-image">
            <img src="/images/hero-image.jpg" alt="Professional Business Analyst" />
          </div>

          <div className="hero-card success-card">
            <div className="success-icon">📈</div>
            <div>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
