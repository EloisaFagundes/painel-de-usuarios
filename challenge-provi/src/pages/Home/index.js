import React from "react";
import Appbar from "../../components/Appbar";
import { useHistory } from "react-router-dom"

import styled from "styled-components";
import Button from "../../components/Button"
import { Typography } from "@material-ui/core";



const BackgroundStyle = styled.body`
  background-color: #01163e;
  height: 100vh;
  margin: 0;
  padding:0;
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  background-color: #01163e;
  /* background-color: purple;  */
  /* padding: 0.5rem; */
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

const ImageCircle = styled.div`
  background-color: #c0c0c0;
  border-radius: 50%;
  border: solid 1px "rgba(1, 22, 62, 0.64)";
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin: 10vh 2vw;
`;

const Circle = styled.img`
  position: absolute;
  bottom: 0;
  width: 105%;
`;

function Panel() {
 
  const history = useHistory()
  return (
    <>
      <Appbar />
      <BackgroundStyle>
      <ContentWrapper>
        <ImageCircle>
        <Circle src={require('../../assets/user-image.jpg')} />
        </ImageCircle>
        <Typography variant="h4" color='secondary' align="center">Bem-vindo(a) à Provi.</Typography>
        <Button 
        onClick={() => history.push("/painel-detalhe")}>
          Detalhes do empréstimo
        </Button>
      </ContentWrapper>
      </BackgroundStyle>
    </>
  );
}

export default Panel;
