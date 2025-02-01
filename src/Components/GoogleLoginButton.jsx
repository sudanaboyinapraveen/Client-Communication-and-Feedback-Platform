import React from 'react';

function GoogleLoginButton() {
    const handleGoogleLogin = () => {
        window.location.href = 'https://client-communication-and-feedback.onrender.com/auth/google'; // Redirect to Google OAuth
    };

    return (
        <button onClick={handleGoogleLogin} className="google-login-button">
            Sign in with Google
        </button>
    );
}

export default GoogleLoginButton;