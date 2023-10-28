import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Country() {
  const [countryName, setCountryName] = useState(''); // State to store the country name
  const [countryData, setCountryData] = useState(null); // State to store the fetched country data

  const apiKey = 'YUDAqMYmVDC9LvcUHrlGgqQ==f2JEvV78cjfvZ40l'; // Replace with your API key
  const apiUrl = `https://api.api-ninjas.com/v1/country?name=${countryName}&key=${apiKey}`;

  // Function to fetch country data from the API
  const fetchCountryData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCountryData(response.data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  useEffect(() => {
    if (countryName) {
      // Automatically fetch data when the countryName changes
      fetchCountryData();
    }
  }, [countryName]);

  // Function to manually initiate the API request when the "Fetch" button is clicked
  const handleFetchClick = () => {
    fetchCountryData();
  };

  return (
    <div>
      <h1>Country Information App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={handleFetchClick}>Fetch Country</button>
      </div>
      {countryData && (
        <div>
          <h2>Country Information for {countryName}</h2>
          <p>Name: {countryData.name}</p>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
        </div>
      )}
    </div>
  );
}

export default Country;
