

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../../Components/GoogleLoginButton';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        const signupData = { email, password, username, phone };

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup successful!");
                navigate('/');
            } else {
                alert("Signup failed: " + (data.message || "An error occurred"));
            }
        } catch (error) {
            console.log("Error:", error);
            alert("Signup failed due to a network issue.");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="signup-logo">
                    <img src="Code.png"  alt="Logo" />
                </div>
                <h2>Join us!</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="signup-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-input"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="signup-input"
                    />
                    <button type="submit" className="signup-button">Sign up</button>
                </form>
                <div className="or-divider">OR</div>
                <GoogleLoginButton/>
            </div>
        </div>
    );
}

export default Signup;
