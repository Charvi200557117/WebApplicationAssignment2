import React from "react";
import { useAuth } from "./AuthContext";

function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // or any other placeholder or spinner

  return (
    <div className="d-flex flex-column  justify-content-center align-items-center ">
      <h1>Hi {user.email} You are currently logged in.</h1>
    </div>
  );
}

export default Profile;
