import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 76px;
  background-color: #1ea4ce;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Basket = styled.div`
  background-color: #147594;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 24px;
  position: absolute;
  right: 7%;
  top: 0px;
`;

export const Price = styled.span`
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
`;
