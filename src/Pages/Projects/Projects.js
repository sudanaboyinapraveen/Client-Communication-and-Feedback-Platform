

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  // Mock data fetching - replace with real API call in a real app
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  // Function to calculate progress based on status
  const getProgressPercentage = (status) => {
    switch (status.toLowerCase()) {
      case "not started":
        return 0;
      case "in progress":
        return 50;
      case "completed":
        return 100;
      default:
        return 0;
    }
  };

  // Open Modal
  const openDetails = (project) => {
    setSelectedProject(project);
  };

  // Close Modal
  const closeDetails = () => {
    setSelectedProject(null);
  };

  // Navigate to ProjectScoping page
  const handleNewProject = () => {
    navigate("/project-planning");
  };

  return (
    <div className="content-container">
      <div className="projects-container">
        <h1>Your Projects</h1>

        <div className="projects-header">
          <button className="new-project-btn" onClick={handleNewProject}>
            Start New Project
          </button>
        </div>

        <div className="projects-list">
          {projects.length > 0 ? (
            projects.map((project) => {
              const progress = getProgressPercentage(project.status);
              return (
                <div
                  key={project.id}
                  className={`project-card ${project.status.toLowerCase()}`}
                >
                  <h2>{project.name}</h2>
                  <p>Status: {project.status}</p>

                  {/* Progress Bar */}
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="progress-text">{progress}% Complete</p>

                  <button
                    className="view-details-btn"
                    onClick={() => openDetails(project)}
                  >
                    View Details
                  </button>
                </div>
              );
            })
          ) : (
            <p>No projects found. Start a new project to get started!</p>
          )}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedProject.name}</h2>
            <p>
              <strong>Status:</strong> {selectedProject.status}
            </p>
            <p>
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <p>
              <strong>Deadline:</strong> {selectedProject.deadline}
            </p>

            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  width: `${getProgressPercentage(selectedProject.status)}%`,
                }}
              ></div>
            </div>
            <p className="progress-text">
              {getProgressPercentage(selectedProject.status)}% Complete
            </p>

            <button className="close-btn" onClick={closeDetails}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

