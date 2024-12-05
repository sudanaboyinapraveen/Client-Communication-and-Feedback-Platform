import React, { useState } from 'react';
import './Dashboard.css';  // Dashboard-specific stylesheet

const Dashboard = () => {
  const [isSlim, setIsSlim] = useState(false);

  const toggleSidebar = () => {
    setIsSlim(!isSlim);
  };

  return (
    <div className="content-container">
    <div className={isSlim ? "dashboard-container slim" : "dashboard-container"}>
      <Sidebar isSlim={isSlim} toggleSidebar={toggleSidebar} />
      <h1>Project Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Project Status</h2>
          <p>Track your current projects and milestones.</p>
        </div>
        <div className="card">
          <h2>Messages</h2>
          <p>Check communication and recent updates.</p>
        </div>
        <div className="card">
          <h2>Files</h2>
          <p>Upload and manage project files.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

const Sidebar = ({ isSlim, toggleSidebar }) => {
  return (
    <div className={isSlim ? "sidebar slim" : "sidebar"}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSlim ? "🔍 Expand" : "❌ Slim"}
      </button>
      <a href="/">🏠 {isSlim ? "" : "Dashboard"}</a>
      <a href="/projects">📁 {isSlim ? "" : "Projects"}</a>
      <a href="/consultation">🗓️ {isSlim ? "" : "Consultation"}</a>
      <a href="/messages">💬 {isSlim ? "" : "Messages"}</a>
      <a href="/settings">⚙️ {isSlim ? "" : "Settings"}</a>
    </div>
  );
};

export default Dashboard;

