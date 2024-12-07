import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { login } from "../api/user";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            const response = await login(credentials);
            alert("Login successful: " + response.token);
            navigate("/home");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
