import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me text-center">
            <Row className='about-me-row justify-content-center'>
                <Col xs={12} md={8}>
                    <h1>Welcome, I'm Adrian!</h1>
                    <p>
                        I hold a B.S. in Data Science and Mathematics from Tec de Monterrey. I'm deeply passionate about leveraging data science and AI to solve real-world problems.
                    </p>
                    <p>
                        I have won multiple hackathons from various organizations such as Tec de Monterrey, Toronto Police Department, SAS, Boston, MIT, and Stanford; with projects related to sustainability, health, and finance.
                    </p>
                    <p>
                        As the former President of SAIDM, I organized courses to deepen the understanding of Data Science among my peers.
                    </p>
                    <p>
                        I've completed over 100 data science courses, including a study abroad program at Boston University.
                    </p>
                    <div className="image-container-aboutme">
                        <img src="src/assets/images/about-me/me2.jpg" alt="Adrian in the forest" className="centered-image" />
                    </div>
                </Col>
            </Row>


        </div>
    );
}

export default AboutMe;