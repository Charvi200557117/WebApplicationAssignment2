import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <>
      <div className={`sidebar-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="sidebar">
          <Link to="/"> MDEV 1005 - Assignment 2</Link>
          <Link to="/Weather">Weather</Link>
          <Link to="/Country">Country</Link>
          <Link to="/Recipe">Recipe </Link>
        </div>
      </div>
      <div className="toggle-tab" onClick={toggleDrawer}>
        <p>
          {!isDrawerOpen ? (
            // <FontAwesomeIcon icon={faChevronRight} />
            <h2>vb</h2>
          ) : (
            // <FontAwesomeIcon icon={faChevronLeft} />
            <h2>ghjso</h2>
          )}
        </p>
      </div>
    </>
  );
}

export default Sidebar;
