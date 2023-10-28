import React from "react";
import { useAuth } from "./AuthContext";

function Profile() {
  // Get the currentUser and loading state from the AuthContext
  const { currentUser, loading } = useAuth();

  // If the app is still loading the user data, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // When user data is available, display a welcome message
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Hi {currentUser.email} You are currently logged in.</h1>
    </div>
  );
}

export default Profile;
