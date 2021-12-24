import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VIEW } from "../../utils/constants";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";

const Withdraw = () => {
  const navigate = useNavigate();
  const {
    setType,
    connect_to_user_wallet,
    setwithdraw_amount,
    withdraw_amount,
    userBalance
  } = useContext(setBlockData);

  /**
   * active - user wallet status  , active will be true if the  site is connected with the user wallet.
   */
  const { active } = useWeb3React();

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
            label: "Price floor (% of the current price)",
            value: "85%"
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
              Withdraw WETH
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
            value: "12.78%"
          },
          {
            label: "USDC APY (Before Protection)",
            value: "12.78%"
          }
        ]}
      />
    </>
  );
};

export default Withdraw;
