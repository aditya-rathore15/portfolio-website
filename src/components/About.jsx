import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Main bio text */}
          <div className="about-text">
            <p className="about-paragraph" style={{ textAlign: "justify" }}>
              I'm a first-year Master's student in Computer Science at the University of Florida, 
              graduating in May 2027. With three years of professional software engineering experience 
              at ZopSmart, I've specialized in building and scaling distributed systems.
            </p>
            
            <p className="about-paragraph" style={{ textAlign: "justify" }}>
              My work has focused on architecting microservices, leading cloud migrations, and 
              optimizing backend performance. I migrated 27 microservices to Azure, reduced API 
              response times by 65%, and transformed monolithic applications into scalable 
              microservice architectures.
            </p>
            
            <p className="about-paragraph" style={{ textAlign: "justify" }}>
              I'm passionate about distributed systems, backend engineering, and building 
              reliable, high-performance software. Currently seeking Summer 2026 internship 
              opportunities to apply my expertise in distributed computing and system design.
            </p>
          </div>
          
          {/* Quick facts cards */}
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3 className="highlight-title">3 Years Experience</h3>
              <p className="highlight-text">Full-stack & distributed systems at ZopSmart</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">☁️</div>
              <h3 className="highlight-title">Cloud Migration Expert</h3>
              <p className="highlight-text">Led 27 microservices to Azure</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3 className="highlight-title">Performance Optimizer</h3>
              <p className="highlight-text">65% reduction in API response times</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About