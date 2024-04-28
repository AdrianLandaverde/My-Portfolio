import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import Skills from './Skills.jsx'
import Experiences from './Experiences.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
import Courses from './Courses.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <AboutMe />
    <Experiences />
    <Skills />
    <Projects/>
    <Courses />
  </React.StrictMode>,
)
