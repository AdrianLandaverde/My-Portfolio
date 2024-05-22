import React, { useEffect } from 'react';
import './Modal.css'; // Import your Modal CSS

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        // When the component mounts, add the class to the body
        document.body.classList.add('body-lock-scroll');

        // When the component unmounts, remove the class from the body
        return () => {
            document.body.classList.remove('body-lock-scroll');
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    return (
        <div className="modal-overlay">
            <div className="modal-content-wrapper">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;