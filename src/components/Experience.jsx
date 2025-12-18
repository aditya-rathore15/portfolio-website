import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">Professional Journey</p>
      
      <div className="experience-container">
        {/* Software Engineer Role */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-company-info">
              <h3 className="experience-company">ZopSmart</h3>
              <p className="experience-role">Software Engineer</p>
              <p className="experience-location">Bengaluru, India</p>
            </div>
            <div className="experience-date">Jul 2022 – Jul 2025</div>
          </div>
          
          <ul className="experience-achievements">
            <li>
              Architected and developed <strong>3 Spring Boot microservices</strong> with 22 REST APIs to migrate 
              product catalog logic, significantly reducing item fallout rates by <strong>65%</strong>
            </li>
            <li>
              Enhanced authentication and authorization using <strong>Spring Security</strong>, ensuring secure 
              access control for all users and achieving <strong>100% compliance</strong> with internal data policies
            </li>
            <li>
              Engineered scalable backend microservices using Spring Boot, leveraging reactive programming 
              paradigms and <strong>Kafka integration</strong> to support enhanced item availability options 
              across the platform
            </li>
            <li>
              Orchestrated the cloud migration of <strong>27 microservices to Azure</strong> from on-premises, 
              boosting infrastructure resilience, optimizing resource management and enabling comprehensive 
              post-migration performance monitoring
            </li>
            <li>
              Led the transition of an application from a monolithic architecture to <strong>7 microservices</strong>, 
              reducing system complexity and improving maintainability
            </li>
            <li>
              Implemented unit tests using <strong>JUnit and Mockito</strong> achieving <strong>90% code coverage</strong> 
              requirement for successful builds and reliable business logic validation
            </li>
            <li>
              Configured <strong>CI/CD pipelines</strong> utilizing GitHub Actions and Docker to support deployment 
              processes across multiple environments
            </li>
          </ul>
        </div>
        
        {/* Software Engineering Intern Role */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-company-info">
              <h3 className="experience-company">ZopSmart</h3>
              <p className="experience-role">Software Engineering Intern</p>
              <p className="experience-location">Bengaluru, India</p>
            </div>
            <div className="experience-date">Jan 2022 – Jul 2022</div>
          </div>
          
          <ul className="experience-achievements">
            <li>
              Spearheaded a <strong>workforce management platform</strong> from the ground up for managing 
              <strong>45+ projects</strong> and <strong>500+ employees</strong>
            </li>
            <li>
              Developed server-side components using <strong>Spring Boot and PostgreSQL</strong>, integrating 
              leave management and <strong>5+ Google Chat webhook automations</strong> for notifications across 
              multiple departments
            </li>
            <li>
              Built responsive <strong>React UI components</strong> integrated with CSS modules and modern JavaScript
            </li>
            <li>
              Containerized the application using <strong>Docker</strong> and orchestrated deployments with 
              <strong>Kubernetes</strong> for resilient environments, enabling effortless scaling to handle 
              a <strong>2x increase in user load</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience