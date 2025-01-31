
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Navbar.css'; // CSS file for styling

// // const Navbar = ({ handleLogout }) => {
// //   const navigate = useNavigate();

// //   const onLogoutClick = () => {
// //     handleLogout(); // Use the handleLogout function from props
// //     navigate('/'); // Redirect to login after logout
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-logo">
// //         <Link to="/home">DevCollab</Link>
// //       </div>
// //       <ul className="navbar-links">
// //         <li><Link to="/home">Home</Link></li>
// //         <li><Link to="/projects">Projects</Link></li>
// //         <li><Link to="/consultation">Consultation</Link></li>
// //         <li><Link to="/messages">Messages</Link></li>
// //         <li><Link to="/files">Files</Link></li>
// //         <li><Link to="/reports">Reports</Link></li>
// //         <li><Link to="/dashboard">Dashboard</Link></li>
// //         <li className="dropdown">
// //           <Link to="/profile">Profile</Link>
// //           <div className="dropdown-content">
// //             <Link to="/settings">Settings</Link>
// //             <button onClick={onLogoutClick} className="logout-button">Logout</button>
// //           </div>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Updated CSS file

// const Navbar = ({ handleLogout }) => {
//   const navigate = useNavigate();

//   const onLogoutClick = () => {
//     handleLogout(); // Use the handleLogout function from props
//     navigate('/'); // Redirect to login after logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/home">DevCollab</Link>
//       </div>
//       <ul className="navbar-links">
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/consultation">Consultation</Link></li>
//         <li><Link to="/messages">Messages</Link></li>
//         <li><Link to="/files">Files</Link></li>
//         <li><Link to="/reports">Reports</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li className="dropdown">
//           <Link to="/profile">Profile</Link>
//           <div className="dropdown-content">
//             <Link to="/settings">Settings</Link>
//             <button onClick={onLogoutClick} className="logout-button">Logout</button>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaComments, FaFile, FaChartBar, FaThLarge, FaUser, FaCog, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const onLogoutClick = () => {
    handleLogout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/home" className="logo-link">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">DevCollab</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <NavItem icon={<FaHome />} text="Home" to="/home" />
          <NavItem icon={<FaProjectDiagram />} text="Projects" to="/projects" />
          <NavItem icon={<FaComments />} text="Consultation" to="/consultation" />
          <NavItem icon={<FaFile />} text="Files" to="/files" />
          <NavItem icon={<FaChartBar />} text="Reports" to="/reports" />
          <NavItem icon={<FaThLarge />} text="Dashboard" to="/dashboard" />
          
          {/* Profile Dropdown */}
          <li className="nav-item dropdown" onMouseEnter={() => setIsProfileOpen(true)} onMouseLeave={() => setIsProfileOpen(false)}>
            <button className="nav-link profile-link">
              <FaUser className="nav-icon" />
              <span>Profile</span>
              <FaChevronDown className="dropdown-chevron" />
            </button>
            <div className={`dropdown-menu ${isProfileOpen ? 'show' : ''}`}>
              <Link to="/settings" className="dropdown-item">
                <FaCog className="dropdown-icon" />
                Settings
              </Link>
              <button onClick={onLogoutClick} className="dropdown-item">
                <FaSignOutAlt className="dropdown-icon" />
                Logout
              </button>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavItem icon={<FaHome />} text="Home" to="/home" mobile />
        <NavItem icon={<FaProjectDiagram />} text="Projects" to="/projects" mobile />
        <NavItem icon={<FaComments />} text="Consultation" to="/consultation" mobile />
        <NavItem icon={<FaFile />} text="Files" to="/files" mobile />
        <NavItem icon={<FaChartBar />} text="Reports" to="/reports" mobile />
        <NavItem icon={<FaThLarge />} text="Dashboard" to="/dashboard" mobile />
        <NavItem icon={<FaUser />} text="Profile" to="/profile" mobile />
        <NavItem icon={<FaCog />} text="Settings" to="/settings" mobile />
        <button onClick={onLogoutClick} className="mobile-logout">
          <FaSignOutAlt className="nav-icon" />
          Logout
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text, to, mobile }) => (
  <li className={`nav-item ${mobile ? 'mobile' : ''}`}>
    <Link to={to} className="nav-link">
      {icon}
      <span>{text}</span>
    </Link>
  </li>
);

export default Navbar;