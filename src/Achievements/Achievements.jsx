import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import './Achievements.css';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

function Achievements() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "images/achievements/boston_hacks.jpg", title: "Boston Hacks", alt: "Achivement Image", description: "1st place winner of the BostonHacks Hackathon in 2 categories: Bests Sustainable Solution and Best Use of Github with our project 'Sustainable AF'. Which had many sustainability features such as Nearest sustainable restaurants, most sustainable routes and solar panel planning. " },
        { src: "images/achievements/spartan_ultra.jpg", title: "Spartan Ultra", alt: "Achivement Image", description: "4th place in the Spartan Ultra Race, which consisted in 50Km running with ninja-warrior obstacles such as climbing a rope, monkey bars, carrying heavy objects and more. Competition took place on a Dessert in San Luis Potosi, Mexico, 2022." },
        { src: "images/achievements/hack_mit.jpg", title: "Hack MIT", alt: "Achivement Image", description: "1st place winner of the HackMIT Hackathon @ MIT in the category of Best AI real world application by IBM with our project 'Reflexion Buddy'. This project consisted in an AI powered journaling tool with voice recognition, multiple languages, emotion classifier and exporting to pdf." },
        { src: "images/achievements/trifecta2021.jpg", title: "Trifecta Weekend 2021", alt: "Achivement Image", description: "Spartan trifecta Weekend finisher, which sonsited in finishing the 3 types of races: Sprint(5Km), Super (10Km) and Beast (21Km) with ninja warrior like obstacles in a single weekend. Completed the entire races with face-mask due to Covid-19." },
        { src: "images/achievements/sas_intern.jpg", title: "SAS Internship", alt: "Achivement Image", description: "Landed my first Internship @ SAS, which started with a Kick-off in the main Headquarters in South Carolina. Learned a lot about SAS Programming and SAS viya about data manipulation, data mining, and deep learning" },
        { src: "images/achievements/safe_roads.jpg", title: "Safe Roads", alt: "Achivement Image", description: "Winner of the SAS Safe Roads competition in collaboration with the Toronto Police Depratment. Our project consisted on 2 main algorithms: An analysis of the likelihood of an accident in every public place in Toronto, and a prediction model of the likelihood of an accident given the day, the hour, weather conditions and the district." },
        { src: "images/achievements/crystal.jpg", title: "Crystal Systems Course", alt: "Achivement Image", description: "3rd Place winner of the Crystal Systems Course in collaboration with Tec de Monterrey. I won the 3rd place by assiting all the sessions, having a high grade on the exam, and an outstanding project." },
        { src: "images/achievements/tree_hacks.jpg", title: "Tree Hacks", alt: "Achivement Image", description: "2nd Place winner in the TreeHacks Hackathon @ Stanford with our project 'Carbon Cut' in the category of Most Innovative Sustainable Solution. The main feature of our project was a RAG model which speaks as the main planet itself about main green areas of our planet, such as The Amazon Rainforest, Coral Reefs and more." },
        { src: "images/achievements/spartan_virtual.jpg", title: "Virtual Spartan Race", alt: "Achivement Image", description: "Finisher of the 4 Spartan Virtual Races during Covid-19. Instead of running, I completed the 4 races by jumping the rope with face-mask: Sprint (2000 jumps), Super (4000 jumps), Beast (8000 jumps), and Ultra (16,000 jumps) in teh same weekend." },
        { src: "images/achievements/hero_race.jpg", title: "The Hero Race", alt: "Achivement Image", description: "1st Place winner of 'The Hero Race' a 5Km race organized by the leadership program: HeroX" },
        { src: "images/achievements/10K_Challenge.jpg", title: "10K Challenge", alt: "Achivement Image", description: "1st Place winner of the 10K Challenge Hackathon by Tec de Monterrey. Our project consisted on an analysis of the level of access to health in every part of Estado de Mexico." },
        { src: "images/achievements/TriatlonEkzerco.jpeg", title: "Triathlon Ekzerco", alt: "Achivement Image", description: "1st place teams and individual winner of the Ekzerco Triathlon which consisted on a cummulative traithlon of 2 weeks. During these weeks I completed 221 Km running and 363 Km cycling" }
        ,
    ];

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
        document.body.classList.add('body-lock-scroll');
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.classList.remove('body-lock-scroll');
    };

    return (
        <div className='achievements-section'>
            <h1>Achievements</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
                    <div key={index} className="image-container" onClick={() => openModal(image)}>
                        <img src={image.src} alt={image.alt} title={image.title} />
                        <div className="image-overlay">
                            <div className="image-title">{image.title}</div>
                        </div>
                    </div>
                ))}
            </Masonry>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal-achievements"

            >
                <div className="modal-content-achievements">
                    <img className="modal-image-achievements" src={selectedImage?.src} alt={selectedImage?.alt} />
                    <div className="modal-text-achievements">
                        <h2>{selectedImage?.title}</h2>
                        <p>{selectedImage?.description}</p>
                        <button className="close-button" onClick={closeModal}>X</button>                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Achievements;