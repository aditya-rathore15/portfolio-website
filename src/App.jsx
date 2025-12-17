import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  )
}

export default App