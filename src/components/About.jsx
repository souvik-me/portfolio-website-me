import React from 'react'
import { FaCheckCircle, FaBolt, FaUsers, FaAward } from 'react-icons/fa'
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
            Building Bridges Between<br />
            <span>Data & Decisions</span>
          </h2>
          
          <p className="about-text">
            I'm passionate about uncovering hidden patterns in data and translating 
            them into strategies that create real business value.
          </p>
          
          <p className="about-text">
            With over 5 years of experience in business analysis, I've helped 
            organizations across various industries transform their operations through 
            data-driven insights and strategic planning.
          </p>
          
          <p className="about-text">
            My approach combines technical expertise with strong communication skills, 
            ensuring that complex data becomes actionable intelligence for stakeholders 
            at all levels.
          </p>
          
          <div className="core-competencies">
            <h3>CORE COMPETENCIES</h3>
            <div className="competencies-grid">
              <div className="competency-item">
                <FaCheckCircle /> Requirements Engineering
              </div>
              <div className="competency-item">
                <FaCheckCircle /> Data Visualization
              </div>
              <div className="competency-item">
                <FaCheckCircle /> Agile Methodologies
              </div>
              <div className="competency-item">
                <FaCheckCircle /> SQL & Python
              </div>
              <div className="competency-item">
                <FaCheckCircle /> Business Intelligence
              </div>
              <div className="competency-item">
                <FaCheckCircle /> Process Modeling
              </div>
            </div>
          </div>
          
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
                <h4>Certified Professional</h4>
                <p>PMI-PBA & CBAP certified</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <img src="/src/assets/images/about-image.jpg" alt="Workspace" />
          <div className="about-quote">
            <p>"The best analysis is one that drives action, not just insight."</p>
            <span>— My Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
