import React, { useEffect, useState } from "react";
import {
  MainDiv,
  AdressInfoDiv,
  DeliveryAdress,
  AdressDetail,
  Title,
  Pencil,
} from "./styles";
import CreateIcon from "@material-ui/icons/Create";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function PerfilPage() {
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  const getOrdersHistory = () => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setOrderHistory(response.data.order);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  return (
    <MainDiv>
      <Header title={"Meu Perfil"} />
      <hr />
      <div>
        <Pencil>
          {profile.name}
          <CreateIcon />
        </Pencil>
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </div>
      <AdressInfoDiv>
        <DeliveryAdress>
          Endereço de entrega <CreateIcon />
        </DeliveryAdress>
        <AdressDetail>{profile.address}</AdressDetail>
      </AdressInfoDiv>
      <Title>Histórico de pedidos</Title>
      <Footer />
    </MainDiv>
  );
}

export default PerfilPage;
