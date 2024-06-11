import React from 'react';
import Card from 'react-bootstrap/Card';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

function ProjectCard({ project }) {
    return (
        <Card className="mb-2 project-card">
            <div className="project-image-container" onClick={() => window.open(project.link, "_blank")}>
                <Card.Img variant="top" src={project.image} />
                <Card.Text className="project-description">{project.description}</Card.Text>
            </div>
        </Card>
    );
}

function Projects() {
    const projects = [
        { title: 'Bank Analysis', image: 'images/projects/banking_analysis.PNG', description: 'Dashboard, classification and interpolation of credits', link: 'https://adrianlandaverde.github.io/Proyecto-Integrador-IDM/' },
        { title: 'Water-AI', image: 'images/projects/water_ai.PNG', description: 'Analysis of water droughts, contamination and floods', link: 'https://adrianlandaverde.github.io/water-ai/' },
        { title: 'Carbon Cut', image: 'images/projects/carbon_cut.PNG', description: 'Your one-stop shop for climate action and impact', link: 'https://devpost.com/software/carbon-cut-3d5k2g' },
        { title: 'Move out with us', image: 'images/projects/move_out_with_us.PNG', description: 'Analyze Fannie Mae data to determine your loan eligibility and provide tailored advice', link: 'https://devpost.com/software/fannie-mate'},
        { title: 'Sustainable AF', image: 'images/projects/sustainable_af.PNG', description: 'Your one-stop guide to eco-conscious living. Track your carbon footprint, discover sustainable dining options, and optimize solar panel placement', link: 'https://devpost.com/software/sustainable-af' },
        { title: 'Crop n Soil', image: 'images/projects/crop_n_soil.PNG', description: "Empowering Tomorrow's Farms: Smart, Sustainable, Strong.", link: 'https://devpost.com/software/cropnsoil' },
        { title: 'Reflexion Buddy', image: 'images/projects/reflexion_buddy.PNG', description: 'Your AI Journaling Companion for Better Mental Health, Improved Life and Success', link: 'https://devpost.com/software/reflexion-buddy' },
        { title: 'DIF Violence Analysis', image: 'images/projects/dif_violence.PNG', description: 'Analysis of domestic violence reports for the Atizapan’s DIF', link: 'https://dashbaord-dif-atizapan.onrender.com' },
        { title: 'Diabetes Classification', image: 'images/projects/diabetes_classification.PNG', description: 'Exploratory Data Analysis and Machhine Learning classification of people with Diabetes', link: 'https://diabetes-classification.onrender.com' },
        { title: 'Coppel Route Optimization', image: 'images/projects/coppel_route.PNG', description: 'Use of algorithms such as TSP, VRP and CVRP in order to optimize the routes of deliveries', link: 'https://ma2001b-202-4.netlify.app/' },
        { title: 'SAS Safe Roads', image: 'images/projects/safe_roads.PNG', description: 'Finding most dangerous places to drive and likelihood of collisions in Toronto', link: 'https://youtu.be/3Cey1PUhGBg' },
        { title: 'Hello World Mexican Sign Language', image: 'images/projects/mexican_sign_language.PNG', description: 'Analysis of syntax of translation from Spanish to LSM with NLP.', link: 'https://devpost.com/software/reflexion-buddy' },
        { title: 'Access to health in State of Mexico', image: 'images/projects/access_to_health.PNG', description: 'Multidimensional clustering using K-means to identify the level of access to health.', link: 'https://github.com/AdrianLandaverde/10K_Challenge' },
        { title: 'Mario Kart 8 combination optimization', image: 'images/projects/mario_kart.PNG', description: 'Dashboard with the best combinations of characters', link: 'https://github.com/AdrianLandaverde/10K_Challenge' },
        { title: 'Analysis of genes that cause colon cancer', image: 'images/projects/colon_cancer.PNG', description: 'Analysis of gene expression in young and adult people with colon cancer in stage II and III', link: 'https://github.com/AdrianLandaverde/Genes_Cancer_de_Colon' },
    ];

    const breakpointColumnsObj = {
        default: 4,
        1200: 4,
        992: 3,
        768: 2,
        576: 1
    };

    return (
        <div className='projects-section'>
            <h1>Projects</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Masonry>
        </div>
    );
}

export default Projects;