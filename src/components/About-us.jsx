import React from 'react';
import '../styles/AboutUs.css'; // Import the CSS for styling

const AboutUs = () => {
    return (
        <div className="about-container">
            <section className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our mission, vision, and team.</p>
            </section>

            <section className="about-content">
                <div className="about-section">
                    <img src="https://images.unsplash.com/photo-1549737221-bef65e2604a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mission" className="about-image" />
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide quality education and resources to help individuals
                            develop their skills, pursue their passions, and achieve their goals. We believe
                            in empowering people through learning and continuous development.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <img src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vision" className="about-image" />
                    <div className="about-text">
                        <h2>Our Vision</h2>
                        <p>
                            We envision a world where everyone has access to the knowledge and tools they
                            need to succeed. We strive to create a supportive and engaging environment
                            that fosters growth, creativity, and innovation.
                        </p>
                    </div>
                </div>

                <div className="about-section">
                    <img src="https://plus.unsplash.com/premium_photo-1664299134699-094c9bf57996?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team" className="about-image" />
                    <div className="about-text">
                        <h2>Our Team</h2>
                        <p>
                            We are a group of passionate educators, developers, and content creators dedicated
                            to making learning accessible and enjoyable for everyone. Our diverse team brings
                            together expertise from various fields to ensure high-quality resources for our learners.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
