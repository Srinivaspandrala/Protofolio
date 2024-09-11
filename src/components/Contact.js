import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="contact-heading">Contact</h2>
                
                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />

                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                        />

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>

                    <div className="address-box">
                        <div className="address-content">
                            <img src="https://img.icons8.com/?size=100&id=44023&format=png&color=000000" alt="location" className="address-icon" />
                            <div className="address-text">
                                <h3>Address</h3>
                                <p>Bhupalpally, Jayashankar Bhupalpally</p>
                                <p>Telangana, 506169</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social media links */}
                <div className="social-media-links">
                    <a href="https://www.instagram.com/srinivas.instaa/" className="social-media-link">
                        <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" className="social-media-icon" alt="Instagram" />
                    </a>
                    <a href="https://github.com/Srinivaspandrala" className="social-media-link">
                        <img src="https://img.icons8.com/?size=100&id=46565&format=png&color=000000" className="social-media-icon" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/srinivas-pandrala-1b3518206/" className="social-media-link">
                        <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="social-media-icon" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
