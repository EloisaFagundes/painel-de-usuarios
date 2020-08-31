import styled from "styled-components";

export const BackgroundStyle = styled.body`
  background-color: #01163e;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  @media(max-width: 1200 px){
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const GraphicWrapper = styled.div`
  margin: 2vw;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const AsideWrapper = styled.div`
  background-color: #eee;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 12px ;
  text-decoration: none;
  width: 600px;
  height: 100vh;

  @media (max-width: 1200px) {
    width: 100vw;
    height: 60vh;
    padding: 30px;
  }
`;
