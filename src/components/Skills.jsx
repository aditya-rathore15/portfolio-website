import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "Gleam", "C", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "JUnit", "Bootstrap", "Kafka", "Azure Event Hubs"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Yugabyte"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "Docker", "Kubernetes", "Gradle", "Jira", "Agile", "Grafana", "Postman", "Datadog", "MS Azure", "GCP"]
    },
    {
      category: "System Design",
      skills: ["Microservices Architecture", "Distributed Systems", "API Design", "Cloud Migration", "Performance Optimization"]
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technologies & Expertise</p>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills