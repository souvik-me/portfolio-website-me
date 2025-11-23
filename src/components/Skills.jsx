import React, { useState, useEffect, useRef } from 'react'
import { FaChartBar, FaChartLine, FaBrain, FaCode, FaLayerGroup, FaUsers } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(new Set())
  const skillsSectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When skills section comes into view, animate all skills
            const skillIds = new Set()
            document.querySelectorAll('.skill-progress').forEach((el, index) => {
              skillIds.add(index)
            })
            setAnimatedSkills(skillIds)
            // Stop observing after animation starts
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
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
    <section id="skills" className="skills" ref={skillsSectionRef}>
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
                        className={`skill-progress ${animatedSkills.size > 0 ? 'animate' : ''}`}
                        style={{ '--skill-level': `${skill.level}%` }}
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

        <div className="tools-section">
          <h3>BUSINESS ANALYSIS TOOLS</h3>
          <div className="tools-grid-skills">
            <div className="tool-card">
              <div className="tool-icon">📊</div>
              <p>Power BI</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📈</div>
              <p>Tableau</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📗</div>
              <p>Excel</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📐</div>
              <p>Visio</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <p>Lucidchart</p>
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3>PROJECT MANAGEMENT TOOLS</h3>
          <div className="tools-grid-skills">
            <div className="tool-card">
              <div className="tool-icon">◆</div>
              <p>Jira</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">⚪</div>
              <p>Asana</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📋</div>
              <p>Trello</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📅</div>
              <p>Monday.com</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">✓</div>
              <p>ClickUp</p>
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3>OTHER TOOLS</h3>
          <div className="tools-grid-skills">
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <p>Figma</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🖼️</div>
              <p>Miro</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📝</div>
              <p>Confluence</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💬</div>
              <p>Slack</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📓</div>
              <p>Notion</p>
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3>AI TOOLS</h3>
          <div className="tools-grid-skills">
            <div className="tool-card">
              <div className="tool-icon">🤖</div>
              <p>ChatGPT</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💻</div>
              <p>GitHub Copilot</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🧠</div>
              <p>Claude</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">✨</div>
              <p>Gemini</p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <p>Midjourney</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
