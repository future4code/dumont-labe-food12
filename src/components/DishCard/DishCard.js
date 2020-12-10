import React, { useState } from 'react';
import { CardContainer, DishImage, CardDetailContainer, Text16, Text12, CardActionContainer, ModalBodyContainer, StyledSelect } from "./styled";
import { Button, MenuItem, Modal } from '@material-ui/core';

function DishCard(props) {
    const [open, setOpen] = useState(false)
    const [productQuantity, setProductQuantity] = useState([]);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleQuantityChange = (event) => {
        setProductQuantity(event.target.value);
    };

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
            <Button color="primary">adicionar ao carrinho</Button>
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
                <button>quantidade</button>
                <button onClick={props.defineProduct}>adicionar</button>
                <div>
                    <button onClick={handleOpenModal}>
                        open modal
                    </button>
                    <Modal open={open} onClose={handleCloseModal} >
                        {modalBody}
                    </Modal>
                </div>
            </CardActionContainer>
        </CardContainer>
    );
}

export default DishCard