import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../components";
import "../pages.scss";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { USDC_ADDRESS, WETH_ADDRESS } from "../../utils/constants";
import { getDipValue } from "../../utils/Api/api_call";

const Confirm = (props) => {
  const { active, account, library } = useWeb3React();
  const [dipvValue, setdipvValue] = useState();
  const navigate = useNavigate();
  // getting context
  const { type, setMetamaskEvent, stoploss_contract, protectedAmount } =
    useContext(setBlockData);

  /* redirect back to home, if the wallet is not connected. */
  useEffect(() => {
    if (!active) navigate(`/`);
  }, [active]);
  /**
   * @function  protect_WETH -
   * @param { USDC token address } address_USDC
   * @param {The assets User want to deposit i.e. (link, weth ,eth ,dai) etc} assetToDeposit
   * @param {the amount of assets  that user want to Protect} _value
   * @param {once the price limit of the asset's goes below which the asset will be swapped with a stable token} dipAmount
   */
  const protect_WETH = async (
    address_USDC,
    assetToDeposit,
    _value,
    dipAmount
  ) => {
    // method contains all the methods that our smart contract has.
    var method = stoploss_contract.methods;
    console.log(dipAmount)
    /** call the stopLoss_deposit function from the smart contract if the user is connected with MetaMask wallet. */
    if (account != null) {
      await method
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          library.utils.toBN(_value * 1e18),
          library.utils.toBN(dipAmount * 100000000)
        )
        .send({ from: account, value: 0 })
        .then((d) => setMetamaskEvent(d))
        .catch((error) => {
          /**  here you will be able to see what  the transaction status from the metamask if it get falied */

          navigate(`/${type?.toLowerCase()}`);
        });
    }
  };

const getDipAmount = async ()=>{
    const dipAmount = await getDipValue();
    console.log(dipAmount)
    setdipvValue(dipAmount*protectedAmount);
  }
  useEffect(() => {
    getDipAmount()
  }, []);

  return (
    <>
      <div
        className={`dialog`}
        style={{ alignItems: "flex-start", gap: "10px" }}
      >
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
          <Sprite id="eth" width={16} height={16} /> ETH
        </Typography>
        <div style={{ width: "100%" }}>
          <div className={`confirm`}>
            <Typography variant="body2">
              {type === "Protect" ? "Protected" : "Withdraw"} Amount
            </Typography>
            <Typography variant="body2">{protectedAmount} ETH</Typography>
          </div>
        </div>
        <div style={{ width: "100%" }}></div>
        <Button
          className={`full-width`}
          onClick={() => {
            navigate(`/created`);
            protect_WETH(
              USDC_ADDRESS,
              WETH_ADDRESS,
              protectedAmount,
              dipvValue
            );
          }}
        >
          Confirm Order
        </Button>
      </div>
    </>
  );
};

export default Confirm;
