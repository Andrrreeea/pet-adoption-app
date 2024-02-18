import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimalDetails.css';
import { useAuth } from '../Tools/Context';

const AnimalDetails = ({ pet, onClose, onAdopt, adoptionMessage }) => {
  const [localAdoptionMessage, setLocalAdoptionMessage] = useState('');
  const [redirectToMyAccount, setRedirectToMyAccount] = useState(false);
  const navigate = useNavigate();
  const{user} = useAuth();


  useEffect(() => {
    setLocalAdoptionMessage(adoptionMessage);
  }, [adoptionMessage]);

  // Example: Replace this with your actual user authentication logic
  const isLoggedIn = !!user; // Assume a truthy user object means the user is logged in

  useEffect(() => {
    if (redirectToMyAccount && !isLoggedIn) {
      // Redirect to the MyAccount page only if the user is not logged in
      navigate('/MyAccount');
      setLocalAdoptionMessage('Please log in before adopting.');
      setRedirectToMyAccount(false); // Reset the flag to avoid continuous redirection
    }
  }, [redirectToMyAccount, isLoggedIn, navigate]);

  const handleAdopt = async () => {
    if (isLoggedIn) {
      try {
        // Assume onAdopt is a function that handles the adoption logic
        const userId = user.id;
        await onAdopt(pet.idpet,userId);
        setLocalAdoptionMessage('Thank you for adopting! We will contact you as soon as possible.');
        await performAdoptionInBackend(pet.idpet,userId);
      } catch (error) {
        console.error('Error adopting pet:', error);
        setLocalAdoptionMessage('Failed to adopt the pet. Please try again.');
      }
    } else {
      // Set the flag to trigger redirection in useEffect
      setRedirectToMyAccount(true);
    }
  };
  
  // New function to handle adoption in the backend
  const performAdoptionInBackend = async (petId, userId) => {

    try {
      const response = await fetch(`http://localhost:3001/api/adopt/${petId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({userId })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Adoption successful:', data);
      } else {
        console.error('Error adopting pet:', data);
      }
    } catch (error) {
      console.error('Error adopting pet:', error);
    }
  };


  return (
    <div className="animal-details-container">
      <div className="animal-details-content">
        <img src={pet.img} alt={pet.type} className="animal-details-image" />
        <div className="animal-details-info">
          <h2>{pet.type}</h2>
          <p>{pet.idpet}</p>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Gender: {pet.gender}</p>
          <p>Disease: {pet.disease}</p>
          <p>Description: {pet.description}</p>
          <p>Status:  {pet.status === 1 ? 'Available' : 'Unavailable'}</p>
          <p>Reason for donating: {pet.reason_donate}</p>
          {pet.status === 1 && (
        <>
          <button onClick={handleAdopt} className="adopt-btn">
            Adopt
          </button>
          <p className="adoption-message">{localAdoptionMessage}</p>
        </>
      )}
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
