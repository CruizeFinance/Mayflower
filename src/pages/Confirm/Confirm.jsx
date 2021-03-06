import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../components";
import "../pages.scss";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { USDC_ADDRESS, WETH_ADDRESS } from "../../utils/constants";

const Confirm = (props) => {
  const { active, account, library } = useWeb3React();
  const navigate = useNavigate();
  // getting context
  const {
    type,
    setMetamaskEvent,
    stoploss_contract,
    protectedAmount,
    withdraw_amount,
    metamaskEvent,
    dipValue,
    resetValues
  } = useContext(setBlockData);

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
  const protectWETH = async (
    address_USDC,
    assetToDeposit,
    _value,
    dipAmount
  ) => {
    // method contains all the methods that our smart contract has.
    const method = stoploss_contract.methods;
    /** call the stopLoss_deposit function from the smart contract if the user is connected with MetaMask wallet. */
    if (account != null) {
      const tokens = library.utils.toWei(dipAmount.toString(), "ether");
      const amount = library.utils.toBN(tokens);
      await method
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          library.utils.toBN(_value * 1e18),
          library.utils.toBN(amount)
        )
        .send({ from: account, value: 0 })
        .then((d) => {
          setMetamaskEvent(d);
        })
        .catch((error) => {
          /**  here you will be able to see what the transaction status from the metamask if it get falied */
          navigate(`/${type?.toLowerCase()}`);
          resetValues();
        });
    }
  };

  /**
   * @function confrim  - This function will call the withdraw function or the protectWETH function based on the type .
   * @param {withdraw_amount} - The amount that user want to withdraw.
   */
  const confirm = () => {
    if (type === "Withdraw") {
      withdraw(withdraw_amount, account);
    } else {
      protectWETH(USDC_ADDRESS, WETH_ADDRESS, protectedAmount, dipValue);
    }
  };

  /**
   * @function viewBalances - this function will return the asset's value  that is associate with the user address.
   * @param {user wallet address } addressOfUser
   * @returns it will return the asset's value that is associate with the user  address.
   */
  const viewBalances = async (addressOfUser) => {
    var meth = stoploss_contract.methods;
    const reciept = await meth.balances(addressOfUser).call();
    return reciept;
  };

  /**
   * @function withdraw  - this will withdraw the asset's that is associate to user address e.i WETH , USDC .
   * @param {user wallet address} addressOfUser
   */
  const withdraw = async (_withdraw_amount, addressOfUser) => {
    const reciept = await viewBalances(addressOfUser);
    var meth = stoploss_contract.methods;
    await meth
      .withdraw(library.utils.toBN(_withdraw_amount * 1e18), reciept._token)
      .send({ from: addressOfUser, value: 0 })
      .then((d) => {
        setMetamaskEvent(d);
      })
      .catch((e) => {
        /**  here you will be able to see what the transaction status from the metamask if it get falied */
        navigate(`/${type?.toLowerCase()}`);
        resetValues();
      });
  };

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
          <Sprite id="weth" width={16} height={16} /> WETH
        </Typography>
        <div style={{ width: "100%" }}>
          <div className={`confirm`}>
            <Typography variant="body2">
              {type === "Protect" ? "Protected" : "Withdraw"} Amount
            </Typography>
            <Typography variant="body2">
              {type === "Protect" ? `${protectedAmount}` : `${withdraw_amount}`}{" "}
              WETH
            </Typography>
          </div>
        </div>
        <div style={{ width: "100%" }}></div>
        <Button
          className={`full-width`}
          onClick={() => {
            navigate(`/created`);
            confirm();
          }}
          disabled={
            type?.toLowerCase() === "protect" &&
            !(metamaskEvent?.events?.Approval?.type === "mined")
          }
        >
          {type?.toLowerCase() === "protect"
            ? metamaskEvent
              ? "Confirm Order"
              : "Confirmation Pending"
            : "Confirm Order"}
        </Button>
      </div>
    </>
  );
};

export default Confirm;
