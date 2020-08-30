import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Router from "./routes";
import theme from "./styles/theme";


function App() {

  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </MuiThemeProvider>
  );
}

export default App;
