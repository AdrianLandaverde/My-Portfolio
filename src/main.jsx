import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './Hero/Hero.jsx';
import Skills from './Skills/Skills.jsx';
import Experiences from './Experiences/Experiences.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Projects from './Projects/Projects.jsx';
import Courses from './Courses/Courses.jsx';
import Achievements from './Achievements/Achievements.jsx';
import './main.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 8000); // Change this to control the duration of the splash screen

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  return (
    <React.StrictMode>
      {showSplash ? <Hero /> : (
        <>
          <AboutMe />
          <Experiences />
          <Skills />
          <Projects/>
          <Courses />
          <Achievements />
        </>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);