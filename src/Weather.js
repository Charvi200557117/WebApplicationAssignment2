import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    // State variables to store the user's location input and weather data
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    // API key for accessing the weather data (Replace with your actual API key)
    const apiKey = 'c20fb3109dmshee723dc24ddcff5p1923dejsn5efadc1ade0a';

    // Function to fetch weather data from the API
    const fetchWeatherData = async () => {
        try {
            // Make an HTTP GET request to the weather API
            const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                headers: {
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                    'X-RapidAPI-Key': apiKey,
                },
                params: {
                    q: location, // Specify the location to retrieve weather data for
                },
            });

            // Log the response headers for debugging purposes
            console.log('Response Headers:', response.headers);

            // Update the state with the weather data received from the API
            setWeatherData(response.data);
        } catch (error) {
            // Handle errors in case the API request fails
            console.error('Error fetching weather data:', error.message);
        }
    };

    // Event handler for updating the 'location' state when the user types in the input field
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    // Event handler for fetching weather data when the user clicks the "Fetch Weather" button
    const handleFetchWeather = () => {
        // Check if a location has been entered before making the API request
        if (location) {
            fetchWeatherData();
        }
    };

    return (
        <div className="weather-container flex">
            <h2>Weather Information</h2>
            <div className="weather-inner-container">
                <label htmlFor="location">Enter Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                />
                <button onClick={handleFetchWeather}>Fetch Weather</button>
            </div>
            {weatherData && (
                <div>
                    {/* Display the location name, temperature, and weather condition */}
                    <p className="location">{weatherData.location.name}</p>
                    <p className="temp">{weatherData.current.temp_c.toFixed(1)}</p>
                    <p className="weather">{weatherData.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
