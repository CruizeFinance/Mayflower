import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { stopLossAbi } from "../../../Blockchain/Abis/Stoploss_json_abi";
const ConfirmDetails = ({ type }) => {
  const { price, protectedAmount, web3, address, settype } = useContext(setBlockData);
  settype(type);
  let dip_amount = protectedAmount * price;
  const contractAddress = "0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d";
  const depositStop = async (
    address_USDC,
    assetToDeposit,
    _value,
    dip_amount
  ) => {
    const contract = await new web3.eth.Contract(stopLossAbi, contractAddress);
    var meth = contract.methods;
    console.log(contract);
    console.log(meth);
    if (address != null) {
      let event = await meth
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          web3.utils.toBN(_value * 1e18),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: address, value: 0 });
      console.log(event);
    }
  };
  const depositLimit = async (
    addressDesiredAsset,
    USDCToDeposit,
    _value,
    dip_amount,
    addressOfUser
  ) => {
    const contract = await new web3.eth.Contract(stopLossAbi, contractAddress);
    var meth = contract.methods;
    if (address != null) {
      let event = await meth
        .limitBuy_deposit(
          addressDesiredAsset,
          USDCToDeposit,
          web3.utils.toBN(_value * 1e8),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: addressOfUser, value: 0 });
      console.log(event);
    }
  };
  const ls = async (e) => {
    if (type == "Protect") {
      depositStop(
        "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
        "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        protectedAmount,
        dip_amount,
        address
      );
    } else {
      depositLimit(
        "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
        "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
        1000,
        500,
        address
      );
    }
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
        <Sprite id="eth" width={16} height={16} /> WETH (WEther)
      </Typography>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Price Limit</Typography>
          <Typography variant="body2">{price} USDC</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Protected Amount</Typography>
          <Typography variant="body2">{protectedAmount} WETH </Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Total Limit</Typography>
          <Typography variant="body2">
            {price * protectedAmount} USDC
          </Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {/* <div className={`confirm`}>
          <Typography variant="body2">Transaction Fee</Typography>
          <Typography variant="body2">0.3%</Typography>1000000
          <Typography variant="body2">0.5%</Typography>
        </div> */}
      </div>
      <Link
        to={`/created?type=${type?.toLowerCase()}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button className={`full-width`} onClick={ls}>
          Confirm Order
        </Button>
      </Link>
    </div>
  );
};

export default ConfirmDetails;
