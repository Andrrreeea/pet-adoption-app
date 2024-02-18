// DonationForm.js
import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = ({ onClose }) => {
  const [donatorName, setDonatorName] = useState('');
  const [donatorAge, setDonatorAge] = useState('');
  const [donatorAddress, setDonatorAddress] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [animalAge, setAnimalAge] = useState('');
  const [hasDisease, setHasDisease] = useState(false);
  const [donationReason, setDonationReason] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');
  const [animalImage, setAnimalImage] = useState('');
  const [animalBreed, setAnimalBreed] = useState('');
  const [donatorGender, setDonatorGender] = useState('');
  const [animalGender, setAnimalGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const response = await fetch('http://localhost:3001/api/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            donatorName,
            donatorAge,
            donatorAddress,
            donatorGender,
            animalType,
            animalAge,
            hasDisease,
            donationReason,
            animalDescription,
            animalImage,
            animalBreed,
            animalGender,
          }),
        });

        if (response.ok) {
          onClose();
        } else {
          console.error('Failed to insert data into the database');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  };

  return (
    <div className="donation-form-container">
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="donatorName">Name of Donator:</label>
      <input
        type="text"
        id="donatorName"
        value={donatorName}
        onChange={(e) => setDonatorName(e.target.value)}
        required
      />

      <label htmlFor="donatorAge">Age of Donator:</label>
      <input
        type="text"
        id="donatorAge"
        value={donatorAge}
        onChange={(e) => setDonatorAge(e.target.value)}
        required
      />

      <label htmlFor="donatorAddress">Address of Donator:</label>
      <input
        type="text"
        id="donatorAddress"
        value={donatorAddress}
        onChange={(e) => setDonatorAddress(e.target.value)}
        required
      />

      <label htmlFor="animalType">Type of Animal Donated:</label>
      <input
        type="text"
        id="animalType"
        value={animalType}
        onChange={(e) => setAnimalType(e.target.value)}
        required
      />

      <label htmlFor="animalAge">Age of Animal:</label>
      <input
        type="text"
        id="animalAge"
        value={animalAge}
        onChange={(e) => setAnimalAge(e.target.value)}
        required
      />

      <label htmlFor="hasDisease">Does the animal have any disease?</label>
      <input
        type="checkbox"
        id="hasDisease"
        checked={hasDisease}
        onChange={() => setHasDisease(!hasDisease)}
      />

      <label htmlFor="donationReason">Why do you want to donate this animal?</label>
      <textarea
        id="donationReason"
        value={donationReason}
        onChange={(e) => setDonationReason(e.target.value)}
        required
      />

        <label htmlFor="animalDescription">Description of the Animal:</label>
        <textarea
          id="animalDescription"
          value={animalDescription}
          onChange={(e) => setAnimalDescription(e.target.value)}
          required
        />

        <label htmlFor="animalImage">Image Link of the Animal:</label>
        <input
          type="text"
          id="animalImage"
          value={animalImage}
          onChange={(e) => setAnimalImage(e.target.value)}
          required
        />

        <label htmlFor="animalBreed">Breed of the Animal:</label>
        <input
          type="text"
          id="animalBreed"
          value={animalBreed}
          onChange={(e) => setAnimalBreed(e.target.value)}
          required
        />

        <label htmlFor="donatorGender">Gender of the Donator:</label>
        <select
          id="donatorGender"
          value={donatorGender}
          onChange={(e) => setDonatorGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="animalGender">Gender of the Animal:</label>
        <select
          id="animalGender"
          value={animalGender}
          onChange={(e) => setAnimalGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonationForm;



