import { Typography } from "@mui/material";
import { VIEW } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
const Protect = (props) => {
  const navigate = useNavigate();

  // getting context API
  const { connect_to_user_wallet, setType } = useContext(setBlockData);

  /**
   * active - user wallet status  , active will be true if the  site is connected with the user wallet.
   */
  const { active } = useWeb3React();

  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"protect"} />
      <InputField
        inputLabel="Protected Amount"
        currency="ETH"
        onChange={(e) => console.log(e)}
        onMaxClick={() => console.log("max clicked")}
      />
      <ProtectDetails
        header={"Protection Details"}
        details={[
          {
            label: "Price floor (% of the current price)",
            value: "85%"
          },
          {
            label: "Total Price Floor (in USDC)",
            value: active ? "1200 USDC" : "-"
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
                setType("Protect");
              }}
            >
              Protect ETH
            </Button>
          </>
        )}
      </div>
      {active ? (
        <ProtectDetails
          details={[
            {
              label: "Staked Balance",
              value: "0.007 ETH"
            }
          ]}
        />
      ) : null}
      <ProtectDetails
        header={"Earning Details"}
        details={[
          {
            label: "ETH APY (Before Protection)",
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

export default Protect;
