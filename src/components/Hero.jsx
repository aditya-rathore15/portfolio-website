import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {/* Main heading with fade-in animation */}
        <h1 className="hero-title">Aditya Rathore</h1>
        
        {/* Subtitle highlighting key credentials */}
        <p className="hero-subtitle">
          MS Computer Science at University of Florida<br/>
          Software Engineer | Distributed Systems Enthusiast
        </p>
        
        {/* Brief value proposition */}
        <p className="hero-description">
          3 years of experience architecting scalable microservices and leading cloud migrations.
          <br/>Passionate about distributed systems, software engineering, and building reliable software.
        </p>
        
        {/* Call-to-action buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#projects" className="btn-secondary">View Projects</a>
        </div>
        
        {/* Social links */}
        <div className="hero-links">
          <a 
            href="https://linkedin.com/in/adityarathore20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <span className="hero-link-divider">|</span>
          <a 
            href="https://github.com/aditya-rathore15" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
          <span className="hero-link-divider">|</span>
          <a 
            href="mailto:rathoreaditya.work@gmail.com"
            className="hero-link"
          >
            Email
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero