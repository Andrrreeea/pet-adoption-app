import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./MyAccountLogin.css";
import { useAuth } from "../Tools/Context";
import LogOut from "./LogOut";

const MyAccountLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();
  const{ user, login }=useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Login successful');
        localStorage.setItem('token', data.token);
        login({email:data.email, id: data.id});
        setShowSuccessPopup(true);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="class">
      {user ? (
        <LogOut {...user}/>
      ) : (
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="register-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
  
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Login successful!</p>
          </div>
        )}
  
        <Link to="/MyAccount">
          <button className="link-btn">Don't have an account? Register here.</button>
        </Link>
      </div>
      )}
    </div>
  );
  
}

export default MyAccountLogin;
