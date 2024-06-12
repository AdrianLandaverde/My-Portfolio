import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './Hero/Hero.jsx';
import Skills from './Skills/Skills.jsx';
import Experiences from './Experiences/Experiences.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Projects from './Projects/Projects.jsx';
import Courses from './Courses/Courses.jsx';
import Achievements from './Achievements/Achievements.jsx';
import { Link } from 'react-scroll';
import './main.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8000); // Change this to control the duration of the splash screen

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  const [navOpen, setNavOpen] = useState(false);


  return (
    <React.StrictMode>
      {!showSplash && (
        <nav>
          <button onClick={() => setNavOpen(!navOpen)}>&#9776;</button>
          {navOpen && (
            <>
              <Link activeClass="active" to="about-me-section" spy={true} smooth={true} offset={-70} duration={500}>About Me</Link>
              <Link activeClass="active" to="Skills-section" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
              <Link activeClass="active" to="experiences-section" spy={true} smooth={true} offset={-70} duration={500}>Experiences</Link>
              <Link activeClass="active" to="projects-section" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
              <Link activeClass="active" to="courses-section" spy={true} smooth={true} offset={-70} duration={500}>Courses</Link>
              <Link activeClass="active" to="achievements-section" spy={true} smooth={true} offset={-70} duration={500}>Achievements</Link>
            </>
          )}
        </nav>
      )}
      {showSplash ? <Hero /> : (
        <>
          <AboutMe id="about-me-section" />
          <Skills id="Skills-section" />
          <Experiences id="experiences-section" />
          <Projects id="projects-section" />
          <Courses id="courses-section" />
          <Achievements id="achievements-section" />
        </>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);