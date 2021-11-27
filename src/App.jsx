import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";

import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import useStoreApi from "./ContextAPI/StoreApi";
import Web3 from "web3";

const App = () => {
  const {address, balance, message, setBalance, setAddress} = useStoreApi();
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); 
    }}
const [web3, setweb3] = useState()
  const loadContract = async () => {
    loadWeb3();
    const web = window.web3;
    // loading  the smart contract
    // scan = new web3.eth.Contract(Stoploss.abi, process.env.STOP_LOOST_CONTRACT);
    /** for developer  only */
    // console.log(scan);
    setweb3(web)
    console.log("successfully get contreact");
  };
  const setUserAccount = async () => {
    if(window.ethereum){
      await window.ethereum.enable();
      web3?.eth.getAccounts().then(accounts => {
        
        setAddress(accounts[0]);
        setUserBalance(accounts[0]);
      });
  let account =  await  web3?.eth.getAccounts()
  console.log(account)
    }
  };

  const setUserBalance = async (fromAddress) => {
    await web3.eth.getBalance(fromAddress).then(value => {
      const credit = web3.utils.fromWei(value, 'ether')
      setBalance(credit)
    });
  };
useEffect(() => {
  loadWeb3()
  loadContract()
  setUserAccount()

}, [])
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

export default App;
