
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // CSS file for styling

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout(); // Use the handleLogout function from props
    navigate('/'); // Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">DevCollab</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/files">Files</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li className="dropdown">
          <Link to="/profile">Profile</Link>
          <div className="dropdown-content">
            <Link to="/settings">Settings</Link>
            <button onClick={onLogoutClick} className="logout-button">Logout</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
