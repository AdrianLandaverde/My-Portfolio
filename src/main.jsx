import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero/Hero.jsx'
import Skills from './Skills/Skills.jsx'
import Experiences from './Experiences/Experiences.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import Projects from './Projects/Projects.jsx'
import Courses from './Courses/Courses.jsx'
import Achievements from './Achievements/Achievements.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <AboutMe />
    <Experiences />
    <Skills />
    <Projects/>
    <Courses />
    <Achievements />
  </React.StrictMode>,
)
