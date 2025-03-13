import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password }) // ✅ Ensure backend has this route
      .then((result) => {
        console.log("Login Successful:", result.data);
        alert("Login successful! Redirecting...");
        
        // Store token in localStorage or state management (Redux)
        localStorage.setItem("authToken", result.data.token);
        
        navigate("/dashboard"); // Redirect user after login
      })
      .catch((err) => {
        console.error("Login Error:", err);
        alert("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />

          {/* Password Input */}
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
