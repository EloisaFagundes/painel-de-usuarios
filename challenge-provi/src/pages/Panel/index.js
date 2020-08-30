import React from "react";
import Appbar from "../../components/Appbar";
import { useHistory } from "react-router-dom"

import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

const ContentWrapper = styled.div`
  background-color: #01163e;
  /* background-color: purple; */
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  align-items: center;
  align-self: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ImageCircle = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin: 10vh 0;
`;

const Circle = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Panel() {
  const classes = useStyles();



  const history = useHistory()
  return (
    <>
      <Appbar />
      <ContentWrapper>
        <ImageCircle>
          <Circle />
        </ImageCircle>
        <Typography variant="h3" color='secondary'>Bem-vindo(a) à Provi.</Typography>
        <Button 
        className={classes.margin}
        variant="contained"
        color="primary.light"
        onClick={() => history.push("/painel-detalhe")}>
          Detalhes do financiamento
        </Button>
      </ContentWrapper>
    </>
  );
}

export default Panel;
