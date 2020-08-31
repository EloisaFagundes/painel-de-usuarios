import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";

import { Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { LogoStyled, MenuWrapperElements } from "./styles";


function Appbar({ page }) {
  const history = useHistory();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <MenuWrapperElements>
          <LogoStyled src={require("../../assets/logo-provi.jpg")} />
          {page === "detail" && (
            <Button onClick={() => history.push("/")}>Home</Button>
          )}
        </MenuWrapperElements>
      </Toolbar>
    </AppBar>
  );
}
export default Appbar;
