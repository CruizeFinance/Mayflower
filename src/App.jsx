import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";
import { Web3ReactProvider } from "@web3-react/core";
import { isMobile, isTablet } from "react-device-detect";
import Web3 from "web3";
import axios from 'axios'
import {apyAprApi} from "./utils/Api/api_call.js"
const App = () => {
	apyAprApi();
  /**
   * @provider - web library provider
   * function to utilise the web3 library
   */
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
        <CssBaseline />
        <Wrapper />
      </Web3ReactProvider>
    </ThemeProvider>
  );
};

export default App;
