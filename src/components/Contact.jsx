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
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleSubmit = async (e) => {
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
      setLoading(true)
      setErrorMessage('')

      try {
        // EmailJS configuration
        const serviceId = 'service_m5345sj'
        const templateId = 'template_7umnwnq'
        const publicKey = 'Ij14NSM6BS1DS_Uyy'

        // Import EmailJS
        const emailjs = (await import('@emailjs/browser')).default

        // Send email using EmailJS - matching your template parameters
        const templateParams = {
          name: formData.name,        // matches {{name}} in template
          email: formData.email,      // sender's email
          subject: formData.subject,  // matches {{subject}} in template
          massage: formData.message   // matches {{massage}} in template
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey)

        setSubmitted(true)
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } catch (error) {
        console.error('Error sending email:', error)
        setErrorMessage('Failed to send message. Please try again or contact me directly at souvikmba16@gmail.com')
      } finally {
        setLoading(false)
      }
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
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}
            {errorMessage && (
              <div className="error-message-box">
                ✗ {errorMessage}
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
                    placeholder="Your Name"
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
                    placeholder="Your Email"
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

              <button
                type="submit"
                className="primary-btn submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaEnvelope />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
