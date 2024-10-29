import React from 'react';
import '/src/App.css';

function Project({ title, imageUrl, linkTo }) {
    return (
        <div className="project">
          <a href={linkTo} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="image-container">
              <img src={imageUrl} alt={title} className="project-image" />
              <div className="project-title">{title}</div>
            </div>
          </a>
        </div>
      );
    };
  
  export default Project;