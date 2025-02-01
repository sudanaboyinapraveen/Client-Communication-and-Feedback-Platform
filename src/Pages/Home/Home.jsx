import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token") || localStorage.getItem("token");

    if (!token) {
      navigate("/"); // Redirect to login if no token found
    } else {
      // Store token in localStorage if it's from query parameter
      if (urlParams.get("token")) {
        localStorage.setItem("token", token);
        window.history.replaceState({}, document.title, "/home"); // Clear the token from URL
      }

      // Fetch the home page content (protected route)
      fetch("https://client-communication-and-feedback.onrender.com/home", {
        headers: { Authorization: `Bearer ${token}` }, // Send token as Bearer
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Token is invalid or expired"); // Handle invalid token
          }
          return response.text();
        })
        .then((data) => setMessage(data))
        .catch((error) => {
          console.log("Error:", error);
          navigate("/");
        });
    }
  }, [navigate]);

  const handleStartProject = () => {
    navigate("/project-planning"); // Navigate to the project planning page
  };

  return (
    <div>
      <div className="content-container">
        {/* <h2>{message}</h2> */}
       

        <div className="home-container">
          <header className="home-header">
            <h1>Welcome to DevCollab</h1>
            <p>
              Your one-stop solution for seamless client-developer collaboration.
            </p>
            <div className="cta-buttons">
              <button
                className="start-project-btn"
                onClick={handleStartProject}
              >
                Start a New Project
              </button>
              <button className="ongoing-projects-btn">
                View Ongoing Projects
              </button>
            </div>
          </header>

          <section className="home-overview">
            <h2>Your Projects at a Glance</h2>
            <div className="project-summary">
              <div className="summary-card">
                <h3>Current Projects</h3>
                <p>Manage all your active projects in one place.</p>
              </div>
              <div className="summary-card">
                <h3>Completed Projects</h3>
                <p>View past projects and their deliverables.</p>
              </div>
              <div className="summary-card">
                <h3>Consultations</h3>
                <p>
                  Schedule or review consultation meetings with the dev team.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  
  );
}

export default Home;
