import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Mock data fetching - replace with real API call in a real app
  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="content-container">
    <div className="projects-container">
      <h1>Your Projects</h1>
      
      <div className="projects-header">
        <button className="new-project-btn">Start New Project</button>
      </div>

      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className={`project-card ${project.status.toLowerCase()}`}>
              <h2>{project.name}</h2>
              <p>Status: {project.status}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          ))
        ) : (
          <p>No projects found. Start a new project to get started!</p>
        )}
      </div>
    </div>

    </div>
  );
};

export default Projects;
