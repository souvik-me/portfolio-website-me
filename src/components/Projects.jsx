import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const projects = [
    {
      id: 1,
      title: 'Revenue Analytics Dashboard',
      category: 'Analytics',
      duration: '3 months',
      image: '/src/assets/images/project1.jpg',
      description: 'Comprehensive Power BI dashboard tracking revenue metrics and KPIs',
      impact: '+35%',
      tags: ['Power BI', 'SQL', 'Python']
    },
    {
      id: 2,
      title: 'Supply Chain Optimization',
      category: 'Optimization',
      duration: '4 months',
      image: '/src/assets/images/project2.jpg',
      description: 'End-to-end analysis and redesign of supply chain processes, reducing costs',
      impact: '-30%',
      tags: ['Process Mining', 'Tableau', 'Optimization']
    },
    {
      id: 3,
      title: 'Customer Journey Analytics',
      category: 'Intelligence',
      duration: '2 months',
      image: '/src/assets/images/project3.jpg',
      description: 'Deep-dive analysis of customer behavior patterns across touchpoints',
      impact: '+42%',
      tags: ['Google Analytics', 'Python', 'ML']
    },
    {
      id: 4,
      title: 'Predictive Churn Model',
      category: 'Analytics',
      duration: '5 months',
      image: '/src/assets/images/project4.jpg',
      description: 'Machine learning model predicting customer churn with 88% accuracy',
      impact: '-23%',
      tags: ['Python', 'Machine Learning', 'R']
    },
    {
      id: 5,
      title: 'Digital Transformation Initiative',
      category: 'Optimization',
      duration: '8 months',
      image: '/src/assets/images/project5.jpg',
      description: 'Led enterprise-wide digital transformation, modernizing legacy systems',
      impact: '+55%',
      tags: ['Agile', 'Change Management', 'JIRA']
    },
    {
      id: 6,
      title: 'Real-time KPI Dashboard',
      category: 'Intelligence',
      duration: '3 months',
      image: '/src/assets/images/project6.jpg',
      description: 'Interactive real-time dashboard providing executive-level insights',
      impact: '+28%',
      tags: ['Power BI', 'Real-time', 'API Integration']
    }
  ]

  const filters = ['All Projects', 'Analytics', 'Optimization', 'Business Intelligence']

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-badge">
          <span>●</span> Featured Work
        </div>
        
        <h2 className="section-title text-center">
          Projects That Made <span>Impact</span>
        </h2>
        
        <p className="section-subtitle text-center">
          Real-world solutions delivering measurable business results
        </p>
        
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
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-impact">{project.impact}</div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-btn">
          <button className="primary-btn">
            View All Projects <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
