import React from "react";
import Appbar from "../../components/Appbar";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

import { Typography } from "@material-ui/core";
import { BackgroundStyle, ContentWrapper, ImageCircle, Circle } from "./styles";

function Panel() {
  const history = useHistory();
  return (
    <>
      <Appbar />
      <BackgroundStyle>
        <ContentWrapper>
          <ImageCircle>
            <Circle src={require("../../assets/user-image.jpg")} />
          </ImageCircle>
          <Typography variant="h4" color="secondary" align="center">
            Bem-vindo(a) à Provi.
          </Typography>
          <Button onClick={() => history.push("/painel-detalhe")}>
            Detalhes do empréstimo
          </Button>
        </ContentWrapper>
      </BackgroundStyle>
    </>
  );
}

export default Panel;
