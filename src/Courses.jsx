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
        { src: 'src/assets/images/courses/full_stack_developer/google_basicos_asistencia_tecnica.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/google_bits_bytes_redes.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/google_infraestructura_ti.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/google_seguridad_informatica.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/google_sistema_operativo.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/google_ti.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/cloud_computing.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/full_stack_developer/html_css_js.png', alt: 'course_image' },

    ];

    const data_ml_slides = [
        { src: 'src/assets/images/courses/data_science/crystal_course.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/feature_engineering.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/regular_expressions_in_python.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/python_time_Series.jpg', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/time_series.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/sas_forecasting.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intro_to_ml.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/ml_onramp.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/maths_ml_linear_algebra.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/applied_ml.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/sas_data_mining.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intermediate_ml.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/sas_text_analytics.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/text_mining.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/social_network_analysis.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/machine_learning_explainability.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/sport_analytics_foundations.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intro_to_clinical_data_science.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intro_to_healthcare.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/ml_for_healthcare.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intro_to_clinical_data.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/evaluations_of_ai_healthcare.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/ai_healthcare_capstone.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/computer_vision.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/computer_vision_onramp.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/opencv_bootcamp.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/deep_learning_fundamentals.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/sas_deep_learning.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/intro_to_deep_learning.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/deep_learning_onramp.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/start_tensorflow2.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/deep_learning_with_tensorflow.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/object_locatization_tensorflow.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/probabilistic_tensorflow2.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/customising_tensorflow2.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/accelerating_deep_learning.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/intro_to_reinforcement_learning.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_science/reinforcement_learning_onramp.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/intro_to_ai_ethics.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_science/web_app_with_streamlit.png', alt: 'course_image' },

    ];

    const data_dl_slides = [
        { src: 'src/assets/images/courses/data_analysis/google_formula_preguntas.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/intro_to_programming.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_datos_en_todas_partes.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/python.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/introduction_to_data_science_python.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_programacion_en_r.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/matlab_onramp.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/simulink_onramp.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_analysis/pandas.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_datos_para_exploracion.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/data_cleaning.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_datos_limpios.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/applied_data_science_with_r.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/data_analysis_using_python.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/geospatial_analysis.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_analizar_datos.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_programming_1.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_programming_2.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_flows_in_sas_viya.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/python_for_data_science.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_statistics_1.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_certified.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_curso_final.png', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_analysis/data_visualization.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/applied_plotting_charting_and_data_representation.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/data_visualization_using_python.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/data_visualization_with_r.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/google_arte_de_visualizacion.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/excel_y_powerbi.jpg', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/dashboards_with_plotly.jpg', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/tableau_for_data_science.jpg', alt: 'course_image' },

        { src: 'src/assets/images/courses/data_analysis/relational_database_design.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/intro_to_sql.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sas_sql_1.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/r_with_databases.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/sql.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/advanced_sql.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/data_analysis/advanced_topics_in_databases.png', alt: 'course_image' },

    ];

    const data_cloud_slides = [
        { src: 'src/assets/images/courses/ai_engineer/art_of_prompt_engineering.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/big_data_101.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/aws_cloud_foundations.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/aws_data_analytics.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/microsoft-azure-fundamentals-describe-cloud-concepts.svg', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/azure_space.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/cloud_computing_foundations.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/python_for_mlops.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/docker_essentials.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_foundations_cloud.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_foundations_data.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_foundations_infrastructure.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_foundations_networking.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/sentiment_analysis_hugging_face.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/voice_assitant_watson.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_attention_mechanism.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_encoder_decoder.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_genai_fundamentals.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_genai_studio.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_image_captioning.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_image_generation.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_intro_to_genai.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_llms.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_responsible_ai.png', alt: 'course_image' },
        { src: 'src/assets/images/courses/ai_engineer/google_cloud_genai_transformers.png', alt: 'course_image' },
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

            <h2>Full-Stack Developer</h2>
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

            <h2>Data Science</h2>
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

            <h2>Data Analysis</h2>
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

            <h2>AI Engineer</h2>
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