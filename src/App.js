// src/App.js

import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import ForgotPassword from './Pages/Forgotpassword/Forgotpassword';
import Navbar from './Components/Navbar/Navbar';
// import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Project from './Pages/Projects/Projects';
import Consultation from './Pages/Consultation/Consultation';
import Messages from './Pages/Messages/Messages';
import ProjectScoping from './Pages/ProjectScoping/ProjectScoping';
import Projects from './Pages/Projects/Projects';
// import LoginContext from './context/LoginContext';
import File from './Pages/File/File';
import Error from './Pages/Error';
import Report from './Pages/Report/Report';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("this is from app.js")
    // Check if the token exists in localStorage to set initial auth state
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state on login
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Render Navbar if user is authenticated */}
      {isAuthenticated && (
        <div className="nav">
          <Navbar handleLogout={handleLogout} />
        </div>
      )}

      <div className="App">
         <Routes>
    <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard"/> : <Login onLogin={handleLogin} />}
          />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consultation" element={<Consultation/>} />
        <Route path='/Messages' element={<Messages/>}/>
        <Route path='/files' element={<File/>}/>
        <Route path='/project-planning' element={<ProjectScoping/>}/>
        <Route path='/reports' element={<Report/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
      </div>
    </>
  );
}
export default App;


