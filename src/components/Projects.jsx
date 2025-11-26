import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaChartLine, FaShieldAlt, FaDatabase, FaCog, FaRocket } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const featuredProject = {
    id: 'featured',
    title: 'Tax & Compliance Automation System',
    category: 'FinTech',
    status: 'Live in Production',
    duration: '8 months',
    description: 'Fully automated tax calculation and reporting engine integrating with POS and payment systems to ensure real-time accuracy and compliance.',
    impactLabel: 'Revenue Leakage Reduction',
    tags: ['FinTech', 'Compliance Automation', 'Data Validation', 'Revenue', 'SQL'],
    metrics: [
      { value: '100%', label: 'Automated Tax Calculation' },
      { value: '99.9%', label: 'Accuracy Rate' },
      { value: '50K+', label: 'Transactions/Day' },
      { value: '0', label: 'Manual Errors' }
    ],
    features: [
      { icon: FaCheckCircle, text: 'Real-time POS Integration' },
      { icon: FaShieldAlt, text: 'AI-Driven Validation' },
      { icon: FaDatabase, text: 'Centralized Data Management' },
      { icon: FaCog, text: 'Automated Reporting' }
    ]
  }

  const projects = [
    {
      id: 2,
      title: 'FIRS Tax Direct Portal',
      category: 'FinTech',
      status: 'Live in Production',
      duration: '6 months',
      description: 'National VAT data management platform automating VAT reporting from Payment Service Providers with real-time validation and analytics.',
      impact: '95%',
      impactLabel: 'Data Accuracy',
      tags: ['FinTech', 'VAT Automation', 'API Integration', 'Power BI', 'SQL']
    },
    {
      id: 3,
      title: 'Heartland Workforce Platform',
      category: 'Optimization',
      status: 'Live in Production',
      duration: '8 months',
      description: 'AI-powered emergency restoration workforce management platform with automated dispatch, real-time tracking, and intelligent SOP generation.',
      impact: '60%',
      impactLabel: 'Faster Project Closure',
      tags: ['Workforce Management', 'AI/ML', 'Real-time Tracking', 'Automation']
    },
    {
      id: 4,
      title: 'Customer Segmentation Model',
      category: 'AI/ML',
      status: 'Completed',
      duration: '2 months',
      description: 'Machine learning model for customer segmentation enabling targeted marketing campaigns.',
      impact: '+45%',
      impactLabel: 'Campaign ROI',
      tags: ['Python', 'Machine Learning', 'Clustering', 'Analytics']
    },
    {
      id: 5,
      title: 'Financial Forecasting System',
      category: 'Analytics',
      status: 'Completed',
      duration: '5 months',
      description: 'Predictive analytics system for financial forecasting and budget planning with high accuracy.',
      impact: '95%',
      impactLabel: 'Forecast Accuracy',
      tags: ['Python', 'Time Series', 'Forecasting', 'SQL']
    },
    {
      id: 6,
      title: 'Inventory Management Dashboard',
      category: 'Optimization',
      status: 'Completed',
      duration: '3 months',
      description: 'Real-time inventory tracking and optimization dashboard reducing stockouts and overstock.',
      impact: '-25%',
      impactLabel: 'Inventory Costs',
      tags: ['Power BI', 'SQL', 'Optimization']
    },
    {
      id: 7,
      title: 'Sales Performance Tracker',
      category: 'Analytics',
      status: 'Completed',
      duration: '2 months',
      description: 'Interactive dashboard for tracking sales team performance, targets, and conversion metrics.',
      impact: '+28%',
      impactLabel: 'Sales Growth',
      tags: ['Tableau', 'SQL', 'Analytics']
    }
  ]

  const filters = ['All', 'FinTech', 'Analytics', 'Optimization', 'AI/ML']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-badge">
          <span className="badge-dot">●</span>
          Portfolio
        </div>

        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="section-subtitle">
          Transforming data into actionable insights through innovative solutions
        </p>

        {/* Featured Project Showcase */}
        <div className="featured-project">
          <div className="featured-badge">
            <FaRocket /> Flagship Project
          </div>

          <div className="featured-content">
            <div className="featured-left">
              <div className="featured-meta">
                <span className="status-badge">{featuredProject.status}</span>
                <span className="category-badge">{featuredProject.category}</span>
                <span className="duration">{featuredProject.duration}</span>
              </div>

              <h3 className="featured-title">{featuredProject.title}</h3>

              <p className="featured-description">{featuredProject.description}</p>

              <div className="featured-tags">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="featured-tag">{tag}</span>
                ))}
              </div>

              <div className="featured-features">
                {featuredProject.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <feature.icon className="feature-icon" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="featured-right">
              <div className="metrics-grid">
                {featuredProject.metrics.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>

              <button className="featured-cta" onClick={() => navigate('/case-study/lirs')}>
                View Case Study <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Project Filters */}
        <div className="projects-header">
          <h3 className="projects-section-title">More Projects</h3>
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <span className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-impact-section">
                  <div className="impact-value">{project.impact}</div>
                  <div className="impact-label">{project.impactLabel}</div>
                </div>

                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="tag-more">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="project-footer">
                  <span className="project-duration">{project.duration}</span>
                  <button
                    className="project-link"
                    onClick={() => {
                      if (project.id === 2) navigate('/case-study/firs')
                      if (project.id === 3) navigate('/case-study/heartland')
                    }}
                  >
                    Details <FaArrowRight />
                  </button>
                </div>

                <div className={`project-glow ${hoveredProject === project.id ? 'active' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Section */}
        <div className="view-all-section">
          <button className="view-all-btn">
            View All Projects <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
