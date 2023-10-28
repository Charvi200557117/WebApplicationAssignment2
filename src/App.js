import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';
import firebaseConfig from './firebaseConfig';

import { AuthProvider } from './AuthContext'; // Import the AuthProvider

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Home from './Home';
import Dashboard from './Dashboard';
import Weather from './Weather';
import Recipe from './Recipe';
import Country from './Country';
import Profile from './Profile';
import Tools from './Tools';

function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My Firebase Auth App</Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 20 }}>
                Home
              </Link>
              <Link to="profile" style={{ color: 'inherit', textDecoration: 'none', marginRight: 20 }}>
              Profile
              </Link>
              <Link to="login" style={{ color: 'inherit', textDecoration: 'none', marginRight: 20 }}>
                Login
              </Link>
              <Link to="tools" style={{ color: 'inherit', textDecoration: 'none', marginRight: 20 }}>
                Tools
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<LoginForm />} />
                  <Route path="signup" element={<SignupForm />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="Weather" element={<Weather />} />
                  <Route path="Country" element={<Country />} />
                  <Route path="Recipe" element={<Recipe />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="tools" element={<Tools />} />
                </Routes>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
