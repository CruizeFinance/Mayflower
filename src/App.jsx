import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "./styles/styles";
import Wrapper from "./wrapper/Wrapper";
import "./styles/app.scss";

import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import useStoreApi from "./ContextAPI/StoreApi";
import Web3 from "web3";
import { setBlockData } from "./ContextAPI/ContextApi";

const App = () => {
  const [assetsAddress, setAssetsAddress] = useState("eth");
  const [price, setPrice] = useState(0);
  const [protectedAmount, setProtectedAmount] = useState(0);
  const [totalLimit, setTotalLimit] = useState(0);

  const [address, setaddress] = useState(null)
  const [web3, setweb3] = useState()
  const [type, settype] = useState()
  // const {address, balance, message, setBalance, setAddress} = useStoreApi(); To be removed
  const loadWeb3 = async () => {
  
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); 
    }}


  const loadContract = async () => {
    const web1 = window.web3;
    setweb3(web1)
  let accounts =  await web1.eth.getAccounts()
  console.log(accounts)
  setaddress(accounts[0]);

  };
  
  
useEffect(() => {
  loadWeb3()

    loadContract()


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
      <setBlockData.Provider
        value={{
          price,
          setPrice,
          protectedAmount,
          setProtectedAmount,
          totalLimit,
          setTotalLimit,
          assetsAddress,
          setAssetsAddress,web3,address,type, settype
        }}
      >
        <CssBaseline />
        <Wrapper />
      </setBlockData.Provider>
    </ThemeProvider>
  );
};

export default App;
