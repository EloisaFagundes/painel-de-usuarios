import styled from "styled-components";

export const BackgroundStyle = styled.body`
  background-color: #01163e;
  height: 100vh;
  margin: 0;
  padding:0;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  background-color: #01163e;
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  align-items: center;
  align-self: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const ImageCircle = styled.div`
  background-color: #c0c0c0;
  border-radius: 50%;
  border: solid 1px "rgba(1, 22, 62, 0.64)";
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin: 10vh 2vw;
`;

export const Circle = styled.img`
  position: absolute;
  bottom: 0;
  width: 105%;
`;