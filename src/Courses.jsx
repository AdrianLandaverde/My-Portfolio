import React, { useRef, useState } from 'react';
import './Courses.css';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Courses() {
    const programming_slides = [
        { src: "src/assets/images/courses/programming_and_software/course1.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course2.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course3.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course4.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course5.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course6.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course7.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course8.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course9.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course10.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course11.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course12.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course13.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course14.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course15.jpeg", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course16.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course17.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course18.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course19.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course20.png", alt: "course" },
        { src: "src/assets/images/courses/programming_and_software/course21.png", alt: "course" },
    ];

    const data_wrangling_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const data_viz_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const data_applied_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const data_ml_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const data_dl_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const data_cloud_slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
    ];

    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    const sliderRef4 = useRef(null);
    const sliderRef5 = useRef(null);
    const sliderRef6 = useRef(null);
    const sliderRef7 = useRef(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    function openModal(image) {
        setSelectedImage(image);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    const handleMouseEnter = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'paused';
        }
    };

    const handleMouseLeave = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <div className='courses-section'>
            <h1>Courses</h1>

            <h2>Programming & Technology</h2>
            <div className="slider">
                <div className="slide-track-programming" ref={sliderRef1}>
                    {programming_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef1)} onMouseLeave={() => handleMouseLeave(sliderRef1)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {programming_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef1)} onMouseLeave={() => handleMouseLeave(sliderRef1)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Data Wrangling</h2>
            <div className="slider">
                <div className="slide-track-wrangling" ref={sliderRef2}>
                    {data_wrangling_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef2)} onMouseLeave={() => handleMouseLeave(sliderRef2)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_wrangling_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef2)} onMouseLeave={() => handleMouseLeave(sliderRef2)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Data Visualization</h2>
            <div className="slider">
                <div className="slide-track-viz" ref={sliderRef3}>
                {data_viz_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef3)} onMouseLeave={() => handleMouseLeave(sliderRef3)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_viz_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef3)} onMouseLeave={() => handleMouseLeave(sliderRef3)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Applied Data Science</h2>
            <div className="slider">
                <div className="slide-track-applied" ref={sliderRef4}>
                {data_applied_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef4)} onMouseLeave={() => handleMouseLeave(sliderRef4)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_applied_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef4)} onMouseLeave={() => handleMouseLeave(sliderRef4)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Machine Learning</h2>
            <div className="slider">
                <div className="slide-track-ml" ref={sliderRef5}>
                {data_ml_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef5)} onMouseLeave={() => handleMouseLeave(sliderRef5)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_ml_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef5)} onMouseLeave={() => handleMouseLeave(sliderRef5)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Deep Learning</h2>
            <div className="slider">
                <div className="slide-track-dl" ref={sliderRef6}>
                {data_dl_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef6)} onMouseLeave={() => handleMouseLeave(sliderRef6)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_dl_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef6)} onMouseLeave={() => handleMouseLeave(sliderRef6)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>

            <h2>Cloud Computing</h2>
            <div className="slider">
                <div className="slide-track-cloud" ref={sliderRef7}>
                    {data_cloud_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef7)} onMouseLeave={() => handleMouseLeave(sliderRef7)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                    {data_cloud_slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={() => handleMouseEnter(sliderRef7)} onMouseLeave={() => handleMouseLeave(sliderRef7)}>
                            <img src={slide.src} alt={slide.alt} onClick={() => openModal(slide.src)} />
                        </div>
                    ))}
                </div>
            </div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal-content"
            >
                <img src={selectedImage} alt="Selected" />
                <button onClick={closeModal} className='close-button'>X</button>
            </Modal>
        </div>
    );
}

export default Courses;