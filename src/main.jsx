import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import Skills from './Skills.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Skills />
  </React.StrictMode>,
)
