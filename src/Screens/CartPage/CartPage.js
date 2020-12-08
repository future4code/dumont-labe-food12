import React, { useEffect, useState } from 'react'
import { MainDiv, Header, HeaderTitleDiv, AdressInfoDiv, DeliveryAdress, AdressDetail, Title, SubtotalDiv, SubtotalTitle, SubtotalValue, ShippingDiv, PaymentMethodDiv, PaymentMethodTitle, Hr, ConfirmPayButton, CartFooter, GoHomeDiv, GoCartDiv, GoProfileDiv } from './styled';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import axios from 'axios';

function CartPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [priceToPay, setPriceToPay] = useState(0)

    useEffect(() => {
       getRestaurantDetails()
      }, []);

    const getRestaurantDetails = (() => {
        const body = {
                "products": [{
                    "id": "CnKdjU6CyKakQDGHzNln",
                    "quantity": 10
                }, {
                    "quantity": 1,
                    "id": "KJqMl2DxeShkSBevKVre"
                }],
                "paymentMethod": "creditcard"
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/1/order", {headers:{
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s"
        }} ).then((response) => {
            setProducts(response.data.restaurant.products)
            console.log(response)
        }).catch((error) => {
            alert("Errou!")
            console.error(error)
        })

    })
    return(
        <MainDiv>
            {products && products.map((item) => {
                return(
                    <div>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <img src={item.photoUrl}/>
                    </div>
                )
            })}
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