import React, { useState } from 'react';
import axios from 'axios';


const Recipe = () => {
    const [userInput, setUserInput] = useState('');
    const [recipeData, setRecipeData] = useState(null);

    const fetchRecipeData = async () => {
        try {
            const response = await axios.get('https://worldwide-recipes1.p.rapidapi.com/api/suggestions', {
                headers: {
                    'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'c20fb3109dmshee723dc24ddcff5p1923dejsn5efadc1ade0a',
                },
                params: {
                    q: userInput,
                },
            });
            setRecipeData(response.data);
        } catch (error) {
            console.error('Error fetching recipe data:', error.message);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
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