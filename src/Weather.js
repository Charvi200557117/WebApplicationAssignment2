import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = 'c20fb3109dmshee723dc24ddcff5p1923dejsn5efadc1ade0a';

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                headers: {
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                    'X-RapidAPI-Key': apiKey,
                },
                params: {
                    q: location, // Assuming 'q' is the query parameter for location
                },
            });

            console.log('Response Headers:', response.headers);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleFetchWeather = () => {
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
                    <p className="location">{weatherData.location.name}</p>
                    <p className="temp">{weatherData.current.temp_c.toFixed(1)}</p>
                    <p className="weather">{weatherData.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;