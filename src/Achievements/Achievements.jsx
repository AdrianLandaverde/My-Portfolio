import React from 'react';
import Masonry from 'react-masonry-css';
import './Achievements.css';

function Achievements() {
    const images = [
    { src: "images/achievements/boston_hacks.jpg", title: "Boston Hacks", alt: "Achivement Image"  },
    { src: "images/achievements/spartan_ultra.jpg", title: "Spartan Ultra", alt: "Achivement Image"  },
    { src: "images/achievements/hack_mit.jpg", title: "Hack MIT", alt: "Achivement Image"  },
    { src: "images/achievements/trifecta2021.jpg", title: "Trifecta Weekend 2021", alt: "Achivement Image"  },     
    { src: "images/achievements/sas_intern.jpg", title: "SAS Internship", alt: "Achivement Image"  },
    { src: "images/achievements/safe_roads.jpg", title: "Safe Roads", alt: "Achivement Image"  },
    { src: "images/achievements/crystal.jpg", title: "Crystal Systems Course", alt: "Achivement Image"  },
    { src: "images/achievements/tree_hacks.jpg", title: "Tree Hacks", alt: "Achivement Image"  },
    { src: "images/achievements/spartan_virtual.jpg", title: "Virtual Spartan Race", alt: "Achivement Image"  },
    { src: "images/achievements/hero_race.jpg", title: "The Hero Race", alt: "Achivement Image"  },
    { src: "images/achievements/10K_Challenge.jpg", title: "10K Challenge", alt: "Achivement Image"  },
    { src: "images/achievements/TriatlonEkzerco.jpeg", title: "Triatlon Ekzerco", alt: "Achivement Image"  }
    ,
];

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
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