import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Call the Laravel backend API
    axios.get('http://localhost:8000/api/portfolio-experience')
      .then(response => {
        setExperience(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Zakaria Naidja's Experience</h1>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
            <p>{exp.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
