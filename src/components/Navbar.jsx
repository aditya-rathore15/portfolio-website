import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Detect scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Name */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="navbar-logo"
        >
          Aditya Rathore
        </button>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('education')}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Resume Download Button */}
        <a 
          href="/Aditya_Rathore.pdf" 
          download="Aditya_Rathore_Resume.pdf"
          className="navbar-resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar