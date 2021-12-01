import { Typography } from "@mui/material";
import { VIEW } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ERC20_ABI } from "../../Blockchain/Abis/ERC20_json_abi";
import { setBlockData } from "../../ContextAPI/ContextApi";
const Protect = (props) => {
  const { isAuthenticated, authenticate } = useMoralis();
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,
    web3,
    address,
  } = useContext(setBlockData);

  console.log(price, protectedAmount, totalLimit, address);

  const [totalValue, setTotalValue] = useState(null);
  useEffect(
    () => setTotalValue(parseFloat(price) * parseFloat(protectedAmount)),
    [price, protectedAmount]
  );

  const approve_weth = async (_value, _token) => {
    const contract = await new web3.eth.Contract(ERC20_ABI, _token);
    var meth = contract.methods;


    if (address != null) {
      console.log(meth);
      let event = await meth
        .approve(
          "0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d",
          web3.utils.toBN(_value * 1e18)
        )
        .send({ from: address, value: 0 })
        .then(console.log);

    } else {
      console.log("Wallet not connected!");
    }
  };
  let disable = true;
  const approve_Weth = async (e) => {
    approve_weth(
      protectedAmount,
      "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
      address
    );
  };
  setTotalLimit(price * protectedAmount); 
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
        // onChange={(e) =>
        //   setTotalLimit(
        //     e.target.value < 0 ? (e.target.value = 0) : e.target.value
        //   )
        // }
        tooltip={
          "Total price floor of your asset holding which is the product of the limit and amount. For example - 0.07 WETH  staked with 4200 USDC limit will give 294 USDC as the total limit."
        }
      />
      {console.log("Price:: ", price, protectedAmount, totalValue)}
      <div className={`hedge-eth`}>
        {!isAuthenticated ? (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Connect your wallet to continue
            </Typography>
            <Button width={400} onClick={authenticate}>
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
              <Button width={400} onClick={approve_Weth}>
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
