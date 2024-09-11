import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div>
            <picture>
                <img 
                    src="https://res.cloudinary.com/damoxc2du/image/upload/v1725903300/Screenshot_2023-06-11-18-06-16-34_1c337646f29875672b5a61192b9010f9-01_qcuzoe.jpg" 
                    className="profile-image" 
                    alt="profile" 
                />
            </picture>
            <h1 className="home-heading">
                <span className="intro-text">Hello, I'am </span>Pandrala Srinivas
            </h1>
            <p className="home-par">............Full Stack Developer</p>
            <div className="flex">
                <a href="https://www.instagram.com/srinivas.instaa/">
                    <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" className="social-media" style={{height:"50px",width:"50px"}} alt="Instagram" />
                </a>
                <a href="https://github.com/Srinivaspandrala">
                    <img src="https://img.icons8.com/?size=100&id=46565&format=png&color=000000" className="social-media"  style={{height:"50px",width:"50px"}} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/srinivas-pandrala-1b3518206/">
                    <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="social-media" style={{height:"50px",width:"50px"}} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Home;
