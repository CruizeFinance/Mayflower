import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import { setBlockData } from "../../../ContextAPI/ContextAPI";
import "../../pages.scss";
import Web3 from "web3";
import { useMoralis } from "react-moralis";
import { loadWeb3 } from "../../../Blockchain/LoadSmartContract";
const ConfirmDetails = ({ type }) => {
  const { user } = useMoralis();
  const [useAddress, setuseAddress] = useState();
  // console.log(user.attributes.ethAddress)
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,
    Contract,
    setContract,
  } = useContext(setBlockData);
  console.log(Contract);
  const Confirm = async () => {
    // loading web3 
    loadWeb3();
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setuseAddress(accounts[0]);
    const USDC_ADDRESS = "0xe22da380ee6B445bb8273C81944ADEB6E8450422";
    const WETH_ADDRESS = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
    //converting string to wie 
    const dipositevalue = web3.utils.toBN(web3.utils.toWei(protectedAmount));
   
    const pricelimint = price * 1e8; // have confusion here ->
    let event = await Contract?.methods 
      .stopLoss_deposit(USDC_ADDRESS, WETH_ADDRESS, dipositevalue, pricelimint) //calling the smart contract function that give an error
      .send({ from: accounts[0], value: 0 });
// listeing for event 
    console.log(event);
  };
  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/"}>
          <Sprite id="close" width={18} height={18} />
        </Link>
      </div>
      <Typography variant="h5" fontWeight={"bold"}>
        {type}
      </Typography>
      <Typography variant="subtitle1">
        <Sprite id="eth" width={16} height={16} /> ETH (Ether)
      </Typography>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Price Limit</Typography>
          <Typography variant="body2">3289.34 USDC</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Protected Amount</Typography>
          <Typography variant="body2">0.03 ETH</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Total Limit</Typography>
          <Typography variant="body2">98.86 USDC</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Transaction Fee</Typography>
          <Typography variant="body2">0.3%</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Slippage Allowed</Typography>
          <Typography variant="body2">0.5%</Typography>
        </div>
      </div>
      <Link
        to={`/created?type=${type?.toLowerCase()}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button className={`full-width`} onClick={Confirm}>
          Confirm Order
        </Button>
      </Link>
    </div>
  );
};

export default ConfirmDetails;
