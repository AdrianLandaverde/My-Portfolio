import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='about-me-container'>
            <h1 className='about-me-h1'>Hi, I'm Adrian</h1>
            <div className='about-me-content'>
                <div className='about-me-text'>
                    <h2 className='about-me-h2'>Graduated as Data Scientist, with a lot of self-taught experience in Data Analysis, AI Engineering, and Full-Stack Developer</h2>
                    <p> Graduated in Tec de Monterrey, I have overcame challenges in order to become the best version of myself, including leadership programs, high-endurance sport competitions, and won Hackathons at diverse international insititutions such as Tec de Monterrey, Police of Toronto, Boston, MIT, and Stanford</p>
                </div>

                <div className='about-me-image'>
                    <img src="src/assets/images/about-me/me2.jpg" alt="Adrian's Profile" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;