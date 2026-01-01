import React from 'react'
import { FaCheckCircle, FaBolt, FaUsers, FaAward, FaHospital, FaShoppingCart, FaLaptopCode, FaIndustry, FaBriefcase } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="section-badge">
            <span>●</span> About Me
          </div>

          <h2 className="section-title">
            <span>Building Bridges Between<br />
              Data & Decisions</span>
          </h2>

          <p className="about-text">
            I'm passionate about uncovering hidden patterns in data and translating
            them into strategies that create real business value.
          </p>

          <p className="about-text">
            With over 6 years of experience in business analysis, I've helped
            organizations across various industries transform their operations through
            data-driven insights and strategic planning.
          </p>

          <p className="about-text">
            My approach combines technical expertise with strong communication skills,
            ensuring that complex data becomes actionable intelligence for stakeholders
            at all levels.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <FaBolt />
              <div>
                <h4>Strategic Analysis</h4>
                <p>Data-driven insights for business decisions</p>
              </div>
            </div>
            <div className="feature-card">
              <FaUsers />
              <div>
                <h4>Process Optimization</h4>
                <p>Streamlining operations for efficiency</p>
              </div>
            </div>
            <div className="feature-card">
              <FaUsers />
              <div>
                <h4>Stakeholder Management</h4>
                <p>Bridging technical and business teams</p>
              </div>
            </div>
            <div className="feature-card">
              <FaAward />
              <div>
                <h4>Third-Party Integration Expert</h4>
                <p>PG, POS, CRM, & external platforms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="/images/about-image.jpg" alt="Workspace" />
          <div className="about-quote">
            <p>"Don’t wait for problems to surface- anticipate them, identify the root cause, and resolve them before they escalate."</p>
            <span>— My Philosophy</span>
          </div>
        </div>
      </div>

      <div className="domains-section">
        <h3>DOMAINS I'VE WORKED ON</h3>
        <div className="domains-grid">
          <div className="domain-card">
            <div className="domain-icon">
              <FaHospital />
            </div>
            <p>Healthcare</p>
          </div>
          <div className="domain-card">
            <div className="domain-icon">
              <FaShoppingCart />
            </div>
            <p>Retail & E-commerce</p>
          </div>
          <div className="domain-card">
            <div className="domain-icon">
              <FaLaptopCode />
            </div>
            <p>Technology</p>
          </div>
          <div className="domain-card">
            <div className="domain-icon">
              <FaIndustry />
            </div>
            <p>Manufacturing</p>
          </div>
          <div className="domain-card">
            <div className="domain-icon">
              <FaBriefcase />
            </div>
            <p>Consulting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
