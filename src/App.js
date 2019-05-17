import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This project has been configured to output a <code>FAB</code>
        </p>
        <a
          className="App-link"
          href="https://fab.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about FABs
        </a>
        <p>Get preview URLs for every commit in all environments using Linc:</p>
        <a
          className="App-link"
          href="https://fab.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://app.linc.sh/
        </a>
      </header>
    </div>
  )
}

export default App
