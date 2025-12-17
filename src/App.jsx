import './App.css'

function App() {
  return (
    <div className="test-container">
      <header className="test-header">
        <h1 className="test-title">Portfolio Test</h1>
        <p className="test-subtitle">Verifying Apple-inspired minimal design</p>
      </header>
      
      <section className="test-content">
        <div className="test-card">
          <h2>Environment Check</h2>
          <p>If you can see this with clean typography and spacing, we're good to go!</p>
          <button className="test-button">Hover Me</button>
        </div>
      </section>
    </div>
  )
}

export default App