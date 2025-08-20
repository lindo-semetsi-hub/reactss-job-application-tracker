import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem("user", username);
            navigate("/home");
        }
        else {
            alert("Please fill in both fields");
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
        />
        <br />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Logic</button>
            </form>
        </div>
    );
}

export default Login;