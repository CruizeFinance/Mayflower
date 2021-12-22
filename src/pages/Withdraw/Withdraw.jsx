import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VIEW } from "../../utils/constants";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { useContext, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";


const Withdraw = () => {
  const navigate = useNavigate();
  const { setType, connect_to_user_wallet ,setwithdraw_amount,userBalanace,setuserBalanace,stoploss_contract} = useContext(setBlockData);
  
  /**
   * active - user wallet status  , active will be true if the  site is connected with the user wallet.
   */
  const { active,account,library } = useWeb3React();

/**
   * @function getBalanceInfo -  will proived the information about the user asset's  value that is belong to user account
   * i.e.
   * 1.  amount  - value that user have in our Smart contract .
   * 2.  token - the asset's address that user currently have on Smart  contract .
   * @dev stopLoos_Contract -  this contain's   our smart contract .
   */
 const getBalanceInfo = async () => {
  var meth = stoploss_contract.methods;
  // meth -  this variable have  all the method that our Smart contract have .
  let userAssetsInfo = await meth.balances(account).call();
  setuserBalanace(library .utils.fromWei(userAssetsInfo._amt))
  // setting up the token address that  is associate with user in our Smart contract.
};

useEffect(() => {
  getBalanceInfo();
}, []);

  
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"withdraw"} />
      <InputField
        inputLabel="Witdraw Amount"
        currency="ETH"
        onChange={(e) => setwithdraw_amount(e.target.value)}
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
                setType("Withdraw");
              
              }}
            >
              Withdraw ETH
            </Button>
          </>
        )}
      </div>
      {active ? (
        <ProtectDetails
          details={[
            {
              label: "Staked Balance",
              value: `${userBalanace} WETH`
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

export default Withdraw;
