import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VIEW, WETH_ADDRESS } from "../../utils/constants";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { useContext, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { getDipValue } from "../../utils/Api/api_call";

const Withdraw = () => {
  const navigate = useNavigate();
  const {
    setType,
    connect_to_user_wallet,
    setwithdraw_amount,
    withdraw_amount,
    userBalance,
    setDipValue,
    dipValue,
    userInfo,ethapy,usdcapy
  } = useContext(setBlockData);

  /**
   * active - user wallet status  , active will be true if the  site is connected with the user wallet.
   */
  const { active } = useWeb3React();

  /**
   * @function getDipAmount - This function will call the getDipvalue and that return
   *  calcalute the 85 of value of the USDC of 1 ETH
   *
   */
  const getDipAmount = async () => {
    const dipAmount = await getDipValue();
    setDipValue(dipAmount * withdraw_amount);
  };

  useEffect(() => {
    getDipAmount();
  }, [withdraw_amount]);

  useEffect(() => {
    setwithdraw_amount(undefined);
    setDipValue(undefined);
  }, []);

  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"withdraw"} />
      <InputField
        inputLabel="Withdraw Amount"
        currency="WETH"
        onChange={(e) => setwithdraw_amount(e.target.value)}
      />
      <ProtectDetails
        header={"Protection Details"}
        details={[
          {
            label: "Withdrawn as",
            value:
              userInfo?._amt > 0 && userInfo?._token === WETH_ADDRESS
                ? "WETH"
                : "USDC"
          },
          {
            label: "Withdrawal amount (in USDC)",
            value: active && dipValue ? dipValue / 0.85 : "-"
          }
        ]}
      />
      <div className={`hedge-eth`}>
        {!active ? (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Connect your wallet to continue
            </Typography>
            <Button width={400} onClick={connect_to_user_wallet}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Protected assets never fall in value below the Price Floor
            </Typography>
            <Button
              width={400}
              onClick={() => {
                navigate(`/confirm`);
                setType("Withdraw");
              }}
              disabled={
                !withdraw_amount ||
                withdraw_amount == 0 ||
                withdraw_amount > userBalance
              }
            >
              Withdraw{" "}
              {userInfo?._amt > 0 && userInfo?._token === WETH_ADDRESS
                ? "WETH"
                : "USDC"}
            </Button>
          </>
        )}
      </div>
      {active && userBalance != 0 ? (
        <ProtectDetails
          details={[
            {
              label: "Staked Balance",
              value: `${userBalance} WETH`
            }
          ]}
        />
      ) : null}
      <ProtectDetails
        header={"Earning Details"}
        details={[
          {
            label: "WETH APY (Before Protection)",
            value: ethapy || "-"
          },
          {
            label: "USDC APY (Before Protection)",
            value: usdcapy || "-"
          }
        ]}
      />
    </>
  );
};

export default Withdraw;
