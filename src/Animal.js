import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Animal() {
  const [animalName, setAnimalName] = useState('');
  const [animalData, setAnimalData] = useState(null);

  const apiKey = 'UDAqMYmVDC9LvcUHrlGgqQ==f2JEvV78cjfvZ40l'; 
  const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${animalName}&key=${apiKey}`;

  const fetchAnimalData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setAnimalData(response.data);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  useEffect(() => {
    if (animalName) {
      fetchAnimalData();
    }
  }, [animalName]);

  const handleFetchClick = () => {
    // Manually initiate the API request when the "Fetch" button is clicked
    fetchAnimalData();
  };

  return (
    <div>
      <h1>Animal Information App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter animal name"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />
        <button onClick={handleFetchClick}>Fetch Animals</button>
      </div>
      {animalData && (
        <div>
          <h2>Animal Information for {animalName}</h2>
          <p>Name: {animalData.name}</p>
          <p>Scientific Name: {animalData.scientificName}</p>
          <p>Classification: {animalData.classification}</p>
        </div>
      )}
    </div>
  );
}

export default Animal;
