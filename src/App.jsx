import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";
import { Web3ReactProvider } from "@web3-react/core";
import { isMobile, isTablet } from "react-device-detect";
import { useState } from "react";
import Web3 from "web3";
import { setBlockData } from "./ContextAPI/ContextApi";
const App = () => {
  
  const [assetsAddress, setAssetsAddress] = useState("eth");
  const [price, setPrice] = useState(0);
  const [protectedAmount, setProtectedAmount] = useState(0);
  const [totalLimit, setTotalLimit] = useState(0);
  const [stopLoos_Contract, setstopLoos_Contract] = useState();
  const [type, settype] = useState();
 let a = 1;
  function getLibrary(provider) {
    return new Web3(provider);
  }

  return isMobile || isTablet ? (
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
      <Web3ReactProvider getLibrary={getLibrary}>
        <setBlockData.Provider
          value={{
            price,
            setPrice,
            protectedAmount,
            setProtectedAmount,
            totalLimit,
            setTotalLimit,
            assetsAddress,
            setAssetsAddress,
            type,
            settype,
            stopLoos_Contract,
            setstopLoos_Contract,
          }}
        >
          <CssBaseline />
          <Wrapper />
        </setBlockData.Provider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
};

export default App;
