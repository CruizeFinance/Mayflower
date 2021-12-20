import { Typography } from "@mui/material";
import { CONTRACT_ADDRESS, VIEW, WETH_ADDRESS } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import {abi as ERC20_ABI} from '../../Blockchain/Abis/ERC20.json'
import {abi as stopLoss_Contract_abi} from '../../Blockchain/Abis/Stoploss.json'

const Protect = (props) => {
  const navigate = useNavigate();

  // getting context API
  const { connect_to_user_wallet, setType,protectedAmount,setProtectedAmount, setMetamaskEvent,setstopLoos_Contract} = useContext(setBlockData);

  /** active - user wallet status  , active will be true if the  site is connected with the user wallet.
   *  account -  user wallet address.
   *  libray - Web3 or ether .
   */
  const { active, account, library } = useWeb3React();
  /**
   * @function approve_weth - This function will approve a amount of WETH  that user want to Protect.
   * @param {the value  of WETH that user want to approve} _value
   * @param {the token  address of WETH} _token
   */
  const approve_weth = async (_value, _token) => {
    // ERC20_ABI  - abi of the ERC20 token
    const contract = await new library.eth.Contract(ERC20_ABI, _token);
    // method will contain all the methodod that our smart contract have.
    var method = contract.methods;
    /** call the stopLoss_deposite function from th smart contract if  the user is connected with user wallet.else show wallet not connected. */
    if (account) {
      await method
        .approve(CONTRACT_ADDRESS, library.utils.toBN(_value * 1e18))
        .send({ from: account, value: 0 })
        .on("sent", () => {
          console.log("success");
        })
        .then((d) => setMetamaskEvent(d))
        .catch((error) => {
          /* the error for the popup is caught in the confirm screen. Need to navigate back to protect. */
          navigate("/protect");
        });
    } else {
      console.log("Wallet not connected!");
    }
  };
  /**
   * @function loadContract -  this will load the Stoploss smart contract.
   *@param stopLoss_Contract_abi - this is the ABI for the Stoploss Contract.
   *@param CONTRACT_ADDRESS - is the contract Address where we have deployed our Smart Contract.
   *
   */
  const loadContract = async () => {
    if (account) {
      // loading smart contract .
      const contract = await new library.eth.Contract(
        stopLoss_Contract_abi,
        CONTRACT_ADDRESS
      );
      // setting smart contract to Stoploss usestate.
      setstopLoos_Contract(contract);
    }
  };
  /**
   * loading smart contract everytime  if the user  wallet address get changed .
   */
  useEffect(() => {
    loadContract();
  }, [account]);



  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"protect"} />
      <InputField
        inputLabel="Protected Amount"
        currency="ETH"
        onChange={(e) => setProtectedAmount(e.target.value)}
        onMaxClick={() => console.log("max clicked")}
      />
      <ProtectDetails
        header={"Protection Details"}
        details={[
          {
            label: "Price floor (% of the current price)",
            value: "85%",
          },
          {
            label: "Total Price Floor (in USDC)",
            value: active ? "1200 USDC" : "-",
          },
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
                approve_weth(protectedAmount,WETH_ADDRESS)
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
              value: "0.007 ETH",
            },
          ]}
        />
      ) : null}
      <ProtectDetails
        header={"Earning Details"}
        details={[
          {
            label: "ETH APY (Before Protection)",
            value: "12.78%",
          },
          {
            label: "USDC APY (Before Protection)",
            value: "12.78%",
          },
        ]}
      />
    </>
  );
};

export default Protect;
