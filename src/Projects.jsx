import React from 'react';
import Card from 'react-bootstrap/Card';
import Masonry from 'react-masonry-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

function ProjectCard({ project }) {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}


function Projects() {
    const projects = [
        { title: 'Carbon Cut', image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/773/817/datas/gallery.jpg', description: 'Your one-stop shop for climate action and impact' },
        { title: 'Sustainable AF', image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/675/822/datas/gallery.jpg', description: 'Your one-stop guide to eco-conscious living. Track your carbon footprint, discover sustainable dining options, and optimize solar panel placement' },
        { title: 'Crop n Soil', image:'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/630/294/datas/medium.png', description:"Empowering Tomorrow's Farms: Smart, Sustainable, Strong."},
        { title: 'Reflexion Buddy', image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/594/427/datas/gallery.jpg', description: 'Your AI Journaling Companion for Better Mental Health, Improved Life and Success'},
        { title: 'DIF Violence Analysis', image: 'https://www.difatizapan.gob.mx/images/dae21140-87ad-4b93-a6a1-50a300632bbe1.png', description: 'Analysis of domestic violence reports for the Atizapan’s DIF'},
        { title: 'Diabetes Classification', image: 'https://wallpaperaccess.com/full/3702028.jpg', description: 'Exploratory Data Analysis and Machhine Learning classification of people with Diabetes'},
        { title: 'Coppel Route Optimization', image: 'https://smartroutes.io/blogs/content/images/size/w2000/2022/03/958CAB42-7C1A-448D-B645-D3F5B480AF85-min.jpeg', description: 'Use of algorithms such as TSP, VRP and CVRP in order to optimize the routes of deliveries'},
        { title: 'SAS Safe Roads', image: 'http://yesofcorsa.com/wp-content/uploads/2017/04/Toronto-Wallpaper-For-Desktop.jpg', description: 'Finding most dangerous places to drive and likelihood of collisions in Toronto'},
        { title: 'QS World Ranking Analysis', image: 'https://mma.prnewswire.com/media/1503777/QS_World_University_Rankings_Logo.jpg?p=facebook', description: 'Analysis of the most important variables in the QS World Ranking'},
        { title: 'Hello World Mexican Sign Language', image: 'https://i.redd.it/eifjszyoa2f31.jpg', description: 'Analysis of syntax of translation from Spanish to LSM with NLP.'},
        { title: 'Access to health in State of Mexico', image: 'https://wallpaperaccess.com/full/5600428.jpg', description: 'Multidimensional clustering using K-means to identify the level of access to health.'},
        { title: 'Process Optimization for Coca Cola Femsa', image: 'https://coca-colafemsa.com/wp-content/uploads/2019/12/coca-cola-femsa-YP-luz-portada.jpg', description: 'Analysis of machines and prediction of energy per day'},
        { title: 'Mario Kart 8 combination optimization', image: 'https://www.wallpaperflare.com/static/462/71/622/mario-kart-8-deluxe-poster-4k-mario-wallpaper.jpg', description: 'Dashboard with the best combinations of characters'},
        { title: 'Analysis of genes that cause colon cancer', image: 'https://wallpaperaccess.com/full/3787567.jpg', description: 'Analysis of gene expression in young and adult people with colon cancer in stage II and III'},
    ];

    const breakpointColumnsObj = {
        default: 4,
        1200: 4,
        992: 3,
        768: 2,
        576: 1
    };

    return (
        <div>
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