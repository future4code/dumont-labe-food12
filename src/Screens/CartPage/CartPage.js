import React from 'react'
import { MainDiv, Header, HeaderTitleDiv, AdressInfoDiv, DeliveryAdress, AdressDetail, Title, SubtotalDiv, SubtotalTitle, SubtotalValue, ShippingDiv, PaymentMethodDiv, PaymentMethodTitle, Hr, ConfirmPayButton, CartFooter, GoHomeDiv, GoCartDiv, GoProfileDiv } from './styled';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

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
            <ShippingDiv>
                <p>Frete R$0,00</p>
            </ShippingDiv>
            <SubtotalDiv>
                <SubtotalTitle>
                    SUBTOTAL
                </SubtotalTitle>
                <SubtotalValue>
                    R$ 00,00
                </SubtotalValue>
            </SubtotalDiv>
            <PaymentMethodDiv>
                <PaymentMethodTitle>
                    Forma de Pagamento
                </PaymentMethodTitle>
                <Hr/>
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="money" />}
                    label="Dinheiro"
                />
                <FormControlLabel
                    control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="creditCard" />}
                    label="Cartão de crédito"
                />
                <ConfirmPayButton>
                    Confirmar
                </ConfirmPayButton>
            </PaymentMethodDiv>
            <hr/>
            <CartFooter>
                <GoHomeDiv>
                
                </GoHomeDiv>
                <GoCartDiv>
                    
                </GoCartDiv>
                <GoProfileDiv>

                </GoProfileDiv>
            </CartFooter>
        </MainDiv>
    )
}

export default CartPage;