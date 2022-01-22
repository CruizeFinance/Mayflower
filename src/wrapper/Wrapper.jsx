import { memo, useEffect, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { setBlockData } from "../ContextAPI/ContextApi";
import { injectors } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import { abi as stoploss_contract_abi } from "../Blockchain/Abis/Stoploss.json";
import { CONTRACT_ADDRESS } from "../utils/constants";
import {apyAprApi} from "../utils/Api/api_call.js"
const Wrapper = () => {
  /* context values */
  const [protectedAmount, setProtectedAmount] = useState(0);
  const [type, setType] = useState();
  const [metamaskEvent, setMetamaskEvent] = useState();
  const [stoploss_contract, setstoploss_contract] = useState();
  const [withdraw_amount, setwithdraw_amount] = useState();
  const [userBalance, setuserBalance] = useState(0);
  const [dipValue, setDipValue] = useState();
  const [userInfo, setUserInfo] = useState();
  const { active, library, activate } = useWeb3React();
 
const[usdcapy,setusdcApy] = useState();
const[ethapy,setEthApy] = useState();

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
const apicall  = async (token="USDC",reward="ETH")=>{
const data = await apyAprApi(token,reward);
return data;
}
  const resetValues = () => {
    setMetamaskEvent(undefined);
    setwithdraw_amount(undefined);
    setProtectedAmount(undefined);
    setDipValue(undefined);
    setType("");
  };

  /**
   * @function loadContract -  this will load the Stoploss smart contract.
   *@param stoploss_contract_abi - this is the ABI for the Stoploss Contract.
   *@param CONTRACT_ADDRESS - is the contract Address where we have deployed our Smart Contract.
   *
   */
  const loadContract = async () => {
    // loading smart contract .
    const contract = await new library.eth.Contract(
      stoploss_contract_abi,
      CONTRACT_ADDRESS
    );
    // etting smart contract to Stoploss usestate.
    setstoploss_contract(contract);
  };

  useEffect( async () => {
    if (active) {
      loadContract();
	const data = await apicall();
    setEthApy(data?.ETH?.APY);
    }
  }, [active]);

useEffect(async()=>{
    if(ethapy){
	const data = await apicall("USDC","USDC");
	setusdcApy(data?.USDC?.APY);
	}
},[ethapy])
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
          setMetamaskEvent,
          stoploss_contract,
          setstoploss_contract,
          withdraw_amount,
          setwithdraw_amount,
          userBalance,
          setuserBalance,
          dipValue,
          setDipValue,
          resetValues,
          userInfo,
          setUserInfo,
ethapy,usdcapy
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
