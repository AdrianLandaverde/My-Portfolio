import { useState } from 'react'
import './Skills.css'

function Skill({ title, description, software }) {
    return (
        <div className="skill">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {software.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

function Skills() {
    const [count, setCount] = useState(0)

    return (
        <div className="Skills-section">
            <h1>Skills</h1>
            <div className="skills">
                <div className="top-skills">
                    <Skill
                        title="Data Analyst"
                        description="Proficient in Python for data manipulation and analysis, utilizing libraries such as Pandas and NumPy. Experienced in R for statistical computing and visualization. Skilled in SAS for data management and statistical analysis. Proficient in creating interactive dashboards and reports using Power BI and Tableau. Advanced user of Excel for data cleaning, analysis, and visualization. Strong command of SQL for database querying and manipulation."
                        software={["Python", "Pandas", "Plotly", "R", "SAS", "Powe BI", "Tableau","Excel", "SQL"]}
                    />
                    <Skill
                        title="Data Scientist"
                        description="Proficient in Python for data manipulation and machine learning tasks, leveraging libraries such as Scikit-learn for supervised regression, supervised classification, and unsupervised learning techniques. Experienced in deep learning frameworks including PyTorch and TensorFlow for building and deploying neural network models. Skilled in computer vision tasks using OpenCV for image processing and analysis. Proficient in leveraging state-of-the-art NLP models and frameworks such as Transformers (Hugging Face) for tasks like text classification, named entity recognition, and language translation."
                        software={["Python", "Scikit-learn", "PyTorch", "TensorFlow", "OpenCV","Hugging Face"]}
                    />
                    <Skill
                        title="AI Engineer"
                        description="Proficient in Python for developing AI solutions, with expertise in building APIs using FastAPI for efficient model deployment. Experienced in cloud platforms such as AWS, Google Cloud, and Azure for scalable and reliable AI infrastructure deployment. Skilled in containerization using Docker for packaging and deploying AI applications in a portable and reproducible manner. Proficient in leveraging OpenAI's technologies for advanced AI research and development."
                        software={["Python", "Fast API", "AWS", "Google Cloud", "Azure", "Docker", "OpenAI"]}
                    />
                </div>
                <div className='bottom-skills'>
                    <Skill
                        title="Full Stack Developer"
                        description="Proficient in front-end technologies including HTML, CSS, and JavaScript, with intermediate expertise in building dynamic and responsive user interfaces using React. Skilled in creating engaging and interactive web applications with a focus on user experience and interface design. Experienced in full stack development, with the ability to integrate front-end components with back-end systems to deliver end-to-end solutions. Comfortable working with RESTful APIs and asynchronous programming concepts."
                        software={["html", "css", "javascript", "React", "RESTful APIs"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills