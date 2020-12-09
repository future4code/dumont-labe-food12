import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { MainDiv, HeaderTitleDiv } from "./styled";

import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

function Header({ showBackButton, title }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <HeaderTitleDiv>
        {showBackButton && <ArrowBackIosOutlinedIcon onClick={goBack} />}
        {title}
      </HeaderTitleDiv>
    </MainDiv>
  );
}

export default Header;
