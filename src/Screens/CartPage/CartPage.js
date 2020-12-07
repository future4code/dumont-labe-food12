import React from 'react'
import { MainDiv, Header, HeaderTitleDiv, AdressInfoDiv, DeliveryAdress, AdressDetail, Title } from './styled';

function CartPage() {
    return(
        <MainDiv>
            <Header>
                <HeaderTitleDiv>
                    <p>Meu Carrinho</p>
                </HeaderTitleDiv>
            </Header>
            <AdressInfoDiv>
                <DeliveryAdress>
                    Endereço de entrega
                </DeliveryAdress>
                <AdressDetail>
                    Rua Labenu, 100
                </AdressDetail>
            </AdressInfoDiv>
            <Title>
                Carrinho Vazio
            </Title>
        </MainDiv>
    )
}

export default CartPage;