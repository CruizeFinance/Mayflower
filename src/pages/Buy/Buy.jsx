import { Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CONTRACT_ADDRESS, USDC_ADDRESS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { abi as buy_abi2 } from "../../Blockchain/Abis/ERC20.json";
import { useContext, useEffect, useState } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { injectors } from "../../wallet/connectors";

const Buy = () => {
  const { price, setPrice, protectedAmount, setProtectedAmount } =
    useContext(setBlockData);
  const [disable, setDisable] = useState(false);
  const [totalValue, setTotalValue] = useState(null);
  useEffect(() => {
    setTotalValue(parseFloat(price) * parseFloat(protectedAmount));
    if (!price || !protectedAmount) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [price, protectedAmount]);
  /** active - user wallet status  , active will be true if the  site is connected with the user wallet.
   * account -  user wallet address.
   * libray - Web3 or ether .
   */
  const { active, account, activate, library } = useWeb3React();
  /**
   * @function connect - this will connect site to the user wallet
   */
  async function connect() {
    try {
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @function approve_usdc -  this function will approve value of USDC  that user want to deposite.
   * @param {the value  of USDC that user want to deposite } _value
   * @param {the address of usdc} _token
   * @param {user wallet address} addressOfUser
   */
  const approve_usdc = async (_value, _token, addressOfUser) => {
    //loding ERC20 contract
    const contract = await new library.eth.Contract(buy_abi2, _token);
    // meth will contain all the method that our smart contract have.
    var meth = contract.methods;
    if (account) {
      await meth
        .approve(CONTRACT_ADDRESS, library.utils.toBN(_value * 1e8))
        .send({ from: addressOfUser, value: 0 });
    } else {
      console.log("Wallet not connected!");
    }
  };

  const approve_Usdc = async (e) => {
    approve_usdc(price, USDC_ADDRESS, account);
  };

  const input_fill = () => {
    window.alert("please fill the proper information before Hedge WETH ");
  };

  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"buy"} />
      <InputField
        inputLabel="Buy Prices"
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
        inputLabel="Buy Amount"
        currency="WETH"
        /* showMaxTag */
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
            <Button width={400} onClick={connect}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Add the required USDC balance to confirm the order
            </Typography>
            {!disable ? (
              <Link to="/confirm?type=buy" style={{ textDecoration: "none" }}>
                <Button width={400} onClick={approve_Usdc}>
                  Buy WETH
                </Button>
              </Link>
            ) : (
              <Button width={400} onClick={input_fill}>
                Hedge WETH
              </Button>
            )}
          </>
        )}
      </div>
      <InfoBox
        dialogTwoLabel={"Looking to add Price Protection?"}
        showSetUpLink
        type="Buy"
      />
    </>
  );
};

export default Buy;
