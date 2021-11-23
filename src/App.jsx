import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";
import { MoralisProvider } from "react-moralis";
import { isMobile } from "react-device-detect";

const App = () => {
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
        <CssBaseline />
        <Wrapper />
      </ThemeProvider>
  );
};

App = {
// Web3 stuff
  loading: false,
  contracts: {}, 
    
  load: async () => {
      // load app ...
      console.log('Loading app')
      // await App.loadWeb3()
      // await App.loadAccount()
      // await App.loadContract()
      // await App.render()
  },
}
export default App;
