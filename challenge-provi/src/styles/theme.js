import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(1, 22, 62, 0.64)",
      main: "rgba(1, 22, 62, 1)",
      dark: "rgba(5, 31, 89, 0.99)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(223, 52, 103, 1)",
      main: "rgba(222, 12, 75, 1)",
      dark: "rgba(193, 0, 64, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    button: {
      light: "#323B69",
      main: "#323B69",
      dark: "#323B69",
      contrastText: "#fff",
    }
  },
});
