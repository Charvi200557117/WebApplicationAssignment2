import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <>
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
      <div className="toggle-tab" onClick={toggleDrawer}>
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
