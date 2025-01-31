
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import GoogleLoginButton from './GoogleLoginButton';  // Assuming you have this component for Google login
// import './Login.css';
// import GoogleLoginButton from '../../Components/GoogleLoginButton';

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     // Handle login form submission
//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const loginData = { email, password };

//         try {
//             // Make POST request to the server with the login data
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(loginData),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 // Store token in localStorage on successful login
//                 localStorage.setItem('token', data.token);
//                 navigate('/dashboard');  // Navigate to home page
//             } else if (response.status === 404) {
//                 // If the user is not found, redirect to signup
//                 alert("User not found. Redirecting to Signup...");
//                 navigate('/signup');
//             } else {
//                 // Handle other login failures
//                 alert("Login failed: " + (data.message || "Invalid credentials"));
//             }
//         } catch (error) {
//             console.log("Error:", error);
//             alert("Login failed due to a network issue.");
//         }
//     };

//     // Navigate to forgot password page when link is clicked
//     const handleForgotPassword = () => {
//         navigate('/forgotpassword');
//     };

//     return (
//         <div className="login-container"   style={{ 
//             backgroundImage: `url('software-developer.jpg'),` 
//           }}>
           
//             <div className="login-box">
//                 <div className="login-logo">
//                     <img src="Code.png" alt="Logo" />
//                     {/* <h1>C-Dev</h1> */}
//                 </div>
//                 <h2>Welcome back!</h2>
//                 <form onSubmit={handleLogin}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="login-input"
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="login-input"
//                         required
//                     />
//                     <button type="submit" className="login-button">Log in</button>
//                 </form>

//                 {/* Forgot password link */}
//                 <div className="forgot-password">
//                     <p 
//                         onClick={handleForgotPassword} 
//                         style={{ cursor: 'pointer', color: 'blue' , padding:"16px"}}
//                     >
//                         Forgot password?
//                     </p>
//                 </div>

//                 {/* Divider and Google login */}
//                 <div className="or-divider">OR</div>
//                 <GoogleLoginButton/>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import GoogleLoginButton from './GoogleLoginButton';  // Assuming you have this component for Google login
import './Login.css';
import GoogleLoginButton from '../../Components/GoogleLoginButton';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      // Make POST request to the server with the login data
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        // Store token in localStorage on successful login
        localStorage.setItem('token', data.token);
        navigate('/home'); // Navigate to home page
      } else if (response.status === 404) {
        // If the user is not found, redirect to signup
        alert("User not found. Redirecting to Signup...");
        navigate('/signup');
      } else {
        // Handle other login failures
        alert("Login failed: " + (data.message || "Invalid credentials"));
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Login failed due to a network issue.");
    }
  };

  // Navigate to forgot password page when link is clicked
  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url('software-developer.jpg')` }}>
      <div className="login-box">
        <div className="login-logo">
          <img src="Code.png" alt="Logo" />
          {/* <h1>C-Dev</h1> */}
        </div>
        <h2>Welcome back!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>

        {/* Forgot password link */}
        <div className="forgot-password">
          <p
            onClick={handleForgotPassword}
            style={{ cursor: 'pointer', color: 'blue', padding: "16px" }}
          >
            Forgot password?
          </p>
        </div>

        {/* Divider and Google login */}
        <div className="or-divider">OR</div>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default Login;