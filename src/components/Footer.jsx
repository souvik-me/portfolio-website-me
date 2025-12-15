import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTwitter, FaHeart, FaDownload } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2><span>Business Analyst</span></h2>
            <p>
              Transforming data into actionable insights. Helping businesses
              make smarter decisions through comprehensive analysis and
              strategic planning.
            </p>
            <div className="footer-cta-buttons">
              <button className="footer-cta">Open for opportunities</button>
              <Link to="/resume" className="footer-cta download-btn">
                <FaDownload className="download-icon" />
                View Resume
              </Link>
            </div>
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
            <p>souvikmba16@gmail.com</p>
            <p>+91 9749408983</p>
            <p>Kolkata, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Souvik. All rights reserved.</p>
          <p className="footer-credit">
            Crafted with <FaHeart className="heart-icon" /> for impactful solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
