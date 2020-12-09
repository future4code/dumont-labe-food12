import React, { useEffect, useState } from 'react'
import { MainDiv, Header, HeaderTitleDiv, AdressInfoDiv, DeliveryAdress, AdressDetail, Title, Pencil } from './styles';
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';

function PerfilPage() {

    const [profile, setProfile] = useState({});
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        getProfile();
      }, []);

    const getProfile = () => {
        axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,
        {
          headers: {
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
          },
        }
      )
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((error) => {
        alert("Erro ao requisitar os perfis");
      });
    }

    const getOrdersHistory = () => {
        axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history`,
        {
          headers: {
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
          },
        }
      )
      .then((response) => {
        setOrderHistory(response.data.order);
      })
      .catch((error) => {
        alert("Erro ao requisitar os pedidos");
      });
    }

    return(
        <MainDiv>
            <Header>
                <HeaderTitleDiv>
                    <p>Meu perfil</p>
                </HeaderTitleDiv>
            </Header>
            <hr/>
            <div>
                <Pencil>{profile.name}<CreateIcon/></Pencil>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
            </div>
            <AdressInfoDiv>
                <DeliveryAdress>
                    Endereço de entrega <CreateIcon/>
                </DeliveryAdress>
                <AdressDetail>
                    {profile.address}
                </AdressDetail>
            </AdressInfoDiv>
            <Title>
                Histórico de pedidos
            </Title>
            <hr/>
        </MainDiv>
    )
}

export default PerfilPage;