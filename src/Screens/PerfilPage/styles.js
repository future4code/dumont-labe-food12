import styles from "styled-components"

export const MainDiv = styles.div`
    width: 360px;
    height: 640px;
`

export const Header = styles.header`
    display: flex;
    width: 360px;
    height: 64px;
    justify-content: center;
    align-items: center;
`

export const HeaderTitleDiv = styles.div`
    display: flex;
    justify-content: center;
    width: 175px;
    height: 44px;
`

export const AdressInfoDiv = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 360px;
    height: 76px;
    background-color: #eeeeee;
`

export const DeliveryAdress = styles.p`
    display: flex;
    width: 328px;
    height: 18px;
    margin: 0 0 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: grey;
    justify-content: space-between;
`

export const AdressDetail = styles.p`
    display: flex;
    width: 328px;
    height: 18px;
    margin: 8px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`

export const Title = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 42px;
    margin-top: 8px;
`

export const Pencil = styles.p`
    display: flex;
    justify-content: space-between;
`

export const GoEditProfileDiv = styles.div`
  cursor: pointer;
  outline: none;

  &:hover {
    color: #5cb646;
  }
`;

export const GoEditAddressDiv = styles.div`
  cursor: pointer;
  outline: none;

  &:hover {
    color: #5cb646;
  }
`;