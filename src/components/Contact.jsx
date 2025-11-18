import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-badge">
          <span>💬</span> Get In Touch
        </div>
        
        <h2 className="section-title text-center">
          Let's Create Something<br />
          <span>Amazing Together</span>
        </h2>
        
        <p className="section-subtitle text-center">
          Have a project in mind? I'd love to hear about it. Let's discuss how I can help bring your ideas to life.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>souvikmba16@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 9749408983</p>
              </div>
            </div>
            
            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Kolkata, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaLinkedin /></a>
                <a href="#" className="social-icon"><FaGithub /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
            
            <div className="availability-card">
              <div className="status-dot"></div>
              <div>
                <h4>Available for Projects</h4>
                <p>Currently accepting new opportunities and collaborations</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Priya Manna" />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" placeholder="priya@example.com" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" />
              </div>
              
              <div className="form-group">
                <label>Your Message</label>
                <textarea 
                  rows="6" 
                  placeholder="Tell me about your project, timeline, and goals..."
                ></textarea>
              </div>
              
              <button type="submit" className="primary-btn submit-btn">
                Send Message <FaEnvelope />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
