import React from 'react'
import { FaArrowLeft, FaCheckCircle, FaChartLine, FaShieldAlt, FaRocket, FaUsers, FaDatabase, FaCog } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { caseStudyData } from '../data/caseStudyData'
import './CaseStudy.css'

const CaseStudy = () => {
    const navigate = useNavigate()
    const { projectId } = useParams()

    // Get the case study data based on projectId
    const data = caseStudyData[projectId]

    // Fallback if invalid projectId
    if (!data) {
        return (
            <div className="case-study">
                <section className="case-study-hero">
                    <div className="case-study-container">
                        <button className="back-button" onClick={() => navigate('/')}>
                            <FaArrowLeft /> Back to Projects
                        </button>
                        <h1 className="hero-title">Case Study Not Found</h1>
                        <p className="hero-subtitle">The requested case study does not exist.</p>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="case-study">
            {/* Hero Section */}
            <section className="case-study-hero">
                <div className="case-study-container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <FaArrowLeft /> Back to Projects
                    </button>

                    <div className="hero-badge">
                        <FaRocket /> Success Story
                    </div>

                    <h1 className="hero-title">
                        {data.heroTitle}
                        <span className="highlight"> {data.heroHighlight}</span>
                    </h1>

                    <p className="hero-subtitle">
                        {data.heroSubtitle}
                    </p>

                    <div className="hero-tags">
                        {data.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="metrics-section">
                <div className="case-study-container">
                    <h2 className="section-title">Impact at a Glance</h2>
                    <div className="metrics-grid">
                        {data.metrics.map((metric, index) => (
                            <div key={index} className="metric-card">
                                <metric.icon className="metric-icon" />
                                <div className="metric-value">{metric.value}</div>
                                <div className="metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Background */}
            <section className="content-section">
                <div className="case-study-container">
                    <div className="content-header">
                        <data.clientBackground.icon className="section-icon" />
                        <h2>{data.clientBackground.title}</h2>
                    </div>
                    <div className="content-body">
                        {data.clientBackground.content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Background */}
            <section className="content-section alt-bg">
                <div className="case-study-container">
                    <div className="content-header">
                        <data.projectBackground.icon className="section-icon" />
                        <h2>{data.projectBackground.title}</h2>
                    </div>
                    <div className="content-body">
                        {data.projectBackground.content.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                        {data.projectBackground.features && data.projectBackground.features.length > 0 && (
                            <ul className="feature-list">
                                {data.projectBackground.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}
                        {data.projectBackground.conclusion && (
                            <p dangerouslySetInnerHTML={{ __html: data.projectBackground.conclusion }} />
                        )}
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="content-section">
                <div className="case-study-container">
                    <div className="content-header">
                        <FaShieldAlt className="section-icon" />
                        <h2>Challenges</h2>
                    </div>
                    <div className="content-body">
                        <p>
                            Before the {data.heroTitle} {data.heroHighlight} was implemented, several operational and compliance challenges existed:
                        </p>
                        <div className="challenges-grid">
                            {data.challenges.map((challenge, index) => (
                                <div key={index} className="challenge-card">
                                    <div className="challenge-number">{index + 1}</div>
                                    <p>{challenge}</p>
                                </div>
                            ))}
                        </div>
                        <p className="highlight-text">
                            These issues resulted in revenue leakage, low compliance visibility, and slow policy response.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="content-section alt-bg">
                <div className="case-study-container">
                    <div className="content-header">
                        <FaCog className="section-icon" />
                        <h2>Solution</h2>
                    </div>
                    <div className="content-body">
                        <p>
                            To overcome these challenges, the <strong>{data.heroTitle} {data.heroHighlight}</strong> was developed — a comprehensive,
                            multi-tiered digital platform that automated the entire tax lifecycle.
                        </p>
                        <h3 className="subsection-title">Core Solution Components:</h3>
                        <div className="solutions-grid">
                            {data.solutions.map((solution, index) => (
                                <div key={index} className="solution-card">
                                    <div className="solution-header">
                                        <div className="solution-number">{index + 1}</div>
                                        <h4>{solution.title}</h4>
                                    </div>
                                    <p>{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits - Comparison Table */}
            <section className="content-section">
                <div className="case-study-container">
                    <div className="content-header">
                        <FaChartLine className="section-icon" />
                        <h2>Benefits & Impact</h2>
                    </div>
                    <div className="content-body">
                        <p>
                            The implementation of the {data.heroTitle} {data.heroHighlight} has transformed the tax ecosystem,
                            delivering both operational and financial improvements.
                        </p>
                        <div className="comparison-table">
                            <div className="table-header">
                                <div className="table-cell">Impact Area</div>
                                <div className="table-cell">Before Implementation</div>
                                <div className="table-cell">After Implementation</div>
                                <div className="table-cell">Improvement</div>
                            </div>
                            {data.comparisonData.map((row, index) => (
                                <div key={index} className="table-row">
                                    <div className="table-cell"><strong>{row.aspect}</strong></div>
                                    <div className="table-cell">{row.before}</div>
                                    <div className="table-cell">{row.after}</div>
                                    <div className="table-cell improvement">{row.improvement}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="content-section conclusion-section">
                <div className="case-study-container">
                    <div className="content-header">
                        <FaCheckCircle className="section-icon" />
                        <h2>Conclusion</h2>
                    </div>
                    <div className="content-body">
                        <p dangerouslySetInnerHTML={{ __html: data.conclusion.intro }} />
                        <div className="conclusion-highlights">
                            <h3>Key Achievements:</h3>
                            <ul className="feature-list">
                                {data.conclusion.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        <p>{data.conclusion.impact}</p>
                        <p className="final-statement" dangerouslySetInnerHTML={{ __html: data.conclusion.finalStatement }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudy
