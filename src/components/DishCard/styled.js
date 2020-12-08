import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 328px;
    height: 112px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    background: gray;
    display: flex;
`
export const DishImage = styled.div`
    width: 96px;
    height: 112px;
    object-fit: contain;
    background: red;
`
export const CardDetailContainer = styled.div`
    width: 216px;
    height: 112px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 16px;
`
export const Text16 = styled.p`
    font-size: 16px;
`
export const Text12 = styled.p`
    font-size: 12px;
`