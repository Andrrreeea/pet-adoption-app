import React from 'react';
import './DonatePet.css';
import DonationForm from './DonationForm';
import { useState } from 'react';

const DonatePet = () => {
    const [showForm, setShowForm] = useState(false);

  const handleDonateNow = () => {
    setShowForm(true);
  };
  const handleFormClose = () => {
    setShowForm(false);
  };
  return (
    <div className="donate-pet-container">
      <h1>Donate a Pet and Make a Difference</h1>

      <section className="intro-section">
        <p>
          Welcome to our 'Donate a Pet' program! Your generosity can change lives and give loving homes to pets in need.
          By choosing to donate a pet, you become a part of our mission to create a better life for every animal.
          Your contribution makes a real impact, and we appreciate your support.
        </p>
      </section>

      <section className="why-donate-section">
        <h2>Why Donate a Pet?</h2>
        <ul>
          <li>Save Lives: Your donation provides shelter, medical care, and love to animals in need.</li>
          <li>Create Space: Make room for other animals and enable us to rescue more.</li>
        </ul>
      </section>

      <section className="cta-section">
        <p>Ready to make a difference? Fill out the donation form now.</p>
        <button className="donate-now-btn" onClick={handleDonateNow}>
          Donate Now
        </button>
        {showForm && <DonationForm onClose={handleFormClose} />}
      </section>
    </div>
  );
};

export default DonatePet;
