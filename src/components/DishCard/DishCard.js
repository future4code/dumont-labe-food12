import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { CardContainer, DishImage, CardDetailContainer, Text16, Text12, CardActionContainer, ModalBodyContainer, StyledSelect } from "./styled";
import { goToCart } from '../../route/coordinator';
import { Button, MenuItem, Modal } from '@material-ui/core';

function DishCard(props) {
    const history = useHistory();
    const [openModal, setOpenModal] = useState(false)
    const [productQuantity, setProductQuantity] = useState(0);
    const [productId, setProductId] = useState([]);
    const [productsInCart, setProductsInCart] = useState([]);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleQuantityChange = (event) => {
        setProductQuantity(event.target.value);
    };

    const defineProductId = () => {
        setProductId(props.id)
    }

    console.log("quantidade", productQuantity)
    console.log("id", productId)
    console.log("id do restaurante", props.restaurantId)

    const handleAddToCart = (props) => {
        const restaurantId = props.restaurantId
        const cartItem = {productQuantity, productId, restaurantId}
        goToCart(history)
    }

    const modalBody = (
        <ModalBodyContainer>
            <p>Selecione a quantidade desejada</p>
            <div>
                <StyledSelect
                    id="demo-simple-select-disabled"
                    value={productQuantity}
                    onChange={handleQuantityChange}
                >
                    <MenuItem value="">
                        <em>0</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </StyledSelect>
            </div>
            <Button color="primary" onClick={handleAddToCart}>adicionar ao carrinho</Button>
        </ModalBodyContainer>
    )

    return (
        <CardContainer>
            <DishImage src={props.photoUrl} />
            <CardDetailContainer>
                <Text16>{props.name}</Text16>
                <Text12>{props.description}</Text12>
                <Text16>R${props.price}</Text16>
            </CardDetailContainer>
            <CardActionContainer>
                <button>{productQuantity}</button>
                <div onClick={defineProductId}>
                    <button onClick={handleOpenModal}>
                        Adicionar
                    </button>
                    <Modal open={openModal} onClose={handleCloseModal} >
                        {modalBody}
                    </Modal>
                </div>
            </CardActionContainer>
        </CardContainer>
    );
}

export default DishCard