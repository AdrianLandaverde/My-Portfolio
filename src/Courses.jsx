import React, { useRef } from 'react';
import './Courses.css';

function Courses() {
    const slides = [
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "src/assets/images/courses/course1.jpeg", alt: "1" },
        { src: "https://raw.githubusercontent.com/AdrianLandaverde/Portafolio-Adrian/main/assets/images/about/badgegoogle.png", alt: "1" }
    ];

    const sliderRef = useRef(null);

    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'paused';
        }
    };

    const handleMouseLeave = () => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <div>
            <h1>Courses</h1>
            <h2>Data Analysis</h2>
            <div className="slider">
                <div className="slide-track" ref={sliderRef}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                    {slides.map((slide, index) => (
                        <div className="slide" key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;