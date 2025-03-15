import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Mock OTP validation logic
    setUser({ authenticated: true });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleVerifyOTP}>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};
export default OTPVerification;
