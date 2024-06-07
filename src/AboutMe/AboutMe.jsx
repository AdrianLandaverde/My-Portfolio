import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';
import { FaLinkedin, FaInstagram, FaKaggle, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';


function AboutMe() {
    return (
        <section className='about-me-section'>
            <div className='about-me-content'>
                <h1 className='about-me-title'>Hi, I'm Adrian Landaverde</h1>
                <h2 className='about-me-subtitle'>I'm a Data Enthusiast with a lot of knowledge in Data Engineering, Data Analysis, Data Science, AI Engineering, and Full-Stack Development</h2>
                <h2 className='about-me-subtitle'>Passionate about solving data driven problems, interested in sustainability, and continous self-taught learning</h2>
                <ul className='about-me-features'>
                    <li>B.S. in Data Science and Mathematics Engineer in Tec de Monterrey</li>
                    <li>Winner of multiple Hackathons from Tec de Monterrey, Toronto, Boston, MIT, and Stanford</li>
                    <li>High-endurance sport competitions</li>
                    <li>Took over 100+ Data Science related courses</li>
                </ul>


                <div className='about-me-social'>
                    <a href="mailto:adrianlandaverden@gmail.com">
                        <FaEnvelope className='social-icon' id='iconMail' />
                    </a>
                    <a href="https://www.linkedin.com/in/adrian-landaverde-nava/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin className='social-icon' id='iconLinkedin' />
                    </a>
                    <a href="https://github.com/AdrianLandaverde" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='social-icon' id='iconGithub' />
                    </a>
                    <a href="https://www.instagram.com/adrian_landaverde_01/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='social-icon' id='iconInstagram' />
                    </a>
                    <a href="https://devpost.com/adrianln" target="_blank" rel="noopener noreferrer">
                        <SiDevpost className='social-icon' id='iconDevpost' />
                    </a>
                    <a href="https://www.kaggle.com/adrinlandaverdenava" target="_blank" rel="noopener noreferrer">
                        <FaKaggle className='social-icon' id='iconKaggle' />
                    </a>
                </div>
                <a href="src/assets/docs/adrian_cv.pdf" download className='cv-download-button'>Download CV</a>
            </div>
            <div className='about-me-image'>
                <img src="public/images/about-me/adrian.JPG" alt="Adrian's Profile" />
                <div className='quote'>
                    <p>"The obstacle is the Way." - Ryan Holiday</p>
                </div>
            </div>
        </section>
    );
}
export default AboutMe;