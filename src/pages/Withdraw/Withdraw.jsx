import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VIEW } from "../../utils/constants";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import {abi as  stopLoos_Contract} from '../../Blockchain/Abis/Stoploss.json'
const Withdraw = () => {
  const navigate = useNavigate();
  const { setType, connect_to_user_wallet,stopLoos_Contract } = useContext(setBlockData);

  /**
   * active - user wallet status  , active will be true if the  site is connected with the user wallet.
   */
  const { active ,account} = useWeb3React();

    /**
   * @function viewBalances - this function will return the asset's value  that is associate with the user address.
   * @param {user wallet address } addressOfUser
   * @returns it will return the asset's value that is associate with the user  address.
   */
     const viewBalances = async (addressOfUser) => {
      var meth = stopLoos_Contract.methods;
      const reciept = await meth.balances(addressOfUser).call();
      return reciept;
    };
  /**
   * @function withdraw  - this will withdraw the asset's that is associate to user address e.i WETH , USDC .
   * @param {user wallet address} addressOfUser
   */
   const withdraw = async (addressOfUser) => {
   
    const reciept = await viewBalances(addressOfUser);
    var meth = stopLoos_Contract.methods;
    await meth
      .withdraw(reciept._amt, reciept._token)
      .send({ from: addressOfUser, value: 0 })
      .then((d) => {
        if (d) {
          
         
        }
      })
      .catch((e) => {
       
        /**  here you will be able to see what  the transaction status from the metamask if it get falied */
        console.log(e.message);
      });
  };
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"withdraw"} />
      <InputField
        inputLabel="Witdraw Amount"
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
                setType("Withdraw");
                withdraw(account)
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

export default Withdraw;
