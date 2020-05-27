import { createMuiTheme } from "@material-ui/core/styles";
const arcblue = "#0b72B9";
const arcOrange = "#FFBA60";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcblue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcblue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tabs: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },

    estimate: {
      color: "white",
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      height: "45px",
    },
  },
});
