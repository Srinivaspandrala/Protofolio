import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <h2 className='heading'>About</h2>
            <section id="about-me" className='aboutme-box'>
                <div className='aboutme-container'>
                    <img 
                        src='https://res.cloudinary.com/damoxc2du/image/upload/v1725940312/203eada5-42dc-4769-9159-4f13a454e1dc_utb7wl.jpg' 
                        className='about-image' 
                        alt='about'
                    />
                    <p className='aboutme-content'>
                        A dedicated software engineer with a strong background in developing both frontend and backend solutions. Experienced in utilizing a range of technologies such as HTML, CSS, JavaScript, React.js, Python, Express, Node.js, and SQLite to create responsive and user-friendly web applications. Notable projects include the Blogs App and Tasty Kitchen App. As a fresher eager to enter the IT field, I am looking forward to contributing my skills and growing within a dynamic team.
                    </p>
                </div>
                <a className="anchor-link" href='https://drive.google.com/file/d/1_NdSbPfZyXu4gzPKFwiWJPAI_QkRxauR/view' alt="resume"><img src='https://img.icons8.com/?size=100&id=YfikV7u4T4us&format=png&color=000000' alt='downloadlogo'/><p>Resume</p></a>
            </section>
        </div>
    );
}

export default AboutMe;
