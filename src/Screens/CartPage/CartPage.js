import React, { useEffect, useState } from "react";
import {
  MainDiv,
  ApplicationDiv,
  AdressInfoDiv,
  DeliveryAdress,
  AdressDetail,
  Title,
  SubtotalDiv,
  SubtotalTitle,
  SubtotalValue,
  ShippingDiv,
  PaymentMethodDiv,
  PaymentMethodTitle,
  Hr,
  ConfirmPayButton,
} from "./styled";
import Header from "../../components/Header/Header";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

function CartPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [priceToPay, setPriceToPay] = useState(0);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = () => {
    const body = {
      products: [
        {
          id: "CnKdjU6CyKakQDGHzNln",
          quantity: 10,
        },
        {
          quantity: 1,
          id: "KJqMl2DxeShkSBevKVre",
        },
      ],
      paymentMethod: "creditcard",
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/1/order",
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setProducts(response.data.restaurant.products);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <MainDiv>
      <ApplicationDiv>
        {products &&
          products.map((item) => {
            return (
              <div>
                <p>{item.price}</p>
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <img src={item.photoUrl} />
              </div>
            );
          })}
        <Header title={"Meu carrinho"} showBackButton />
        <AdressInfoDiv>
          <DeliveryAdress>Endereço de entrega</DeliveryAdress>
          <AdressDetail>Rua Labenu, 100</AdressDetail>
        </AdressInfoDiv>
        <Title>Carrinho Vazio</Title>
        <ShippingDiv>
          <p>Frete R$0,00</p>
        </ShippingDiv>
        <SubtotalDiv>
          <SubtotalTitle>SUBTOTAL</SubtotalTitle>
          <SubtotalValue>R$ 00,00</SubtotalValue>
        </SubtotalDiv>
        <PaymentMethodDiv>
          <PaymentMethodTitle>Forma de Pagamento</PaymentMethodTitle>
          <Hr />
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                name="money"
              />
            }
            label="Dinheiro"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                name="creditCard"
              />
            }
            label="Cartão de crédito"
          />
          <ConfirmPayButton>Confirmar</ConfirmPayButton>
        </PaymentMethodDiv>
      </ApplicationDiv>
      <Footer />
    </MainDiv>
  );
}

export default CartPage;
