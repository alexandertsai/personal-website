import React from 'react';
import Project from '../components/Project';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;