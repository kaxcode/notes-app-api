import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./containers/Home";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </App>
);
