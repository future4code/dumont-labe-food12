import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../Screens/LoginPage/LoginPage";
import SignupPage from "../Screens/SignUpPage/SignUpPage";
import FeedPage from "../Screens/FeedPage/FeedPage";
import RegisterAddressPage from "../Screens/RegisterAddressPage/RegisterAddressPage";
import RestaurantPage from "../Screens/RestaurantPage/RestaurantPage";
import CartPage from "../Screens/CartPage/CartPage";
import PerfilPage from "../Screens/PerfilPage/PerfilPage";
import EditPerfilPage from "../Screens/EditPerfilPage/EditPerfilPage";
import EditAddressPage from "../Screens/EditAddressPage/EditAddressPage";

function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FeedPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/signup/address">
          <RegisterAddressPage />
        </Route>
        <Route exact path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/perfil">
          <PerfilPage />
        </Route>
        <Route exact path="/perfil/edit">
          <EditPerfilPage />
        </Route>
        <Route exact path="/perfil/address">
          <EditAddressPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;