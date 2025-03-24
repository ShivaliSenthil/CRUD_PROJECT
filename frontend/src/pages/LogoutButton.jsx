import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (refreshToken) {
                // Send the refresh token to backend for blacklisting
                await axios.post("http://localhost:8000/logout/", {
                    refresh_token: refreshToken
                });
            }

            localStorage.removeItem("accessToken");   // Clear access token
            localStorage.removeItem("refreshToken");  // Clear refresh token

            alert("Logged out successfully!");
            navigate("/login");  // Redirect to login
        } catch (error) {
            console.error("Logout failed", error);
            alert("Failed to logout. Try again.");
        }
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                background: "red",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "0.3s",
                margin: "10px"
            }}
            onMouseOver={(e) => e.target.style.background = "darkred"}
            onMouseOut={(e) => e.target.style.background = "red"}
        >
            Logout
        </button>
    );
};

export default LogoutButton;