import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UserRoute from './UserInterface/Route';
import AdminRoute from './AdminInterface/Route';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminRoute} />
          <Route path="/" component={UserRoute} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
