import React from 'react';
import { FiX, FiCalendar, FiUsers, FiFlag, FiClock } from 'react-icons/fi';
import PropTypes from 'prop-types';
import "./Projects.css";
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const statusColor = {
    planned: '#3B82F6',
    'in progress': '#F59E0B',
    completed: '#10B981',
  }[project.status.toLowerCase()];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{project.name}</h2>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <FiCalendar />
              <div>
                <label>Deadline</label>
                <p>{new Date(project.deadline).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="status-indicator" style={{ backgroundColor: statusColor }} />
              <div>
                <label>Status</label>
                <p>{project.status}</p>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3><FiUsers /> Team Members</h3>
            <div className="team-grid">
              {project.team.slice(0, 5).map((member) => (
                <div key={member._id} className="team-member">
                  <img src={member.avatar} alt={member.name} />
                  <span>{member.name}</span>
                </div>
              ))}
              {project.team.length > 5 && (
                <div className="team-more">
                  +{project.team.length - 5} more
                </div>
              )}
            </div>
          </div>

          <div className="modal-section">
            <h3><FiFlag /> Milestones</h3>
            <div className="milestones-list">
              {project.milestones.map((milestone) => (
                <div key={milestone._id} className="milestone-item">
                  <div className="milestone-header">
                    <h4>{milestone.name}</h4>
                    <span className={`status-${milestone.status.toLowerCase()}`}>
                      {milestone.status}
                    </span>
                  </div>
                  <div className="milestone-meta">
                    <p><FiClock /> Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;