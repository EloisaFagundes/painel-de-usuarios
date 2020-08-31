import styled from "styled-components";

export const LogoStyled = styled.img`
  height: 8vh;
`;

export const MenuWrapperElements = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 2%;
  padding-right: 5%;
  border-bottom: 2px solid var(--primary);
  @media (max-width: 800px) {
    height: 70px;
    justify-content: center;
  }
`;


