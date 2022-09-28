import React from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const loggingOut = () => {
    window.sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div style={{ margin: "auto" }} className="profile">
      <h1 style={{ color: "black" }}>You have successfully logged in</h1>
      <button onClick={loggingOut}>Logout</button>
    </div>
  );
}
