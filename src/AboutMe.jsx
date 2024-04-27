import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
    return (
        <Row>
            <Col xs={6}>
                <h1>I'm Adrian, nice to meet you!</h1>
                <p>
                    Graduated in B.s. in Data Science and Mathematics at Tec de Monterrey. Passionate about solving real world problems using data science and AI.
                </p>
                <p>
                    Notable achievements:
                </p>
                <ul>
                    <li>Second Place Place, Sustainable Innovation Track, Tree Hacks (Carbon Cut project)</li>
                    <li>First Place, Sustainable Track and Best Use of Github, Boston Hacks (Sustainable AF project)</li>
                    <li>First Place, IBM AI and the Physical World Challenge, HackMIT 2023 (Reflexion Buddy project)</li>
                    <li>First Place, Safe Roads 2022 competition (Toronto Police Service, SAS, Geotab)</li>
                    <li>First Place, 10K challenge, Data Science Hub, Tec de Monterrey</li>
                </ul>
                <p>
                    Served as President of SAIDM, organizing courses to deepen Data Science understanding among peers.
                </p>
                <p>
                    Completed over 100 data science courses, including study abroad at Boston University.
                </p>
            </Col>
            <Col xs={6}>
                <img src="path_to_your_image" alt="About me" className="img-fluid" />
            </Col>
        </Row>
    );
}

export default AboutMe;