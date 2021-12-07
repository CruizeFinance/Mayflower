import { Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { buy_abi2, CONTRACT_ADDRESS, MARKS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import "../pages.scss";
import { useContext, useEffect, useState } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { injectors } from "../../wallet/connectors";

const Buy = () => {
  const { price, setPrice, protectedAmount, setProtectedAmount, web3 } =
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

  const { active, account, activate } = useWeb3React();

  async function connect() {
    try {
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }

  const approve_usdc = async (_value, _token, addressOfUser) => {
    const contract = await new web3.eth.Contract(buy_abi2, _token);
    var meth = contract.methods;
    if (!account) {
      await meth
        .approve(
          CONTRACT_ADDRESS,
          web3.utils.toBN(_value * 1e8)
        )
        .send({ from: addressOfUser, value: 0 })
    } else {
      console.log("Wallet not connected!");
    }
  };
  const ls = async (e) => {
    approve_usdc(price, "0xe22da380ee6B445bb8273C81944ADEB6E8450422", account);
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
            {disable ? (
              <Link to="/confirm?type=buy" style={{ textDecoration: "none" }}>
                <Button width={400} onClick={ls}>
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
