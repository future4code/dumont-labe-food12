import React from "react";
import Logo from "../../img/logo-future-eats-invert.png";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function LoadingPage() {
  return (
    <div>
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default LoadingPage;
