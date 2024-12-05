import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './ForgotPassword.css'; // Ensure the CSS file is imported

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        const resetData = { email };

        try {
            const response = await fetch('http://localhost:5000/forgotpassword', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resetData),
            });

            if (response.ok) {
                alert("Password reset link sent! Please check your email.");
                navigate('/'); // Navigate to login after successful request
            } else {
                alert("Failed to send reset link. Please try again.");
            }
        } catch (error) {
            console.log("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="login-input" // Using same class as login
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
