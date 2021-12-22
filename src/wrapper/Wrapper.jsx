import { memo, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { setBlockData } from "../ContextAPI/ContextApi";
import { injectors } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";

const Wrapper = () => {
  /* context values */
  const [protectedAmount, setProtectedAmount] = useState(0);
  const [type, setType] = useState();
  const [metamaskEvent, setMetamaskEvent] = useState();
  const [stoploss_contract,setstoploss_contract] = useState()
  
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
    <>
      <setBlockData.Provider
        value={{
          protectedAmount,
          setProtectedAmount,
          type,
          setType,
          connect_to_user_wallet,
          metamaskEvent,
          setMetamaskEvent,stoploss_contract,setstoploss_contract
        }}
      >
        <Box style={{ height: "100vh" }}>
          <Header />
          <Toolbar />
          <Content />
        </Box>
      </setBlockData.Provider>
    </>
  );
};

export default memo(Wrapper);
