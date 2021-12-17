import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { USDC_ADDRESS, WETH_ADDRESS } from "../../../utils/constants";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";

const ConfirmDetails = ({ type }) => {
  // getting context
  const {
    price,
    protectedAmount,
    stopLoos_Contract,
    metamaskEvent,
    setMetamaskEvent
  } = useContext(setBlockData);
  const [dipAmount, setDipAmount] = useState(null);
  const navigate = useNavigate();

  /** @dev account  contain  user wallet address ,  library is the web3 */
  const { account, library } = useWeb3React();

  //calculating dip amount
  useEffect(() => {
    setDipAmount(protectedAmount * price);
  }, [protectedAmount, price]);

  /**
   * @function depositStop -
   * @param { USDC token address } address_USDC
   * @param {The assets User want to deposit i.e. (link, weth ,eth ,dai) etc} assetToDeposit
   * @param {the amount of assets  that user want to Protect} _value
   * @param {once the price limit of the asset's goes below which the asset will be swapped with a stable token} dipAmount
   */
  const depositStop = async (
    address_USDC,
    assetToDeposit,
    _value,
    dipAmount
  ) => {
    // meth contains all the methods that our smart contract has.
    var meth = stopLoos_Contract.methods;
    /** call the stopLoss_deposit function from the smart contract if the user is connected with MetaMask wallet. */
    if (account != null) {
      await meth
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          library.utils.toBN(_value * 1e18),
          library.utils.toBN(dipAmount * 100000000)
        )
        .send({ from: account, value: 0 })
        .then((d) => setMetamaskEvent(d));
    }
  };

  /**
   * @function depositLimit - To buy an asset at a limit price.
   * @param {The asset that the user desires} addressDesiredAsset
   * @param {Address of the USDC Token } USDCToDeposit
   * @param {the amount  of the desired asset that the user wants to Buy} _value
   * @param {The price value at which the user want to buy desires assets } dipAmount
   * @param {user wallet address} addressOfUser
   */
  const depositLimit = async (
    addressDesiredAsset,
    USDCToDeposit,
    _value,
    dipAmount,
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
          library.utils.toBN(dipAmount * 100000000)
        )
        .send({ from: addressOfUser, value: 0 })
        .then((d) => setMetamaskEvent(d));
    }
  };

  const Confirm_Order = async (e) => {
    setMetamaskEvent(undefined);
    if (type === "Protect") {
      depositStop(
        USDC_ADDRESS,
        WETH_ADDRESS,
        protectedAmount,
        dipAmount,
        account
      );
    } else {
      depositLimit(WETH_ADDRESS, USDC_ADDRESS, price, dipAmount, account);
    }
  };

  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/protect"} onClick={() => setMetamaskEvent(undefined)}>
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
      <Button
        className={`full-width`}
        onClick={() => {
          Confirm_Order();
          navigate(`/created?type=${type?.toLowerCase()}`);
        }}
        disabled={!(metamaskEvent?.events?.Approval?.type === "mined")}
      >
        {metamaskEvent ? "Confirm Order" : "Confirmation Pending"}
      </Button>
    </div>
  );
};

export default ConfirmDetails;
