import React from "react";
import { ActiveOrderContainer } from "./styles";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

function ActiveOrder() {
  return (
    <ActiveOrderContainer>
      <div>
        <AccessTimeIcon />
      </div>
      <div>
        <p>Pedido em andamento</p>
        <p>Nome do restaurante</p>
        <p>SUBTOTAL R$20,00</p>
      </div>
    </ActiveOrderContainer>
  );
}

export default ActiveOrder;
