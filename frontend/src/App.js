import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import myImage from './photos/profile.jpg'; // Adjust "your-image.jpg" to your actual image file name

import './App.css'; // Ensure you have this CSS file for styling

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={myImage} alt="My Profile" className="profile-image" />
                <h1>Your Name</h1> {/* Replace with your actual name */}
            </header>
            <section id="about-me">
                <AboutMe />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="experiences">
                <Experiences />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="contact-us">
                <ContactUs />
            </section>
        </div>
    );
};

export default App;
