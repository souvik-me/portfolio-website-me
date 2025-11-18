import React from 'react'
import { FaChartBar, FaChartLine, FaBrain, FaCode, FaLayerGroup, FaUsers } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillsData = [
    {
      category: 'Data Analysis',
      icon: <FaChartBar />,
      skills: [
        { name: 'SQL & Database Design', level: 95 },
        { name: 'Python & R', level: 88 },
        { name: 'Statistical Analysis', level: 90 },
        { name: 'Excel Advanced', level: 92 }
      ]
    },
    {
      category: 'Visualization',
      icon: <FaChartLine />,
      skills: [
        { name: 'Power BI', level: 93 },
        { name: 'Tableau', level: 87 },
        { name: 'Data Studio', level: 85 },
        { name: 'Dashboard Design', level: 90 }
      ]
    },
    {
      category: 'Business Intelligence',
      icon: <FaBrain />,
      skills: [
        { name: 'Requirements Gathering', level: 94 },
        { name: 'Process Modeling', level: 89 },
        { name: 'KPI Development', level: 91 },
        { name: 'Gap Analysis', level: 88 }
      ]
    },
    {
      category: 'Technical Skills',
      icon: <FaCode />,
      skills: [
        { name: 'APIs & Integration', level: 82 },
        { name: 'ETL Processes', level: 86 },
        { name: 'Cloud Platforms', level: 80 },
        { name: 'Version Control', level: 85 }
      ]
    },
    {
      category: 'Project Management',
      icon: <FaLayerGroup />,
      skills: [
        { name: 'Agile & Scrum', level: 92 },
        { name: 'JIRA & Confluence', level: 90 },
        { name: 'Risk Management', level: 87 },
        { name: 'Sprint Planning', level: 89 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: <FaUsers />,
      skills: [
        { name: 'Stakeholder Communication', level: 96 },
        { name: 'Presentation Skills', level: 93 },
        { name: 'Team Collaboration', level: 94 },
        { name: 'Problem Solving', level: 95 }
      ]
    }
  ]

  const certifications = [
    'PMI-PBA Certified',
    'CBAP - IIBA',
    'Agile Certified Practitioner',
    'Data Science Specialization',
    'AWS Cloud Practitioner'
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-badge">
          <span>💡</span> Expertise & Skills
        </div>
        
        <h2 className="section-title text-center">
          My Skill Arsenal
        </h2>
        
        <p className="section-subtitle text-center">
          A comprehensive toolkit honed through years of experience and continuous learning
        </p>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.category}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-badge">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
