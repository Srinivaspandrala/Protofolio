import React from 'react';
import './PreLoader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div>
            <img 
                src="https://res.cloudinary.com/damoxc2du/image/upload/v1726992357/portfolio-dream-board-digital-186418-removebg-preview_iwvqpj.png" 
                alt="Logo"
                className="preloader-logo"
            />
            <p className='typewriter-container'>PANDRALA SRINIVAS</p>
            </div>
        </div>
    );
};

export default Preloader;
