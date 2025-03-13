import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password }) // ✅ Fixed API URL
      .then((result) => {
        console.log("Signup Successful:", result.data);
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Signup Error:", err);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <label className="block mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />

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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
