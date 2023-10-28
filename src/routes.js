import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Recipe from './Recipe';
import Weather from './Weather';
import Country from './Country';

function Routes() {
  return (
    <Router>
      <div>
        {/* Navigation links for different pages */}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/user-profile">User Profile</Link>
            </li>
            <li>
              <Link to="/user-list">User List</Link>
            </li>
            <li>
              <Link to="/financial">Financial Information</Link>
            </li>
          </ul>
        </nav>

        {/* Routing configuration for different pages */}
        <Switch>
          {/* Exact path for the Dashboard page */}
          <Route exact path="/" component={Dashboard} />

          {/* Route for the User Profile page */}
          <Route path="/user-profile" component={Recipe} />

          {/* Route for the User List page (Weather) */}
          <Route path="/user-list" component={Weather} />

          {/* Route for the Financial Information page (Country) */}
          <Route path="/financial" component={Country} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
