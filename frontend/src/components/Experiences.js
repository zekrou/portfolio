import React from 'react';
import './Experiences.css';

const Experiences = () => {
    return (
        <div className="experiences-container">
            <h1>Professional Experience</h1>
            <div className="experience-card">
                <h2>CEO & Founder</h2>
                <h3>taQseet | Constantine, Algeria</h3>
                <h4>January 2023 – Present</h4>
                <ul>
                    <li>Spearheaded the development of the taQseet app, focusing on the design and implementation of a user-friendly web interface.</li>
                    <li>Led a team of developers in building a robust backend system using Laravel and PHP, enhancing application performance by 30%.</li>
                    <li>Ensured cross-device compatibility and responsiveness, leading to a 20% increase in user engagement and customer satisfaction.</li>
                    <li>Successfully launched the app in the Algerian market, contributing to the local adoption of the Buy Now Pay Later (BNPL) model.</li>
                </ul>
            </div>

            <div className="experience-card">
                <h2>IT Consultant & Software Developer</h2>
                <h3>Freelance | Guelma, Algeria</h3>
                <h4>May 2022 – Present</h4>
                <ul>
                    <li>Provided IT consulting services to various clients, focusing on the development of custom web applications tailored to client needs.</li>
                    <li>Developed and maintained several e-commerce websites using PHP, MySQL, and JavaScript, resulting in a 15% increase in online sales for clients.</li>
                    <li>Implemented security best practices, reducing potential vulnerabilities in web applications by 40%.</li>
                    <li>Collaborated with clients to gather requirements, create project plans, and ensure timely delivery of high-quality solutions.</li>
                </ul>
            </div>

            <div className="experience-card">
                <h2>IT Technician</h2>
                <h3>Yousef Tech | Guelma, Algeria</h3>
                <h4>January 2023 – April 2024</h4>
                <ul>
                    <li>Managed and maintained computer networks, ensuring smooth operation of IT systems across the company.</li>
                    <li>Installed, configured, and updated software and hardware components, improving overall system efficiency.</li>
                    <li>Provided technical support to staff, resolving hardware and software issues effectively.</li>
                    <li>Assisted in the setup and management of web servers, contributing to the stability and security of web-based applications.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experiences;
