import React, { useState } from 'react';
import axios from 'axios';

const Recipe = () => {
    // State variables to store user input and recipe data
    const [userInput, setUserInput] = useState('');
    const [recipeData, setRecipeData] = useState(null);

    // Function to fetch recipe data from an API
    const fetchRecipeData = async () => {
        try {
            // Send a GET request to the recipe API
            const response = await axios.get('https://worldwide-recipes1.p.rapidapi.com/api/suggestions', {
                headers: {
                    'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'c20fb3109dmshee723dc24ddcff5p1923dejsn5efadc1ade0a',
                },
                params: {
                    q: userInput, // Use the user's input as a query parameter
                },
            });
            
            // Set the recipe data received from the API response
            setRecipeData(response.data);
        } catch (error) {
            console.error('Error fetching recipe data:', error.message);

            if (error.response) {
                // Handle different types of errors if they occur
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    return (
        <div>
            <h2>Recipes</h2>
            <div>
                <label>Enter Recipe:</label>
                <input
                    type="text"
                    id="recipeInput"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={fetchRecipeData}>Follow Recipe</button>
            </div>
            {recipeData && (
                <div>
                    <p>Ingredients : <br/><br/>{recipeData.results.ingredients.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default Recipe;
