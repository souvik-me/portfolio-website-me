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
        { name: 'SQL & Mongo DB', level: 95 },
        { name: 'Python', level: 88 },
        { name: 'Statistical Analysis', level: 90 },
        { name: 'Excel', level: 92 }
      ]
    },
    {
      category: 'Visualization',
      icon: <FaChartLine />,
      skills: [
        { name: 'Power BI', level: 93 },
        { name: 'Excel', level: 92 },
        { name: 'BPMN', level: 85 },
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
        { name: 'Manual & Automation Testing', level: 86 },
        { name: 'Cloud Platforms', level: 80 },
        { name: 'Git', level: 85 }
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

        {/* <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-badge">
                {cert}
              </div>
            ))}
          </div>
        </div> */}

        <div className="tools-section">
          <h3>Tools I'm Using</h3>
          <div className="tools-grid-skills">
            {/* Business Analysis Tools */}
            <div className="tool-card">
              <p>Power BI</p>
            </div>
            <div className="tool-card">
              <p>Tableau</p>
            </div>
            <div className="tool-card">
              <p>Excel</p>
            </div>
            <div className="tool-card">
              <p>Visio</p>
            </div>
            <div className="tool-card">
              <p>Lucidchart</p>
            </div>

            {/* Project Management Tools */}
            <div className="tool-card">
              <p>Jira</p>
            </div>
            <div className="tool-card">
              <p>Asana</p>
            </div>
            <div className="tool-card">
              <p>Trello</p>
            </div>
            <div className="tool-card">
              <p>Monday.com</p>
            </div>
            <div className="tool-card">
              <p>ClickUp</p>
            </div>

            {/* Other Tools */}
            <div className="tool-card">
              <p>Figma</p>
            </div>
            <div className="tool-card">
              <p>Miro</p>
            </div>
            <div className="tool-card">
              <p>Confluence</p>
            </div>
            <div className="tool-card">
              <p>Slack</p>
            </div>
            <div className="tool-card">
              <p>Notion</p>
            </div>

            {/* AI Tools */}
            <div className="tool-card">
              <p>ChatGPT</p>
            </div>
            <div className="tool-card">
              <p>GitHub Copilot</p>
            </div>
            <div className="tool-card">
              <p>Claude</p>
            </div>
            <div className="tool-card">
              <p>Gemini</p>
            </div>
            <div className="tool-card">
              <p>Midjourney</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
