import { Typography } from "@mui/material";
import { CONTRACT_ADDRESS, VIEW, WETH_ADDRESS } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InputField, ViewLinks, TokenModal, ProtectDetails } from "../Sections";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { abi as ERC20_ABI } from "../../Blockchain/Abis/ERC20.json";
import { getDipValue } from "../../utils/Api/api_call";

const Protect = (props) => {
  const navigate = useNavigate();

  // getting context API
  const {
    connect_to_user_wallet,
    userBalance,
    setType,
    protectedAmount,
    setProtectedAmount,
    setMetamaskEvent,
    dipValue,
    setDipValue,
    setuserBalance,
    stoploss_contract,
    resetValues,
  } = useContext(setBlockData);

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
  const approveWETH = async (_value, _token) => {
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
          resetValues();
        });
    } else {
      console.log("Wallet not connected!");
    }
  };

  /**
   * @function getDipAmount - This function will call the getDipvalue and that return
   *  calcalute the 85 of value of the USDC of 1 ETH
   *
   */
  const getDipAmount = async () => {
    const dipAmount = await getDipValue();
    setDipValue(dipAmount * protectedAmount);
  };

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
    setuserBalance(library.utils.fromWei(userAssetsInfo._amt));
    // setting up the token address that  is associate with user in our Smart contract.
  };

  useEffect(() => {
    getDipAmount();
  }, [protectedAmount]);

  useEffect(() => {
    if (stoploss_contract) {
      getBalanceInfo();
    }
  }, [stoploss_contract]);

  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"protect"} />
      <InputField
        inputLabel="Protected Amount"
        currency="WETH"
        onChange={(e) => setProtectedAmount(e.target.value)}
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
            value: active && dipValue ? dipValue : "-"
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
                approveWETH(protectedAmount, WETH_ADDRESS);
                navigate(`/confirm`);
                setType("Protect");
              }}
              disabled={!dipValue || userBalance != 0}
            >
              Protect WETH
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

export default Protect;
