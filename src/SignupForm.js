import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';

function SignupForm() {
  // State variables to manage email, password, and error
  const [email, setEmail] = useState(''); // Input field for email
  const [password, setPassword] = useState(''); // Input field for password
  const [error, setError] = useState(null); // To store and display any registration errors

  // Initialize Firebase authentication
  const auth = getAuth();

  // Function to handle user registration
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Attempt to create a new user with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // User registration successful
    } catch (error) {
      setError(error.message); // Handle and display any registration errors
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleSignup}>
          {/* Input field for email */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Input field for password */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Display error message if there is an error */}
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          {/* Button to submit the registration form */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            {/* Link to navigate to the login page if the user already has an account */}
            <Link href="/login" variant="body2">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default SignupForm;
