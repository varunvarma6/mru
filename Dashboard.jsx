import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome, {user?.email || "User"}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Dashboard;
