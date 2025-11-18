import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Business <span>analyst</span></h2>
            <p>
              Transforming data into actionable insights. Helping businesses 
              make smarter decisions through comprehensive analysis and 
              strategic planning.
            </p>
            <button className="footer-cta">Open for opportunities</button>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>hello@analyst.com</p>
            <p>+91 (555) 123-4567</p>
            <p>Pune, India</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Business analyst. All rights reserved.</p>
          <p className="footer-credit">
            Crafted with <FaHeart className="heart-icon" /> for impactful solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
