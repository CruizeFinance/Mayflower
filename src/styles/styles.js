import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  root: {
    height: "100%"
  },
  background: {
    background: "#fff"
  },
  appBar: {
    boxShadow: "none !important",
    background: "#fff !important"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Cabin",
      color: "#23262F"
    }
  },
  palette: {
    background: {
      default: "#E5E5E5"
    },
    primary: {
      main: "#0059F7"
    },
    secondary: {
      main: "#fff"
    }
  }
});
