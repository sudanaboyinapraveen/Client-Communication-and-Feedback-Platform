import React from 'react';

function GoogleLoginButton() {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/auth/google'; // Redirect to Google OAuth
    };

    return (
        <button onClick={handleGoogleLogin} className="google-login-button">
            Sign in with Google
        </button>
    );
}

export default GoogleLoginButton;