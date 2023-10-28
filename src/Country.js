import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Country() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  const apiKey = 'YUDAqMYmVDC9LvcUHrlGgqQ==f2JEvV78cjfvZ40l'; // Replace with your API key
  const apiUrl = `https://api.api-ninjas.com/v1/country?name=${countryName}&key=${apiKey}`;

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

  const handleFetchClick = () => {
    // Manually initiate the API request when the "Fetch" button is clicked
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
