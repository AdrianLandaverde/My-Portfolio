import { useState } from 'react'
import './Skills.css'
import * as Icons from './SkillsIcons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCode, faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';

function Skill({ title, description, software, icon }) {
    return (
        <div className="skill">
            <h3><FontAwesomeIcon icon={icon} /> {title}</h3>
            <p>{description}</p>
            {software}
        </div>
    )
}

function Skills() {
    const [count, setCount] = useState(0)

    return (
        <div className="Skills-section">
            <h1 className="centered-title">Skills</h1>
            <div className="skills">
                <div className="top-skills row flex-column flex-md-row">
                    <Skill
                        title="Data Analyst"
                        description="Proficient in Python and R for data analysis, with strong statistical skills. Experienced in creating interactive dashboards and reports. Skilled in data management and visualization using various tools including Excel. Strong command of SQL for database querying."
                        software={[<Icons.PythonIcon />, <Icons.PandasIcon />, <Icons.PlotlyIcon />, <Icons.RIcon />, <Icons.SasIcon />, <Icons.PowerBiIcon />, <Icons.TableuIcon />, <Icons.ExcelIcon />, <Icons.SqlIcon />,]}
                        icon={faDatabase}
                        className="col-12 col-md-4"
                    />
                    <Skill
                        title="Data Scientist"
                        description="Skilled in Python for data manipulation and machine learning, utilizing Scikit-learn for various tasks. Experienced in deep learning with PyTorch and TensorFlow. Proficient in computer vision using OpenCV. Knowledgeable in advanced NLP techniques with frameworks like Transformers."
                        software={[<Icons.PythonIcon />, <Icons.ScikitIcon />, <Icons.TensorFlowIcon />, <Icons.PytorchIcon />, <Icons.OpenCVIcon />, <Icons.HuggingFaceIcon />]}
                        icon={faRobot}
                        className="col-12 col-md-4"
                    />
                    <Skill
                        title="AI Engineer"
                        description="Skilled in Python for AI development, specializing in FastAPI for API creation. Experienced in deploying AI on AWS, Google Cloud, and Azure. Proficient in Docker for portable AI applications. Experienced in leveraging OpenAI for advanced research."
                        software={[<Icons.PythonIcon />, <Icons.FastAPIIcon />, <Icons.AwsIcon />, <Icons.AzureIcon />, <Icons.GCPIcon />, <Icons.DockerIcon />, <Icons.OpenAiIcon />]}
                        icon={faBrain}
                        className="col-12 col-md-4"
                    />
                </div>
                <div className='bottom-skills'>
                    <Skill
                        title="Full-Stack Developer"
                        description="
                        Skilled in HTML, CSS, and JavaScript, with React expertise for dynamic interfaces. Experienced in full stack development, prioritizing user-centric web applications and seamless integration of front-end and back-end systems. Comfortable with RESTful APIs and asynchronous programming."
                        software={[<Icons.htmlIcon />, <Icons.cssIcon />, <Icons.jsIcon />, <Icons.ReactIcon />]}
                        icon={faCode}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills