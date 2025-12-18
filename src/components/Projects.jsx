import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Parallel Computing Optimization",
      date: "Aug 2025",
      description: "Designed distributed actor-based system achieving 7.4x CPU parallelization across multi-core architecture. Optimized mathematical algorithms for consecutive square summation achieving millisecond level efficiency.",
      technologies: ["Gleam", "Actor Model", "Parallel Computing"],
      highlights: [
        "7.4x CPU parallelization across multi-core architecture",
        "Millisecond-level efficiency in mathematical computations",
        "Near-optimal resource utilization through systematic performance tuning"
      ]
    },
    {
      title: "Named Entity Recognition",
      date: "Nov 2024",
      description: "Trained a deep neural network model to identify and classify named entities within text. Applied tokenization and vectorization techniques to process and analyze text data.",
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn"],
      highlights: [
        "96% accuracy in identifying names, locations, and entities",
        "Implemented tokenization for text segmentation",
        "Vectorization for numerical data conversion"
      ]
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Academic & Personal Work</p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              <p className="project-label">Key Achievements:</p>
              <ul className="project-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-technologies">
              <p className="project-label">Technologies:</p>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects