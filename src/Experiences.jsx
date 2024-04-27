import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experiences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


function Experience({ eventKey, jobTitle, companyName, timeline, body, image, iconType }) {
    const icon = iconType == 'briefcase' ? faBriefcase : faGraduationCap;


    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                <div className="experience-header">
                    <div><FontAwesomeIcon icon={icon} /> {jobTitle} @ {companyName}</div>
                    <div>{timeline}</div>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col xs={10}>{body}</Col>
                    <Col xs={2}><img src={image} alt={companyName} className="img-fluid" /></Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    );
}

function Experiences() {
    const experiences = [
        {
            jobTitle: "Data Scientist Trainee",
            companyName: "Arena Analytics",
            timeline: "Jul 2023 - Present",
            body: "Analysis of Data from international companies using Machine Learning. Creation of interactive dashboards with Python",
            image: "https://media.licdn.com/dms/image/C4E0BAQGh-NZ8xK5lxQ/company-logo_200_200/0/1630643652741/arena_analytics_logo?e=2147483647&v=beta&t=gBvKz1GZ8FORdXeT3dOE0xOUVVuANL_LFcdCbaOqa6g",
            iconType: 'briefcase'
        },
        
        {
            jobTitle: "Data Scientist Jr",
            companyName: "deep_dive",
            timeline: "Mar 2023 - Jul 2023",
            body: "Creation of Machine Learning and Deep Learning models using Python. Deployment of models and tasks using AWS tools and Docker",
            image: "https://wallpaperaccess.com/full/2969371.png",
            iconType: 'briefcase'
        },
        
        {
            jobTitle: "Intern Consultant",
            companyName: "SAS",
            timeline: "May 2022 - Nov 2022",
            body: "Utilizing video surveillance cameras for facial recognition of known criminals. Employing SAS Viya to create a computer vision models, deep learning, text analytics, and forecasting tasks. Leveraging SAS for data manipulation and executing SQL queries.",
            image: "https://logodix.com/logo/342329.png",
            iconType: 'briefcase'
        },
    
        {
            jobTitle: "Semester Abroad",
            companyName: "Boston University",
            timeline: "Aug 2023 - Dec 2023",
            body: "I've completed courses in Applied Machine Learning, Reinforcement Learning, and Introduction to Quantitative Environmental Analysis. Outside of academics, I engage in various sports activities including swimming, hiking in the White Mountains, running along the Charles River, and cycling on the Minuteman Bikeway. Additionally, I've participated in several hackathons, winning five of them: HackMIT, Hack Harvard, Hack UTD, Boston Hacks, and Tree Hacks, securing a total of five prizes.",
            image: "https://wallpaperaccess.com/full/2969371.png",
            iconType: 'graduationCap'
        },
    
        {
            jobTitle: "B.S. in Data Science and Mathematics Engineering",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2020 - Jun 2024",
            body: "I engage in sports training for specific competitions, focusing on athletics for Spartan Race events and triathlon for Ironman competitions. I took part in the second iteration of HeroX, a program centered around conscious leadership. I was part of the inaugural cohort of the Eugenio Garza Sada Global Leadership Program, under the leadership of Dr. Kasonde Musoma. Additionally, I served as the president of the Engineering in Data Science and Maths Student Group (SAIDM), where we coordinate data science courses for the TEC community.",
            image: "https://i.pinimg.com/originals/ee/83/7b/ee837b30f5cc5d0f4eafccbf0a29c16d.png",
            iconType: 'graduationCap'
        },
    
        {
            jobTitle: "International Baccalaureate",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2017 - May 2020",
            body: "I have completed courses in Mathematics at a high level, Computer Science at a standard level, and English Language and Literature at a high level. Additionally, I've studied Biology at a standard level. In terms of extracurricular activities, I've been involved in various sports such as swimming, athletics, cross-fit, and tennis. Furthermore, I participated in a project called EduCAS, where I taught sustainable art to primary school children. I also volunteered at an elderly home, organizing activities to entertain the residents. Additionally, I've been involved in projects aimed at collecting PET, tetrapack, and bottle caps for recycling. Lastly, I founded a student group called 'Huellitas Verdes' focused on environmental and animal-related initiatives.",
            image: "https://www.ibo.org/globalassets/new-structure/icons-and-logos/images/associations-of-ibws_en.png",
            iconType: 'graduationCap'
        },
    ];


    return (
        <div>
            <h1>Experiences</h1>
            <Accordion defaultActiveKey="0" flush>
                {experiences.map((experience, index) => (
                    <Experience key={index} eventKey={index.toString()} jobTitle={experience.jobTitle} companyName={experience.companyName} timeline={experience.timeline} body={experience.body} image={experience.image} iconType={experience.iconType} />
                ))}
            </Accordion>
        </div>
    );
}

export default Experiences;