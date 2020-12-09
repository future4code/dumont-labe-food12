import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { MainDiv, HeaderTitleDiv } from "./styled";

function Header() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <HeaderTitleDiv>
        <Switch>
          <Route exact path="/cart">
            <button onClick={goBack}>voltar</button>
            <p>Meu carrinho</p>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signup">
            <p>Cadastrar</p>
          </Route>
        </Switch>
      </HeaderTitleDiv>
    </MainDiv>
  );
}

export default Header;
