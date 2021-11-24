import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";
import {setBlockData} from "../src/ContextAPI/ContextAPI";
import { isMobile } from "react-device-detect";
import { useState } from "react";

const App = () => {
  // setting up the required data 
  const [price, setPrice] = useState(0)
  const [protectedAmount, setProtectedAmount] = useState(0)
  const [totalLimit, setTotalLimit] = useState(0)
  return isMobile ? (
    <div className={`mobile`}>
      <img
        src={"assets/images/cruize.svg"}
        alt="Cruize-Logo"
        width={70}
        height={70}
      />
      <Typography variant="h6">
        Please use a desktop/laptop to view the app
      </Typography>
    </div>
  ) : (
    <ThemeProvider theme={theme}>
      <setBlockData.Provider value={{price,setPrice,protectedAmount, setProtectedAmount,totalLimit, setTotalLimit}}>
        <CssBaseline />
        <Wrapper />
      </setBlockData.Provider>
    </ThemeProvider>
  );
};

export default App;
