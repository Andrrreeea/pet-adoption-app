import React from "react";
import "./LogOut.css";
import { useAuth } from "../Tools/Context";

const LogOut = ({ email }) => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="account">
      <div className="details">
        <p>Hello {user ? user.name : "Guest"}!</p>
        <p>Do you want to log out?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LogOut;