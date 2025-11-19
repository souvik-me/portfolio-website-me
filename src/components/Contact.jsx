import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

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
            <a href="mailto:souvikmba16@gmail.com" className="info-card">
              <div className="icon-wrapper">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>souvikmba16@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+919749408983" className="info-card">
              <div className="icon-wrapper">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 9749408983</p>
              </div>
            </a>
            
            <div className="info-card">
              <div className="icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Kolkata, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/souvik-integrationinsights/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/souvik-me" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
                <a href="https://x.com/AtomicreactX" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter"><FaTwitter /></a>
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
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Priya Manna"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label>Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6" 
                  placeholder="Tell me about your project, timeline, and goals..."
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
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
