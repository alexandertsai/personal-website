import React from 'react';

function Project({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
}

export default Project;