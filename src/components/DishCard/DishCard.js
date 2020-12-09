import React from 'react';
import { CardContainer, DishImage, CardDetailContainer, Text16, Text12 } from "./styled";

function DishCard(props) {

    return (
        <CardContainer>
            <DishImage src={props.photoUrl} />
            <CardDetailContainer>
                <Text16>{props.name}</Text16>
                <Text12>{props.description}</Text12>
                <Text16>R${props.price}</Text16>
            </CardDetailContainer>
        </CardContainer>
    );
}

export default DishCard