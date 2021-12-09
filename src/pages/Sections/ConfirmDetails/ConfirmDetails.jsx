import { Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { USDC_ADDRESS, WETH_ADDRESS } from "../../../utils/constants";
import { useWeb3React } from "@web3-react/core";
const ConfirmDetails = ({ type }) => {
  // getting context
  const { price, protectedAmount, stopLoos_Contract } =
    useContext(setBlockData);
  /** @dev account  contain  user wallet address ,  library is the web3 */
  const { account, library } = useWeb3React();
  //calculating dip_amount
  let dip_amount = protectedAmount * price;
  /**
   * @function depositStope -
   * @param { USDC token address } address_USDC
   * @param {The assets User want to deposit i.e. (link, weth ,eth ,dai) etc } assetToDeposit
   * @param { the amount of assets  that user want to Protect} _value
   * @param {} dip_amount
   */
  const depositStop = async (
    address_USDC,
    assetToDeposit,
    _value,
    dip_amount
  ) => {
    // meth will contain all the method that our smart contract have.
    var meth = stopLoos_Contract.methods;
    /** call the stopLoss_deposite function from the smart contract if  the user is connected with user wallet. */
    if (account != null) {
      console.log(meth);
      await meth
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          library.utils.toBN(_value * 1e18),
          library.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: account, value: 0 });
    }
  };

  /**
   * @function depositLimit -
   * @param { } addressDesiredAsset
   * @param {Address of the USDC Token } USDCToDeposit
   * @param {the amount that user want to Buy} _value
   * @param { } dip_amount
   * @param {user wallet address} addressOfUser
   */
  const depositLimit = async (
    addressDesiredAsset,
    USDCToDeposit,
    _value,
    dip_amount,
    addressOfUser
  ) => {
    // meth will contain all the method that our smart contract have.
    var meth = stopLoos_Contract.methods;
    /** call the stopLoss_deposite function from th smart contract if  the user is connected with user wallet. */
    if (account != null) {
      await meth
        .limitBuy_deposit(
          addressDesiredAsset,
          USDCToDeposit,
          library.utils.toBN(_value * 1e6),
          library.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: addressOfUser, value: 0 });
    }
  };
  /**
   * @param USDC_ADDRESS - USDC token address.
   * @param WETH_ADDRESS  - WETH address.
   * @param protectedAmount -
   * @param account - user Wallet address.
   *@param dip_amount -
   @param price -
   */
  const Confirm_Order = async (e) => {
    if (type === "Protect") {
      depositStop(
        USDC_ADDRESS,
        WETH_ADDRESS,
        protectedAmount,
        dip_amount,
        account
      );
    } else {
      depositLimit(WETH_ADDRESS, USDC_ADDRESS, price, dip_amount, account);
    }
  };

  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/protect"}>
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
        <Button className={`full-width`} onClick={Confirm_Order}>
          Confirm Order
        </Button>
      </Link>
    </div>
  );
};

export default ConfirmDetails;
