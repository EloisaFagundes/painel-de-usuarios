import React from "react";
import { useHistory } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Button from "../Button";

import styled from "styled-components";

const LogoStyled = styled.img`
  height: 8vh;
`;

const IconsToolbarWrapper = styled.div`
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
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }
  @media (max-width: 800px) {
    height: 70px;
    justify-content: center;
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
`;

function Appbar({page}) {
  const history = useHistory();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconsToolbarWrapper>
          <LogoStyled src={require("../../assets/logo-provi.jpg")} />
          {page === "detail" &&
          <Button onClick={() => history.push("/")}>
             Home
          </Button>
          }
        </IconsToolbarWrapper>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
