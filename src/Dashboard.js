import React, { useEffect, useState } from "react";
// import { useUserContext } from "./userContext";
import Animal from "./Animal";
import Weather from "./Weather";
import Country from "./Country";
import Sidebar from "./Sidebar";

function Dashboard({ isDrawerOpen, toggleDrawer }) {
//   const { user, loading } = useUserContext();
//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <div className="spinner-border" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }
  return (
    // user && (
      <div>
        <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div
          className={`main-content container-fluid ${
            isDrawerOpen ? "sidebar-open" : ""
          }`}
        >
          <div className="dashboard-container container-fluid">
            <div className="widget-profile rounded-pill">
              <Animal />
            </div>
            <div className="widget-user-list rounded">
              <Weather />
            </div>
            <div className="widgets">
              <div className="widget-placeholder">
                <Country />
              </div>
              </div>
            </div>
          </div>
        </div>
    )
//   );
}

export default Dashboard;
