import React from 'react'
import { MainDiv, Header, HeaderTitleDiv, AdressInfoDiv, DeliveryAdress, AdressDetail, Title, Pencil } from './styles';
import CreateIcon from '@material-ui/icons/Create';

function PerfilPage() {
    return(
        <MainDiv>
            <Header>
                <HeaderTitleDiv>
                    <p>Meu perfil</p>
                </HeaderTitleDiv>
            </Header>
            <hr/>
            <div>
                <Pencil>Bruna Oliveira <CreateIcon/></Pencil>
                <p>bruna.o@gmail.com</p>
                <p>3333-3333</p>
            </div>
            <AdressInfoDiv>
                <DeliveryAdress>
                    Endereço de entrega <CreateIcon/>
                </DeliveryAdress>
                <AdressDetail>
                    Rua Labenu, 100
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