import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils";

import Home from "../pages/home";
import Login from "../pages/login";

const PrivateRoute = ({ component: Component, props }) => (
  <Route
    {...props}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={Home} />
  </Switch>
);

export default Routes;
