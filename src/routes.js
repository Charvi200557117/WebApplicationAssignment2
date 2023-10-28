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
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user-profile" component={Recipe} />
          <Route path="/user-list" component={Weather} />
          <Route path="/financial" component={Country} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
