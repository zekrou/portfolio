import React from 'react';
import './Navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
