import styled from "styled-components";

export const MainDiv = styled.div`
  width: 360px;
  height: 100px;
`;

export const Header = styled.header`
  display: flex;
  width: 360px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const AdressInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eeeeee;
`;

export const DeliveryAdress = styled.p`
  display: flex;
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: grey;
  justify-content: space-between;
`;

export const AdressDetail = styled.p`
  display: flex;
  width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 42px;
  margin-top: 8px;
`;

export const Pencil = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const GoEditProfileDiv = styled.div`
  cursor: pointer;
  outline: none;

  &:hover {
    color: #5cb646;
  }
`;

export const GoEditAddressDiv = styled.div`
  cursor: pointer;
  outline: none;

  &:hover {
    color: #5cb646;
  }
`;
