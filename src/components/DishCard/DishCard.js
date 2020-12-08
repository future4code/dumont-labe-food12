import React from 'react';
import { CardContainer, DishImage, CardDetailContainer, Text16, Text12 } from "./styled";

function DishCard() {

    return (
        <CardContainer>
            <DishImage></DishImage>
            <CardDetailContainer>
                <Text16>nome do prato</Text16>
                <Text12>ingredientes</Text12>
                <Text16>preço</Text16>
            </CardDetailContainer>
        </CardContainer>
    );
}

export default DishCard