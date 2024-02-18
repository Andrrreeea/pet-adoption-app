// src/Components/ButtonAdoptNow.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonAdoptNow.css';

const ButtonAdoptNow = () => {
  return (
      <Link to="/ViewAnimals" className="custom-button">
        ADOPT NOW!
      </Link>    
  );
};

export default ButtonAdoptNow;
