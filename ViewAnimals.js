import React, { useState, useEffect } from 'react';
import './ViewAnimals.css';
import AnimalDetails from '../Components/AnimalDetails';


const ViewAnimals = () => {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPet, setSelectedPet] = useState(null);
  const [adoptionMessage, setAdoptionMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/api/pets`)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handlePetClick = pet => {
    setSelectedPet(pet);
  };

  const closeDetails = () => {
    setSelectedPet(null);
  };

  const handleAdopt = petId => {
    fetch(`http://localhost:3001/api/adopt/${petId}`, {
      method: 'POST',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to adopt pet (HTTP status ${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setAdoptionMessage('Thank you for adopting! We will contact you as soon as possible.');
          // Fetch the updated list of pets after adoption
          fetch(`http://localhost:3001/api/pets`)
            .then(response => response.json())
            .then(data => setPets(data))
            .catch(err => console.error('Error fetching data:', err));
        } else {
          setAdoptionMessage('Failed to adopt the pet. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error adopting pet:', error);
        setAdoptionMessage('Failed to adopt the pet. Please try again.');
      });
  };

  const filteredPets = pets.filter(pet =>
    pet.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Search a type of animal</h2>

      <input
        type="text"
        placeholder="Search Animals..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{
          margin: '10px',
          padding: '8px',
          fontSize: '14px',
          width: '200px',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Array.isArray(filteredPets) &&
          filteredPets.map(pet => (
            <div
              key={pet.id}
              style={{ margin: '50px', cursor: 'pointer', transition: 'transform 0.3s ease' }}
              onClick={() => handlePetClick(pet)}
            >
              <img
                src={pet.img}
                alt={pet.breed}
                style={{ width: '250px', height: '250px' }}
              />
              <p>{pet.type}</p>
              <p>{pet.breed}</p>
            </div>
          ))}
      </div>

      {selectedPet && (
        <AnimalDetails pet={selectedPet} onClose={closeDetails} onAdopt={() => handleAdopt(selectedPet.idpet)} />
      )}

      <p className="adoption-message">{adoptionMessage}</p>
    </div>
  );
};

export default ViewAnimals;
