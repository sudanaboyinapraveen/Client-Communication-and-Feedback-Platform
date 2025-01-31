// import React, { useState } from 'react';
// import './Dashboard.css';  // Dashboard-specific stylesheet
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [isSlim, setIsSlim] = useState(false);

//   const toggleSidebar = () => {
//     setIsSlim(!isSlim);
//   };

//   return (
//     <div className="content-container">
//     <div className={isSlim ? "dashboard-container slim" : "dashboard-container"}>
//       <Sidebar isSlim={isSlim} toggleSidebar={toggleSidebar} />
//       <h1>Project Dashboard</h1>
//       <div className="dashboard-cards">
//         <div className="card">
//           <h2>Project Status</h2>
//           <p>Track your current projects and milestones.</p>
//         </div>
        
//         <Link to="/messages">
//         <div className="card">
//           <h2>Messages</h2>
//           <p>Check communication and recent updates.</p>
//         </div>
//         </Link>
   
//         <div className="card">
//           <h2>Files</h2>
//           <p>Upload and manage project files.</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// const Sidebar = ({ isSlim, toggleSidebar }) => {
//   return (
//     <div className={isSlim ? "sidebar slim" : "sidebar"}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {isSlim ? "🔍 Expand" : "❌ Slim"}
//       </button>
//       <a href="/">🏠</a>
//       <a href="/projects">📁 {isSlim ? "" : "Projects"}</a>
//       <a href="/consultation">🗓️ {isSlim ? "" : "Consultation"}</a>
//       <a href="/messages">💬 {isSlim ? "" : "Messages"}</a>
//       <a href="/settings">⚙️ {isSlim ? "" : "Settings"}</a>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiFile, FiMessageSquare, FiSettings, FiCalendar, FiHome, FiUsers } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
  const [isSlim, setIsSlim] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Mock data - replace with actual data from your API
  const projectStats = {
    active: 3,
    completed: 12,
    messages: 5,
    storageUsed: '4.2/10 GB'
  };

  const recentActivities = [
    { id: 1, project: 'E-commerce Platform', type: 'update', date: '2h ago' },
    { id: 2, project: 'Mobile App', type: 'message', date: '4h ago' },
    { id: 3, project: 'CMS Development', type: 'file', date: '1d ago' }
  ];

  return (
    <div className="dashboard-container">
      <nav className={`sidebar ${isSlim ? 'slim' : ''}`}>
        <div className="sidebar-header">
          {!isSlim && <h2>DevCollab</h2>}
          <button className="toggle-btn" onClick={() => setIsSlim(!isSlim)}>
            {isSlim ? <FiMenu /> : <FiX />}
          </button>
        </div>
        
        <ul className="nav-menu">
          <li className={activeMenu === 'dashboard' ? 'active' : ''}>
            <Link to="/dashboard" onClick={() => setActiveMenu('dashboard')}>
              <FiHome />
              {!isSlim && 'Dashboard'}
            </Link>
          </li>
          <li className={activeMenu === 'projects' ? 'active' : ''}>
            <Link to="/projects" onClick={() => setActiveMenu('projects')}>
              <FiFile />
              {!isSlim && 'Projects'}
            </Link>
          </li>
          <li className={activeMenu === 'consultation' ? 'active' : ''}>
            <Link to="/consultation" onClick={() => setActiveMenu('consultation')}>
              <FiCalendar />
              {!isSlim && 'Consultation'}
            </Link>
          </li>
          <li className={activeMenu === 'messages' ? 'active' : ''}>
            <Link to="/messages" onClick={() => setActiveMenu('messages')}>
              <FiMessageSquare />
              {!isSlim && 'Messages'}
              <span className="notification-badge">{projectStats.messages}</span>
            </Link>
          </li>
          <li className={activeMenu === 'team' ? 'active' : ''}>
            <Link to="/team" onClick={() => setActiveMenu('team')}>
              <FiUsers />
              {!isSlim && 'Team'}
            </Link>
          </li>
          <li className={activeMenu === 'settings' ? 'active' : ''}>
            <Link to="/settings" onClick={() => setActiveMenu('settings')}>
              <FiSettings />
              {!isSlim && 'Settings'}
            </Link>
          </li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Project Dashboard</h1>
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search projects..." />
            </div>
            <button className="notification-btn">
              <span className="notification-badge">3</span>
              🔔
            </button>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Active Projects</h3>
            <div className="stat-value">{projectStats.active}</div>
            <div className="stat-comparison">+2 from last month</div>
          </div>
          <div className="stat-card">
            <h3>Completed Projects</h3>
            <div className="stat-value">{projectStats.completed}</div>
            <div className="stat-comparison">↑ 15% efficiency</div>
          </div>
          <div className="stat-card">
            <h3>Storage Used</h3>
            <div className="stat-value">{projectStats.storageUsed}</div>
            <div className="storage-bar">
              <div className="storage-progress" style={{ width: '42%' }}></div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <section className="project-overview">
            <h2>Active Projects</h2>
            <div className="project-list">
              <div className="project-card">
                <h4>E-commerce Platform</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
                <div className="project-meta">
                  <span>Next Milestone: Payment Integration</span>
                  <span>Due: 3 days</span>
                </div>
              </div>
              {/* Add more project cards */}
            </div>
          </section>

          <section className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.type === 'update' && '📝'}
                    {activity.type === 'message' && '💬'}
                    {activity.type === 'file' && '📁'}
                  </div>
                  <div className="activity-details">
                    <h4>{activity.project}</h4>
                    <p>{activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</p>
                    <span>{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;