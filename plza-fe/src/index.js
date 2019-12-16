import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Base app components
import Header from "./components/main/Header";
import NoMatch from "./components/main/NoMatch";

// Nested routes
import Users from "./components/users/UserController";
import Locations from "./components/locations/LocationController";
import Pages from "./components/staticPages/PageController";

// Home page
import Home from "./components/main/Home";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router>
    <Header />

    <Switch>
      <Route path="/users">
        <Users />
      </Route>

      <Route path="/locations">
        <Locations />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pages">
        <Pages />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
