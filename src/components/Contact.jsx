import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Let's connect and discuss opportunities</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
            I'm actively seeking <strong>Summer 2026 internship opportunities</strong> in software engineering, 
            distributed systems, and backend development. Feel free to reach out for collaborations, 
            opportunities, or just to connect!
          </p>
          
          <div className="contact-methods">
            {/* Email */}
            <a href="mailto:rathoreaditya.work@gmail.com" className="contact-card">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3 className="contact-method">Email</h3>
                <p className="contact-value">rathoreaditya.work@gmail.com</p>
              </div>
            </a>
            
            {/* Phone */}
            <a href="tel:+13527454436" className="contact-card">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3 className="contact-method">Phone</h3>
                <p className="contact-value">(352) 745-4436</p>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/adityarathore20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3 className="contact-method">LinkedIn</h3>
                <p className="contact-value">linkedin.com/in/adityarathore20</p>
              </div>
            </a>
            
            {/* GitHub
            <a 
              href="https://github.com/aditya-rathore15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h3 className="contact-method">GitHub</h3>
                <p className="contact-value">github.com/aditya-rathore15</p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2025 Aditya Rathore. Built with React + Vite.
        </p>
      </footer>
    </section>
  )
}

export default Contact