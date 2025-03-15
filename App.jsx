import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPVerification from "./pages/OTPVerification";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;