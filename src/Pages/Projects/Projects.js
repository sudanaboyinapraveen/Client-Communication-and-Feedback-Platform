

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Projects.css";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const navigate = useNavigate(); // Initialize the navigate function

//   // Mock data fetching - replace with real API call in a real app
//   useEffect(() => {
//     fetch("http://localhost:5000/projects")
//       .then((response) => response.json())
//       .then((data) => setProjects(data));
//   }, []);

//   // Function to calculate progress based on status
//   const getProgressPercentage = (status) => {
//     switch (status.toLowerCase()) {
//       case "not started":
//         return 0;
//       case "in progress":
//         return 50;
//       case "completed":
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   // Open Modal
//   const openDetails = (project) => {
//     setSelectedProject(project);
//   };

//   // Close Modal
//   const closeDetails = () => {
//     setSelectedProject(null);
//   };

//   // Navigate to ProjectScoping page
//   const handleNewProject = () => {
//     navigate("/project-planning");
//   };

//   return (
//     <div className="content-container">
//       <div className="projects-container">
//         <h1>Your Projects</h1>

//         <div className="projects-header">
//           <button className="new-project-btn" onClick={handleNewProject}>
//             Start New Project
//           </button>
//         </div>

//         <div className="projects-list">
//           {projects.length > 0 ? (
//             projects.map((project) => {
//               const progress = getProgressPercentage(project.status);
//               return (
//                 <div
//                   key={project.id}
//                   className={`project-card ${project.status.toLowerCase()}`}
//                 >
//                   <h2>{project.name}</h2>
//                   <p>Status: {project.status}</p>

//                   {/* Progress Bar */}
//                   <div className="progress-container">
//                     <div
//                       className="progress-bar"
//                       style={{ width: `${progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="progress-text">{progress}% Complete</p>

//                   <button
//                     className="view-details-btn"
//                     onClick={() => openDetails(project)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               );
//             })
//           ) : (
//             <p>No projects found. Start a new project to get started!</p>
//           )}
//         </div>
//       </div>

//       {/* Modal for Project Details */}
//       {selectedProject && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>{selectedProject.name}</h2>
//             <p>
//               <strong>Status:</strong> {selectedProject.status}
//             </p>
//             <p>
//               <strong>Description:</strong> {selectedProject.description}
//             </p>
//             <p>
//               <strong>Deadline:</strong> {selectedProject.deadline}
//             </p>

//             <div className="progress-container">
//               <div
//                 className="progress-bar"
//                 style={{
//                   width: `${getProgressPercentage(selectedProject.status)}%`,
//                 }}
//               ></div>
//             </div>
//             <p className="progress-text">
//               {getProgressPercentage(selectedProject.status)}% Complete
//             </p>

//             <button className="close-btn" onClick={closeDetails}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiFilter, FiSearch } from "react-icons/fi";
import "./Projects.css";
import ProjectModal from "./ProjectModal";
import ProjectProgressChart from "./ProjectProgressChart";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        if (!response.ok) throw new Error("Failed to fetch projects");
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getStatusDetails = (status) => {
    switch (status.toLowerCase()) {
      case "planned":
        return { color: "#3B82F6", progress: 20 };
      case "in progress":
        return { color: "#F59E0B", progress: 65 };
      case "completed":
        return { color: "#10B981", progress: 100 };
      default:
        return { color: "#64748B", progress: 0 };
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesStatus = filter === "all" || project.status.toLowerCase() === filter;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleNewProject = () => navigate("/project-planning");

  if (loading) return <div className="loading-spinner" />;
  if (error) return <div className="error-message">⚠️ {error}</div>;

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Project Portfolio</h1>
        <div className="controls">
          <div className="search-filter">
            <div className="search-bar">
              <FiSearch />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-dropdown">
              <FiFilter />
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Projects</option>
                <option value="planned">Planned</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <button className="new-project-btn" onClick={handleNewProject}>
            <FiPlus /> New Project
          </button>
        </div>
      </div>

      <ProjectProgressChart projects={projects} />

      <div className="project-grid">
        {filteredProjects.map((project) => {
          const { color, progress } = getStatusDetails(project.status);
          return (
            <div key={project._id} className="project-card">
              <div className="card-header">
                <h3>{project.name}</h3>
                <span className="status" style={{ backgroundColor: color }}>
                  {project.status}
                </span>
              </div>
              
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: color }} />
              </div>

              <div className="project-meta">
                <div className="meta-item">
                  <span>Deadline</span>
                  <strong>{new Date(project.deadline).toLocaleDateString()}</strong>
                </div>
                <div className="meta-item">
                  <span>Team</span>
                  <div className="team-avatars">
                    {project.team.slice(0, 3).map((member) => (
                      <img key={member._id} src={member.avatar} alt={member.name} />
                    ))}
                    {project.team.length > 3 && <span>+{project.team.length - 3}</span>}
                  </div>
                </div>
              </div>

              <button 
                className="view-details-btn"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;