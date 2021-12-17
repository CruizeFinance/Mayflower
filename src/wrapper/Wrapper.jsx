import { memo, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { setBlockData } from "../ContextAPI/ContextApi";
import { injectors } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
const Wrapper = () => {
  /* context values */
  const [assetsAddress, setAssetsAddress] = useState("eth");
  const [price, setPrice] = useState(0);
  const [protectedAmount, setProtectedAmount] = useState(0);
  const [totalLimit, setTotalLimit] = useState(0);
  const [stopLoos_Contract, setstopLoos_Contract] = useState();
  const [type, settype] = useState();
  const [metamaskEvent, setMetamaskEvent] = useState();
  const [history, sethistory] = useState()
  const { activate } = useWeb3React();

  /**
   * @function connect_to_user_wallet - This will connect our  website to the user wallet
   */
  async function connect_to_user_wallet() {
    try {
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }

  return (
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
        connect_to_user_wallet,
        metamaskEvent,
        setMetamaskEvent,
        history, sethistory
      }}
    >
      <Box style={{ height: "100vh" }}>
        <Header />
        <Toolbar />
        <Content />
      </Box>
    </setBlockData.Provider>
  );
};

export default memo(Wrapper);
