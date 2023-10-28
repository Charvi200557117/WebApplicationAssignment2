import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Typography, TextField, Button, Grid, Link, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for auto-redirect

function LoginForm() {
  // State variables to store user input, error message, and Snackbar open status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  // Initialize Firebase Auth and get the navigate function for redirection
  const auth = getAuth();
  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);

      // User login successful, set the Snackbar to open and redirect to the dashboard
      setOpen(true);
      navigate('/dashboard');
    } catch (error) {
      // Handle and display any login errors
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleLogin}>
          {/* Input fields for email and password */}
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
          {error && <Typography variant="body2" color="error">{error}</Typography>}

          {/* Login button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        <Grid container justifyContent="flex-end">
          <Grid item>
            {/* Link to the signup page if the user doesn't have an account */}
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
          >
            {/* Snackbar to show a success message on successful login */}
            <Alert onClose={() => navigate('/')} severity="success">
              Login successful!
            </Alert>
          </Snackbar>
        </Grid>
      </div>
    </Container>
  );
}

export default LoginForm;
