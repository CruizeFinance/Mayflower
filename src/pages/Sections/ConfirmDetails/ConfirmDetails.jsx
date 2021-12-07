import { Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import {
  confirm_details_deposit_limit_abi,
  confirm_details_deposit_stop_abi,
  CONTRACT_ADDRESS
} from "../../../utils/constants";

const ConfirmDetails = ({ type }) => {
  const { price, protectedAmount, web3, address } = useContext(setBlockData);
  let dip_amount = protectedAmount * price;

  const depositStop = async (
    address_USDC,
    assetToDeposit,
    _value,
    dip_amount
  ) => {
    const contract = await new web3.eth.Contract(
      confirm_details_deposit_stop_abi,
      CONTRACT_ADDRESS
    );
    var meth = contract.methods;
    if (address != null) {
      let event = await meth
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          web3.utils.toBN(_value * 1e18),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: address, value: 0 });
    }
  };
  const depositLimit = async (
    addressDesiredAsset,
    USDCToDeposit,
    _value,
    dip_amount,
    addressOfUser
  ) => {
    const contract = await new web3.eth.Contract(
      confirm_details_deposit_limit_abi,
      CONTRACT_ADDRESS
    );
    var meth = contract.methods;
    if (address != null) {
      let event = await meth
        .limitBuy_deposit(
          addressDesiredAsset,
          USDCToDeposit,
          web3.utils.toBN(_value * 1e6),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: addressOfUser, value: 0 });
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
        price,
        dip_amount,
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
