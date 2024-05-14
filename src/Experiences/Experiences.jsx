import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experiences.css';

function Experience({ eventKey, jobTitle, companyName, timeline, body, location, url, skills, imageUrl }) {
    return (
        <Accordion.Item eventKey={eventKey} className="experience-item">
            <Accordion.Header className="experience-header">
                <div className="header-left">
                    {jobTitle} @ {companyName}
                </div>
                <div className="header-right">
                    ({timeline})
                </div>
            </Accordion.Header>
            <Accordion.Body className="experience-body">
                <div className="experience-left">
                    <div className="experience-location">
                        <FaMapMarkerAlt /> {location} <span className="link-icon"><FaLink /></span> <a href={url}>{url}</a>
                    </div>
                    <p>{body}</p>
                    <div className="experience-skills">
                        {skills.map((skill, index) => (
                            <Button key={index} variant="outline-primary" className="experience-skill">{skill}</Button>
                        ))}
                    </div>
                </div>
                <div className="experience-right">
                    <img src={imageUrl} alt="Experience" />
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

function Experiences() {
    const experiences = [
        {
            jobTitle: "Data Scientist Trainee.",
            companyName: "Arena Analytics",
            timeline: "Aug 2023 - Dec 2023",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Boston, USA",
            url: "https://www.bu.edu/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "src/assets/images/experiences/arena.png"
        },
        
        {
            jobTitle: "Data Scientist Jr.",
            companyName: "Deep Dive",
            timeline: "Aug 2023 - Dec 2023",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Boston, USA",
            url: "https://www.bu.edu/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "src/assets/images/experiences/deep_dive.png"
        },

        {
            jobTitle: "Intern Consultant",
            companyName: "SAS",
            timeline: "Aug 2023 - Dec 2023",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Boston, USA",
            url: "https://www.bu.edu/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "src/assets/images/experiences/sas.png"
        },
        
        {
            jobTitle: "Study Abroad",
            companyName: "Boston University",
            timeline: "Aug 2023 - Dec 2023",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Boston, USA",
            url: "https://www.bu.edu/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "src/assets/images/experiences/bu.png"
        },
        
        {
            jobTitle: "B.S. in Data Science and Mathematics Engineering",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2020 - May 2024",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Estado de México, México",
            url: "https://tec.mx/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "src/assets/images/experiences/tec-de-monterrey.png"
        },

        {
            jobTitle: "International Baccalaureate",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2017 - May 2020",
            body: "Developing high-quality software, solving complex problems, collaborating with cross-functional teams.",
            location: "Estado de México, México",
            url: "https://ibo.org/",
            skills: ["JavaScript", "React", "Node.js"],
            imageUrl: "https://www.ibo.org/globalassets/new-structure/icons-and-logos/images/associations-of-ibws_en.png"
        }
    ];

    return (
        <div className="experiences-section">
            <h1 className="centered-title">Experiences</h1>
            <Accordion defaultActiveKey="0">
                {experiences.map((experience, index) => (
                    <Experience key={index} eventKey={index.toString()} {...experience} />
                ))}
            </Accordion>
        </div>
    );
}

export default Experiences;