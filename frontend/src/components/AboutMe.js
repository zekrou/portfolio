import React from 'react';
import './AboutMe.css';

// Placeholder images (replace these with your actual image paths later)
const profileImage = 'https://via.placeholder.com/300'; // Replace with your profile image path
const secondImage = 'https://via.placeholder.com/300'; // Replace with your second image path

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-left">
                <h2>Personal Info</h2>
                <ul>
                    <li>Name: Naidja Zakaria</li>
                    <li>Date of Birth: April 13, 2002</li>
                    <li>Email: zakaria.naidja@univ-constantine2.dz</li>
                    <li>Phone: (213) 672 357 753</li>
                    <li>City: Guelma, Algeria</li>
                </ul>
                <h3>Main Skills</h3>
                <ul>
                    <li>Web Development: HTML, CSS, JavaScript, PHP, Laravel, Flutter</li>
                    <li>Programming Languages: .NET, SQL, Java</li>
                    <li>Databases: MySQL, SQL</li>
                    <li>Tools & Platforms: Git, Docker, Agile methodologies</li>
                </ul>
            </div>
            <div className="about-me-right">
                <h2 className="biography-title">Biography</h2>
                <p>
                    Hello! I'm Naidja Zakaria, a creative developer dedicated to creating innovative web solutions for my clients and their customers. I have a passion for leveraging technical expertise to drive user engagement and business success. I have been developing web applications for several years, and my love for coding has only grown stronger over the years.
                </p>
                <div className="about-me-images">
                    <img src={profileImage} alt="Profile" className="about-image" />
                    <img src={secondImage} alt="Second" className="about-image" />
                </div>
                <p>
                    When I'm not immersed in the world of development, you can find me exploring new technologies, sketching ideas, or collaborating with clients to make their visions a reality.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
