import './Education.css'

function Education() {
  return (
    <section id="education" className="section education-section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Academic Background</p>
      
      <div className="education-container">
        {/* University of Florida */}
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-school">University of Florida</h3>
              <p className="education-degree">Master of Science in Computer Science</p>
              <p className="education-location">Gainesville, Florida</p>
            </div>
            <div className="education-date">Aug 2025 – May 2027</div>
          </div>
          
          <div className="education-details">
            <p className="education-label">Relevant Coursework:</p>
            <div className="coursework-tags">
              <span className="tag">Distributed Operating System Principles</span>
              <span className="tag">Advanced Data Structures</span>
              <span className="tag">Introduction to Data Science</span>
            </div>
          </div>
        </div>
        
        {/* JK Lakshmipat University */}
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="education-school">JK Lakshmipat University</h3>
              <p className="education-degree">Bachelor of Technology in Computer Science and Engineering</p>
              <p className="education-gpa">GPA: 8.6/10 </p>
              <p className="education-location">Rajasthan, India</p>
            </div>
            <div className="education-date">Jul 2018 – May 2022</div>
          </div>
          
          <div className="education-details">
            <p className="education-label">Relevant Coursework:</p>
            <div className="coursework-tags">
              <span className="tag">Artificial Intelligence</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Natural Language Processing</span>
              <span className="tag">Software Engineering</span>
              <span className="tag">Database Systems</span>
              <span className="tag">Algorithms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education