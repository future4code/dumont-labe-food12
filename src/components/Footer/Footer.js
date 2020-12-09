import React from "react";
import { MainDiv, GoCartDiv, GoHomeDiv, GoProfileDiv } from "./styled";
import theme from "../../constants/theme";
import { Route, Switch, useHistory } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

function Footer() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/feed");
  };

  const goToCartPage = () => {
    history.push("/cart");
  };

  const goToProfilePage = () => {
    history.push("/perfil");
  };
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <MainDiv>
          <Route exact path={("/login", "/", "/feed")}>
            <GoHomeDiv onClick={goToHomePage}>
              <HomeOutlinedIcon color="primary" />
            </GoHomeDiv>
            <GoCartDiv onClick={goToCartPage}>
              <ShoppingCartOutlinedIcon />
            </GoCartDiv>
            <GoProfileDiv onClick={goToProfilePage}>
              <PersonOutlineOutlinedIcon />
            </GoProfileDiv>
          </Route>
          <Route exact path="/cart">
            <GoHomeDiv onClick={goToHomePage}>
              <HomeOutlinedIcon />
            </GoHomeDiv>
            <GoCartDiv onClick={goToCartPage}>
              <ShoppingCartOutlinedIcon color="primary" />
            </GoCartDiv>
            <GoProfileDiv onClick={goToProfilePage}>
              <PersonOutlineOutlinedIcon />
            </GoProfileDiv>
          </Route>
          <Route exact path="/perfil">
            <GoHomeDiv onClick={goToHomePage}>
              <HomeOutlinedIcon />
            </GoHomeDiv>
            <GoCartDiv onClick={goToCartPage}>
              <ShoppingCartOutlinedIcon />
            </GoCartDiv>
            <GoProfileDiv onClick={goToProfilePage}>
              <PersonOutlineOutlinedIcon color="primary" />
            </GoProfileDiv>
          </Route>
        </MainDiv>
      </Switch>
    </ThemeProvider>
  );
}

export default Footer;
