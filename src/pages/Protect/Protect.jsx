import { Slider, Typography } from "@mui/material";
import {
  CONTRACT_ADDRESS,
  MARKS,
  protect_abi2,
  VIEW
} from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";
import { useWeb3React } from "@web3-react/core";
import { injectors } from "../../wallet/connectors";

const Protect = (props) => {
  const { price, setPrice, protectedAmount, setProtectedAmount, web3 } =
    useContext(setBlockData);

  const [totalValue, setTotalValue] = useState(null);
  useEffect(() => {
    setTotalValue(parseFloat(price) * parseFloat(protectedAmount));
  }, [price, protectedAmount]);

  const { active, account, activate } = useWeb3React();

  async function connect() {
    try {
      await activate(injectors);
    } catch (e) {
      console.log(e);
    }
  }

  const approve_weth = async (_value, _token) => {
    const contract = await new web3.eth.Contract(protect_abi2, _token);
    var meth = contract.methods;

    if (!account) {
      console.log(meth);
      let event = await meth
        .approve(CONTRACT_ADDRESS, web3.utils.toBN(_value * 1e18))
        .send({ from: account, value: 0 })
        .then(console.log);
    } else {
      console.log("Wallet not connected!");
    }
  };

  const ls = async (e) => {
    approve_weth(
      protectedAmount,
      "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
      account
    );
  };

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
              Add the required WETH balance to confirm the order
            </Typography>

            <Link to="/confirm?type=protect" style={{ textDecoration: "none" }}>
              <Button width={400} onClick={ls}>
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
