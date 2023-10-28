import React from "react";
import { useAuth } from "./AuthContext";

function Profile() {
  const { currentUser, loading } = useAuth(); // Change 'user' to 'currentUser'

  if (loading) return <div>Loading...</div>;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Hi {currentUser.email} You are currently logged in.</h1>
    </div>
  );
}

export default Profile;
