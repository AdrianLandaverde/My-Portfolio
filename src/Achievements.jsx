import React from 'react';
import Masonry from 'react-masonry-css';
import './Achievements.css';

function Achievements() {
    const images = [
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/bostonhacks.jpg?raw=true", alt: "Dummy Image", title: "Boston Hacks"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/spartan-ultra.jpg?raw=true", alt: "Dummy Image", title: "Spartan Ultra"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/hackmit.jpg?raw=true", alt: "Dummy Image", title: "Hack MIT"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/saferoads.jpg?raw=true", alt: "Dummy Image", title: "Safe Roads"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/Hero_race.jpg?raw=true", alt: "Dummy Image", title: "Hero Race"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/TriatlonEkzerco.jpeg?raw=true", alt: "Dummy Image", title: "Triatlon Ekzerco"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/trifecta2021.jpg?raw=true", alt: "Dummy Image", title: "Spartan Trifecta Weekend"  },
    { src: "https://github.com/AdrianLandaverde/Portafolio-Adrian/blob/main/assets/images/achievements/10K_Challenge.jpg?raw=true", alt: "Dummy Image", title: "10K Challenge"  },
];

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div>
            <h1>Achievements</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.src} alt={image.alt} title={image.title} />
                        <div className="image-overlay">
                            <div className="image-title">{image.title}</div>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    );
}

export default Achievements;