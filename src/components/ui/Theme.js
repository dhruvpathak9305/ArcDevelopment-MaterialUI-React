import { createMuiTheme } from "@material-ui/core/styles";
const arcBlue = "#0b72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
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
    h2: {
      fontfamily: "Railway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: "1.5",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Railway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      borderwidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
