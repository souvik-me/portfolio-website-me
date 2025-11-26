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
      title: 'eParisheva – Hyperlocal Marketplace',
      category: 'Marketplace',
      status: 'Live',
      duration: '3 Months',
      description: 'Hyperlocal marketplace for local products & services enabling small business owners to create digital storefronts.',
      impact: '70%',
      impactLabel: 'Merchants Onboarded',
      tags: ['Marketplace', 'Hyperlocal', 'Mobile-first', 'Digitization']
    },
    {
      id: 5,
      title: 'Polimeraas – Fresh Produce System',
      category: 'Inventory & Distribution',
      status: 'Live',
      duration: '3 Months',
      description: 'Inventory management and multistore tracking system for fresh produce distribution, reducing wastage and improving stock accuracy.',
      impact: '35%',
      impactLabel: 'Reduction in Wastage',
      tags: ['Inventory Management', 'Supply Chain', 'Real-time Tracking', 'Distribution']
    },
    {
      id: 6,
      title: 'FastForge.ai – AI Store Builder',
      category: 'SaaS / AI',
      status: 'Live',
      duration: '4-6 months',
      description: 'AI-powered e-commerce platform builder that helps entrepreneurs launch fully functional online stores in minutes using simple text prompts.',
      impact: '10x',
      impactLabel: 'Faster Launch',
      tags: ['AI/ML', 'SaaS', 'E-Commerce', 'Automation']
    },
    {
      id: 7,
      title: 'jalshri.com – Dropshipping Marketplace',
      category: 'E-Commerce',
      status: 'Live',
      duration: '3-4 months',
      description: 'Dropshipping-based organic products marketplace connecting verified suppliers with customers through an automated fulfillment engine.',
      impact: '100%',
      impactLabel: 'Dropshipping Fulfillment',
      tags: ['E-Commerce', 'Dropshipping', 'Organic', 'Automation']
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
                      if (project.id === 4) navigate('/case-study/eparisheva')
                      if (project.id === 5) navigate('/case-study/polimeraas')
                      if (project.id === 6) navigate('/case-study/fastforge')
                      if (project.id === 7) navigate('/case-study/jalshri')
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
