import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "../Screens/ SearchPage";
import HomePage from "../Screens/HomePage";
import LoginPage from "../Screens/LoginPage";
import SignupPage from "../Screens/SignupPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;