import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaDownload, FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
    const navigate = useNavigate()

    const handleDownload = () => {
        window.print()
    }

    return (
        <div className="resume-page">
            <div className="resume-actions no-print">
                <button onClick={() => navigate('/')} className="back-btn">
                    <FaArrowLeft /> Back to Portfolio
                </button>
                <button onClick={handleDownload} className="download-btn">
                    <FaDownload /> Download PDF
                </button>
            </div>

            <div className="resume-container">
                {/* Header */}
                <header className="resume-header">
                    <h1>SOUVIK</h1>
                    <h2>Business Analyst</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaPhone /> +91 97494 08983
                        </div>
                        <div className="contact-item">
                            <FaEnvelope /> souvikmba16@gmail.com
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="contact-item">
                            <FaGlobe /> <a href="https://www.heysouvikonline.com" target="_blank" rel="noopener noreferrer">www.heysouvikonline.com</a>
                        </div>
                        <div className="contact-item">
                            <FaGithub /> <a href="https://github.com/souvik-me" target="_blank" rel="noopener noreferrer">github.com/souvik-me</a>
                        </div>
                        <div className="contact-item">
                            <FaLinkedin /> <a href="https://linkedin.com/in/souvik-integrationinsights" target="_blank" rel="noopener noreferrer">linkedin.com/in/souvik-integrationinsights</a>
                        </div>
                    </div>
                    <div className="location">
                        <FaMapMarkerAlt /> India
                    </div>
                </header>

                {/* Technical Experience */}
                <section className="resume-section">
                    <h3 className="section-title">Technical Experience</h3>
                    <div className="technical-table">
                        <div className="tech-row">
                            <div className="tech-label">Methodologies:</div>
                            <div className="tech-value">Traditional/Waterfall, Agile/Scrum, Waterfall-Scrum Hybrid</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Project Management:</div>
                            <div className="tech-value">Microsoft PowerPoint, Notion, Jira, Confluence, ClickUp</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Databases:</div>
                            <div className="tech-value">SQL Server, MySQL, Oracle, MongoDB, Firestore</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Operating Systems:</div>
                            <div className="tech-value">Microsoft Windows, Mac OS, Linux</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Reporting Tool:</div>
                            <div className="tech-value">Power BI, MS Excel</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Workflows:</div>
                            <div className="tech-value">Figma, Lucidchart, Visio, Miro</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Test & QA:</div>
                            <div className="tech-value">API Testing (Postman, Swagger), Manual Testing, Automation (Python)</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Cloud & Deployment:</div>
                            <div className="tech-value">Vercel, AWS, Github</div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-label">Documentation:</div>
                            <div className="tech-value">SOPs, SOW, Traceability Matrix, Process Diagrams, Test Scenarios, BRD, FRD, GAP, User Stories</div>
                        </div>
                    </div>
                </section>

                {/* Professional Summary */}
                <section className="resume-section">
                    <h3 className="section-title">Professional Summary</h3>
                    <div className="company-header">
                        <h4>Trigital Technologies Pvt. Ltd. – Hyderabad & Hybrid</h4>
                        <p className="date">Oct 2018 – Present</p>
                    </div>
                    <ul className="summary-list">
                        <li>Results-driven Business Analyst with over 5.5 years of diverse experience spanning SaaS, E-commerce, Retail Tech, Agritech, and Government Technology domains.</li>
                        <li>Proficient in end-to-end business analysis, including requirement elicitation, BRD/FRD preparation, process modeling, UAT planning, and Agile delivery for cross-functional teams.</li>
                        <li>Demonstrated expertise in translating complex business requirements into scalable, data-driven, and cloud-integrated solutions.</li>
                        <li>Skilled in SQL-based data validation, reconciliation, and report generation using Power BI, ensuring decision accuracy and process transparency.</li>
                        <li>Hands-on experience in API testing (Postman, Swagger), manual and automation testing, and workflow automation across web ecosystems.</li>
                        <li>Adept in Agile & Scrum methodologies, facilitating ceremonies such as Sprint Planning, Backlog Grooming, Stand-ups, Reviews, and Retrospectives to enhance delivery efficiency.</li>
                        <li>Strong understanding of business process optimization, inventory and order management workflows, and payment integrations (QuickBooks, Stripe, DocuSign) for SaaS and FinTech platforms.</li>
                        <li>Experienced in authoring SOPs, SOWs, test scenarios, and traceability matrices, ensuring alignment with compliance and audit requirements.</li>
                        <li>Collaborated with multinational teams across the USA, Africa, and Asia to deliver solutions in e-commerce, workforce automation, and tax compliance systems.</li>
                        <li>Proficient with tools including Jira, Confluence, Trello, Asana, Figma, Lucidchart, and Visio for project tracking, UI/UX mapping, and process documentation.</li>
                        <li>Excellent interpersonal, analytical, and communication skills with a proven ability to bridge business, technical, and stakeholder expectations.</li>
                        <li>Recognized for a solution-oriented mindset, effective multitasking, and proactive contribution to process innovation and digital transformation initiatives.</li>
                    </ul>
                </section>

                {/* Key Projects & Responsibilities */}
                <section className="resume-section">
                    <h3 className="section-title">Key Projects & Responsibilities</h3>

                    {/* eParisheva Project */}
                    <div className="project-item">
                        <h4>eParisheva – Super App for Hyperlocal Market</h4>
                        <p className="project-domain">Domain: E-commerce, B2B & B2C Marketplace</p>

                        <div className="project-description-section">
                            <h5>Project Description:</h5>
                            <p>eParisheva is a hyperlocal "Super App" designed to empower small business owners by enabling them to list and sell their products and services online. The platform bridges B2B and B2C commerce, helping local shops, service providers, and consumers interact through a single digital ecosystem.</p>
                        </div>

                        <div className="responsibilities-section">
                            <h5>Responsibilities:</h5>
                            <ul className="achievements">
                                <li>Gathered and analyzed business requirements through stakeholder meetings and market research.</li>
                                <li>Defined KPIs and success metrics to track vendor engagement, order efficiency, and conversion rates.</li>
                                <li>Prepared comprehensive project documentation including BRD, FRD, user stories, and process flows.</li>
                                <li>Collaborated with design, development, and QA teams to ensure seamless sprint execution.</li>
                                <li>Conducted system testing, UAT sessions, and feedback analysis for continuous product improvement.</li>
                                <li>Trained small business owners and local shop vendors on platform usage and digital onboarding.</li>
                                <li>Managed project timelines, change requests, and risk logs to ensure on-time delivery.</li>
                            </ul>
                        </div>
                    </div>

                    {/* LIRS Project */}
                    <div className="project-item">
                        <h4>LIRS (Lagos Internal Revenue Service) – Consumption Tax Automation System</h4>
                        <p className="project-domain">Domain: Government Tech, Taxation, FinTech</p>

                        <div className="project-description-section">
                            <h5>Project Description:</h5>
                            <p>LIRS is a government-led consumption tax automation project for the Lagos region, Nigeria. The system was developed to streamline tax collection by integrating directly with business POS and sales platforms. It automatically captures sales invoices, calculates monthly tax liabilities, and generates payment bills, enabling businesses to make online tax payments securely within the platform.</p>
                        </div>

                        <div className="responsibilities-section">
                            <h5>Responsibilities:</h5>
                            <ul className="achievements">
                                <li>Led requirement elicitation and stakeholder discussions with government officials and technical vendors.</li>
                                <li>Prepared BRD, FRD, use cases, and workflow diagrams aligning business objectives with technical feasibility.</li>
                                <li>Collaborated with the design and development teams for solution architecture and UI/UX review.</li>
                                <li>Performed integration and feasibility analysis with third-party systems such as Oracle, Sage, Microsoft POS, and property management solutions.</li>
                                <li>Conducted GAP analysis, rationalization studies, and system validation under SDLC and HDLC frameworks.</li>
                                <li>Developed and maintained project documentation, including API references, SOPs, and training guides.</li>
                                <li>Designed and executed test cases, UAT sessions, and post-deployment verification for accuracy of tax calculations.</li>
                                <li>Created SQL-based reports for reconciliation, discrepancy detection, and performance monitoring.</li>
                                <li>Coordinated with data and reporting teams to ensure compliance and audit readiness.</li>
                                <li>Supported continuous improvement by maintaining project dashboards and tracking KPIs across modules.</li>
                            </ul>
                        </div>
                    </div>

                    {/* FIRS Project */}
                    <div className="project-item">
                        <h4>FIRS (Federal Inland Revenue Service) – VAT & Payment Automation System</h4>
                        <p className="project-domain">Domain: Government Tech, Taxation, FinTech</p>

                        <div className="project-description-section">
                            <h5>Project Description:</h5>
                            <p>The Federal Inland Revenue Service (FIRS) project focused on automating VAT management and payment reconciliation across Nigeria. The solution integrated with third-party payment service providers and gateways to capture real-time transaction data, calculate applicable VAT, and generate automated VAT invoices and reports. The system was deployed on FIRS's private data center infrastructure to ensure data security and compliance.</p>
                        </div>

                        <div className="responsibilities-section">
                            <h5>Responsibilities:</h5>
                            <ul className="achievements">
                                <li>Coordinated with multiple government and third-party stakeholders to gather business and technical requirements.</li>
                                <li>Authored key project documents including BRD, FRD, bridge flow, and API documentation.</li>
                                <li>Designed system workflows and collaborated with designers to finalize UI/UX components.</li>
                                <li>Created and maintained project plans, sprint backlogs, and status reports for management visibility.</li>
                                <li>Conducted functional testing, UAT, and validation of VAT computation and invoice generation modules.</li>
                                <li>Oversaw solution deployment within the on-premises data center infrastructure.</li>
                                <li>Developed and managed SOPs, training materials, and technical documentation for end users and support teams.</li>
                                <li>Facilitated sprint reviews, stakeholder demos, and feedback sessions to ensure project alignment.</li>
                                <li>Worked closely with backend teams to ensure seamless integration with payment APIs and reconciliation processes.</li>
                            </ul>
                        </div>
                    </div>

                    {/* FastForge.ai Project */}
                    <div className="project-item">
                        <h4>FastForge.ai – AI-Powered E-commerce Platform Builder</h4>
                        <p className="project-domain">Domain: SaaS, E-commerce, AI Automation</p>

                        <div className="project-description-section">
                            <h5>Project Description:</h5>
                            <p>FastForge.ai is a USA-based SaaS platform that empowers users to instantly create AI-generated e-commerce stores, business websites, or personal storefronts using simple natural language prompts. The platform streamlines setup — from store creation and product listing to payment gateway integration, subscription management, and mobile app generation — allowing businesses to go online within minutes through an intelligent AI assistant.</p>
                        </div>

                        <div className="responsibilities-section">
                            <h5>Responsibilities:</h5>
                            <ul className="achievements">
                                <li>Collaborated with the AI engineering team to train and refine the AI assistant for e-commerce site generation and platform management.</li>
                                <li>Defined and documented business logic for modules covering inventory, product catalog, order tracking, and payments.</li>
                                <li>Designed UI/UX workflows and interaction models for the AI-guided website creation experience.</li>
                                <li>Conducted requirement analysis, use case modeling, and data flow mapping for AI-driven responses.</li>
                                <li>Performed functional and AI validation testing to ensure accuracy, consistency, and contextual understanding.</li>
                                <li>Oversaw deployment and integration of the AI engine within the FastForge platform environment.</li>
                                <li>Created technical documentation, user training materials, and API references to support internal and client adoption.</li>
                                <li>Monitored post-launch performance and collaborated on continuous learning and enhancement of AI capabilities.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Heartland Workforce Project */}
                    <div className="project-item">
                        <h4>Heartland Workforce – Emergency Restoration Management Platform</h4>
                        <p className="project-domain">Domain: Workforce Automation, Field Service, SaaS</p>

                        <div className="project-description-section">
                            <h5>Project Description:</h5>
                            <p>Heartland Workforce is a USA-based emergency response and restoration management platform designed to connect customers with certified technicians and partners for flood, fire, and disaster restoration services. The platform supports multiple user interfaces — including Partner, Technician, Admin, and Customer portals — enabling real-time coordination, service tracking, and efficient resource allocation during emergency events.</p>
                        </div>

                        <div className="responsibilities-section">
                            <h5>Responsibilities:</h5>
                            <ul className="achievements">
                                <li>Gathered and analyzed business and functional requirements from stakeholders across multiple user roles.</li>
                                <li>Authored BRD, FRD, TRD, and GAP analysis documentation to define system workflows and technical specifications.</li>
                                <li>Developed project plans, sprint schedules, and task tracking frameworks for timely delivery and transparency.</li>
                                <li>Collaborated with UI/UX design teams to enhance usability and optimize field technician workflows.</li>
                                <li>Worked with development teams to ensure alignment between business logic and technical implementation.</li>
                                <li>Conducted functional, integration, and UAT testing prior to production deployment.</li>
                                <li>Supported deployment activities and coordinated release management.</li>
                                <li>Facilitated cross-functional communication between business users, developers, and project managers to maintain delivery transparency.</li>
                                <li>Contributed to process improvement and system optimization for better response time and service visibility.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="resume-section">
                    <h3 className="section-title">Education</h3>

                    <div className="education-item">
                        <div className="education-header">
                            <div>
                                <h4>MBA – Finance (Minor: Marketing)</h4>
                                <p className="institution">Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal</p>
                            </div>
                            <p className="date">Dec 2016</p>
                        </div>
                    </div>

                    <div className="education-item">
                        <div className="education-header">
                            <div>
                                <h4>Bachelor of Commerce (Finance)</h4>
                                <p className="institution">Vidyasagar University, West Bengal</p>
                            </div>
                            <p className="date">Jan 2014</p>
                        </div>
                    </div>
                </section>

                {/* Certifications & Training */}
                <section className="resume-section">
                    <h3 className="section-title">Certifications & Training</h3>

                    <div className="certification-item">
                        <h4>Summer Internship</h4>
                        <p className="cert-org">Indian Oil Corporation Ltd. (IOCL – Haldia Refinery)</p>
                        <p className="cert-details"><em>Project: Works Contract Management</em></p>
                    </div>

                    <div className="certification-item">
                        <h4>Agile & Scrum Fundamentals</h4>
                        <p className="cert-details">Self-paced Online Learning</p>
                    </div>

                    <div className="certification-item">
                        <h4>SQL for Business Analysts</h4>
                        <p className="cert-details">Self-paced Online Learning</p>
                    </div>

                    <div className="certification-item">
                        <h4>Prompt Engineering</h4>
                        <p className="cert-details">Prompting guide by Google</p>
                    </div>
                </section>

                {/* Community Engagement */}
                <section className="resume-section">
                    <h3 className="section-title">Community Engagement</h3>
                    <p className="community-text">
                        Organized community sessions demonstrating POS system integration for custom reporting, enhancing decision-making for local businesses.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Resume
