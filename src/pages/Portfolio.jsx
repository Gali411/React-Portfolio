import React from 'react';
import '/src/App.css';
import Project from '../components//Project';

export default function Portfolio() {
  return (
    <div className="background">
      <h1>Projects</h1>
      <div className="projects-container">
        <Project
          title="Vehicle Builder"
          imageUrl="./vehiclebuilder.png"
          linkTo = "https://github.com/Gali411/Vehicle-Builder"
        />
      </div>
      <div className="projects-container">
        <Project
          title="Employee Tracker"
          imageUrl="./employeetracker.png"
          linkTo = "https://github.com/Gali411/Employee-Tracker"
        />
      </div>
    </div>
  );
};
