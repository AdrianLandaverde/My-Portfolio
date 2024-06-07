import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaLink , FaBriefcase, FaGraduationCap} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experiences.css';

function Experience({ eventKey, jobTitle, companyName, timeline, body, location, url, skills, imageUrl, icon }) {
    return (
        <Accordion.Item eventKey={eventKey} className="experience-item">
            <Accordion.Header className="experience-header">
                <div className="header-left">
                    {icon} {jobTitle} @ {companyName}
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
            jobTitle: "B.S. in Data Science and Mathematics Engineering",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2020 - June 2024",
            body: "Immersed in a dynamic educational environment merging theory with practical application. Through rigorous coursework and hands-on projects, I developed proficiency in data analysis, mathematical modeling, and computational techniques. The program's interdisciplinary approach equipped me with the skills needed to tackle complex real-world challenges, while fostering a deep understanding of the symbiotic relationship between data science and mathematics. My time at Tecnológico de Monterrey was not just about academic growth, but also about embracing innovation and preparing for a future where data-driven decision-making is paramount.",
            location: "Estado de México, México",
            url: "https://tec.mx/",
            skills: ["Mathematics", "Statistics", "Data Science" ,"Machine Learning", "HeroX", "EGS", "Spartan Race", "Hackathons", "Swimming", "Hiking", "Athletics"],
            imageUrl: "public/images/experiences/tec-de-monterrey.png",
            icon: <FaGraduationCap />
        },

        {
            jobTitle: "Data Scientist Trainee.",
            companyName: "Arena Analytics",
            timeline: "Jul 2023 - Present",
            body: "Joined Arena Analytics as a Data Science Trainee, where I immersed myself in diverse tasks spanning machine learning, time series analysis, data analytics, and dashboard development. Engaged in hands-on projects, I honed my skills in applying machine learning algorithms to extract insights from data and forecast trends. Additionally, I gained experience in analyzing time series data to uncover patterns and inform strategic decisions. Leveraging data analytics techniques, I contributed to actionable insights, while also developing interactive dashboards to visualize complex information for stakeholders.",
            location: "Mexico City, Mexico",
            url: "https://arena-analytics.com/",
            skills: ["Time Series", "Machine Learning", "Data Analytics", "Dashboards", "Azure Synape"],
            imageUrl: "public/images/experiences/arena.png",
            icon: <FaBriefcase />
        },
        
        
        {
            jobTitle: "Study Abroad",
            companyName: "Boston University",
            timeline: "Aug 2023 - Dec 2023",
            body: "Participated in a transformative study abroad experience at Boston University, enriching my academic journey with diverse perspectives and new challenges. Immersed in a vibrant academic community, I engaged in coursework tailored to my interests, expanding my knowledge in AI. Beyond the classroom, I embraced the cultural diversity of Boston and actively participated in extracurricular activities, fostering personal growth and broadening my global outlook. This experience at Boston University not only enhanced my academic skills but also instilled in me a deeper appreciation for cross-cultural exchange and the importance of global citizenship",
            location: "Boston, USA",
            url: "https://www.bu.edu/",
            skills: ["Reinforcement Learning", "Applied ML", "Environmental Analysis", "Hiking", "Swimming", "Cycling", "Hackathons"],
            imageUrl: "public/images/experiences/bu.png",
            icon: <FaGraduationCap />
        },

        {
            jobTitle: "Data Scientist Jr.",
            companyName: "Deep Dive",
            timeline: "Mar 2023 - Jul 2023",
            body: "Engaged as a Junior Data Scientist at Deep Dive, with a focus on Natural Language Processing (NLP) and data engineering tasks, supplemented by AWS and Docker responsibilities. Leveraged advanced NLP techniques to extract insights from extensive datasets and collaborated with cross-functional teams to deploy NLP models. Additionally, managed AWS infrastructure and implemented Docker containers, contributing to streamlined processes and enhanced scalability. This role facilitated the refinement of NLP skills while broadening expertise in cloud computing and containerization, vital for modern data science workflows",
            location: "Mexico City, México",
            url: "https://dive.ai/",
            skills: ["Natural Language Processing", "Data Engineering", "AWS", "Docker", "Machine Learning"],
            imageUrl: "public/images/experiences/deep_dive.png",
            icon: <FaBriefcase />
        },

        {
            jobTitle: "Intern Consultant",
            companyName: "SAS",
            timeline: "May 2022 - Nov 2022",
            body: "Embarked on an enriching internship experience as a consultant at SAS, where I applied classroom knowledge to real-world scenarios in the field of data analytics. Working closely with seasoned professionals, I gained hands-on experience in utilizing SAS software to analyze complex datasets, extract meaningful insights, and provide valuable recommendations to clients. This immersive role allowed me to refine my analytical skills, enhance my problem-solving abilities, and deepen my understanding of data-driven decision-making processes. My time as an intern consultant at SAS not only bolstered my technical expertise but also reinforced my passion for harnessing the power of data to drive innovation and inform strategic business decisions.",
            location: "Mexico City, México",
            url: "https://www.sas.com/es_mx/home.html",
            skills: ["SAS Programming", "SAS Viya", "Computer Vision", "Face Recognition"],
            imageUrl: "public/images/experiences/sas.png",
            icon : <FaBriefcase />
        },

        {
            jobTitle: "International Baccalaureate",
            companyName: "Tec de Monterrey",
            timeline: "Aug 2017 - May 2020",
            body: "Immersed myself in the enriching environment of the International Baccalaureate (IB) program, where I cultivated a passion for critical thinking, global awareness, and academic excellence. Through diverse coursework, collaborative projects, and service initiatives, I embraced a holistic approach to learning, fostering not only academic growth but also a deep-seated commitment to community engagement and global citizenship. This experience has left an indelible mark on my journey, shaping my values and instilling in me a lifelong dedication to intellectual curiosity and social responsibility.",
            location: "Estado de México, México",
            url: "https://ibo.org/",
            skills: ["Computer Science SL", "Mathematics HL", "Biology SL", "Swimming", "Crossfit","EduCas", "Huellitas Verdes"],
            imageUrl: "https://www.ibo.org/globalassets/new-structure/icons-and-logos/images/associations-of-ibws_en.png",
            icon: <FaGraduationCap />
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