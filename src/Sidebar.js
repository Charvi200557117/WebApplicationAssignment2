import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <>
      {/* Sidebar that contains links to different pages */}
      <div className={`sidebar-drawer ${isDrawerOpen ? "open" : ""}`}>
        <ul className="sidebar" style={{ position: "absolute", left: 0, top: 60 }}>
          <li>
            <Link to="/">MDEV 1005 - Assignment 2</Link>
          </li>
          <li>
            <Link to="/Weather">Weather</Link>
          </li>
          <li>
            <Link to="/Country">Country</Link>
          </li>
          <li>
            <Link to="/Recipe">Recipe</Link>
          </li>
        </ul>
      </div>

      {/* Toggle tab for opening/closing the sidebar */}
      <div className="toggle-tab" onClick={toggleDrawer}>
        {/* 
          Icon to indicate the state of the sidebar (open/closed). 
          It uses Unicode characters for the "hamburger" icon (☰).
          Conditional rendering based on the isDrawerOpen state.
        */}
        {/* <p>
          {!isDrawerOpen ? (
            <h2>☰</h2>
          ) : (
            <h2>☰</h2>
          )}
        </p> */}
      </div>
    </>
  );
}

export default Sidebar;
