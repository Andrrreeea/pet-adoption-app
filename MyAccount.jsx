import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyAccount.css";
import LogOut from "./LogOut";
import { useAuth } from "../Tools/Context";

const MyAccount = () => {
  const navigate = useNavigate(); // Add useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const{user,login}=useAuth();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Registration successful');
        setMessage('Registration successful');
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/MyAccount');
        }, 5000); // Hide popup after 5 seconds and navigate to MyAccount
      } else {
        console.error('Registration failed:', data.error);
        setMessage('Registration failed');
        setShowSuccessPopup(true); // Show the popup on failure
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Error registering user');
       // Hide popup after 5 seconds in the error case
    }
  };

  return (
    <div className="class">
    {user ? (
      <LogOut {...user}/>
    ) : (
    <div className="auth-form-container">
      <h2>Create an Account</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      {showSuccessPopup && (
        <div className="success-popup">
          <p>Registration successful!</p>
        </div>
      )}
      <Link to="/MyAccountLogin">
        <button className="link-btn">Already have an account? Login here.</button>
      </Link>
    </div>
      )}
      </div>
  );
}

export default MyAccount;
