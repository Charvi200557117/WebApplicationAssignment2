import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Typography, TextField, Button, Grid, Link, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for auto-redirect

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User login successful
      setOpen(true);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleLogin}>
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
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
          >
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