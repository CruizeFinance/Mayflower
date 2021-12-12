import { Typography } from "@mui/material";
import { CONTRACT_ADDRESS, VIEW, WETH_ADDRESS } from "../../utils/constants";
import { abi as protect_abi2 } from "../../Blockchain/Abis/ERC20.json";
import { abi as stopLoss_Contract_abi } from "../../Blockchain/Abis/Stoploss.json";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { injectors } from "../../wallet/connectors";

const Protect = (props) => {

  // getting context API
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    setstopLoos_Contract,
  } = useContext(setBlockData);


  const [totalValue, setTotalValue] = useState(null);

  useEffect(() => {
    setTotalValue(parseFloat(price) * parseFloat(protectedAmount));
  }, [price, protectedAmount]);

  /** active - user wallet status  , active will be true if the  site is connected with the user wallet.
   *  account -  user wallet address.
   *  libray - Web3 or ether .
   */
  const { active, account, activate, library } = useWeb3React();
  /**
   * @function connect - This will connect our  website to the user wallet
   */
  async function connect_To_User_wallet() {
    try {
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }
  /**
   * @function approve_weth - This function will approve a amount of WETH  that user want to Protect.
   * @param {the value  of WETH that user want to approve} _value
   * @param {the token  address of WETH} _token
   */
  const approve_weth = async (_value, _token) => {

    // protect_abi2  - abi of the ERC20 token
    const contract = await new library.eth.Contract(protect_abi2, _token);
    // meth will contain all the method that our smart contract have.
    var meth = contract.methods;
    /** call the stopLoss_deposite function from th smart contract if  the user is connected with user wallet.else show wallet not connected. */

    if (account) {
      await meth
        .approve(CONTRACT_ADDRESS, library.utils.toBN(_value * 1e18))
        .send({ from: account, value: 0 })
        .then(console.log);
    } else {
      console.log("Wallet not connected!");
    }
  };
  /**
   *@function Approve_Weth - This function will call the @function approve_weth for approving WETH.
   * @param WETH_ADDRESS  - WETH token address .
   * @param  account - user wallet address.
   * @param protectedAmount  - the amount that user want to protect.
   */
  const Approve_Weth = async (e) => {
    approve_weth(protectedAmount, WETH_ADDRESS, account);
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
        inputLabel="Price Limit"
        currency="USDC"
        onChange={(e) =>
          setPrice(e.target.value < 0 ? (e.target.value = 0) : e.target.value)
        }
        tooltip={
          "Order is triggered when the market price of the asset reaches this price. For example - Price Limit of 4200 USDC for ETH with a market price of 4400 USDC"
        }
      />
      {/* <Box sx={{ width: 400 }} className={`slider`}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={1}
          valueLabelDisplay="auto"
          marks={MARKS}
        />
      </Box> */}
      <InputField
        inputLabel="Protected Amount"
        currency="WETH"
        onChange={(e) =>
          setProtectedAmount(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }
        tooltip={
          "The quantity of the asset from your wallet you’d like to use for the order. For example - 0.07 WETH  out of the 0.09 ETH in your wallet."
        }
      />
      <InputField
        value={totalValue}
        inputLabel="Total Limit"
        currency="USDC"
        tooltip={
          "Total price floor of your asset holding which is the product of the limit and amount. For example - 0.07 WETH  staked with 4200 USDC limit will give 294 USDC as the total limit."
        }
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
            <Button width={400} onClick={connect_To_User_wallet}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Add the required WETH balance to confirm the order
            </Typography>

            <Link to="/confirm?type=protect" style={{ textDecoration: "none" }}>
              <Button width={400} onClick={Approve_Weth}>
                Hedge WETH
              </Button>
            </Link>
          </>
        )}
      </div>
      <InfoBox showSetUpLink type="Protect" />
    </>
  );
};

export default Protect;
