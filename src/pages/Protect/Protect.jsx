import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MARKS, VIEW } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { loadContract, loadERC20Contract } from "../../Blockchain/LoadSmartContract";
import { setBlockData } from "../../ContextAPI/ContextAPI";
import { useContext, useState, useEffect } from "react";

const Protect = (props) => {
  const { isAuthenticated, authenticate } = useMoralis();
  // getting context
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,
    Contract,
    setContract,
  } = useContext(setBlockData);
  const [disable, setDisable] = useState(true);
let ans = 0;
  useEffect(() => {
    if (!price || !protectedAmount || !totalLimit) {
      setDisable(true);
      return;
    } else {
      setDisable(false);
      return;
    }
  }, [price, protectedAmount, totalLimit]);

  const alert = () => {
    window.alert("Please fill all the information before  Hedge ETH");
  };

  const loadSc = async () => {
    loadERC20Contract(); //approve user for transfer token

    let contract = await loadContract(); // loding main contract

    setContract(contract); // setting to contract so that we can use that with the help of context api
  };
  console.log(Contract);
  // step to reproduce error 
  /** Enter price = 5000  Enter 0.1 eth in to protecte Amount , and 500 in total limit and click on the 
   *   Hedge ETH button first pop will show to approve the user token  , and now you will redirected to the confirm page
   * click to confirm  button another pop up open   you will see error above the confirm button in the meta mask
   * 
   * *************very important**********************************
   *  before doing all of this things please check out the all commnet that i write for better understandig 
   * once you read all the comment then go to this site https://app.uniswap.org/#/swap and swap 0.1 eth to Weth to work with smart contract 
   * now all is done now you can do above step to reproduce the error  
   *  
   */
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"protect"} />
      <InputField
        inputLabel="Price Limit"
        currency="USDC"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value < 0 ? (e.target.value = 0) : e.target.value)
        }
      />
      <Box sx={{ width: 400 }} className={`slider`}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={1}
          valueLabelDisplay="auto"
          marks={MARKS}
        />
      </Box>
      <InputField
        inputLabel="Protected Amount"
        currency="ETH"
        showMaxTag
        value={totalLimit}
        onChange={(e) =>
          setProtectedAmount(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }
      />
      <InputField
        required
        inputLabel="Total Limit"
        currency="USDC"
        value={price}
        onChange={(e) =>
          setTotalLimit(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }
      />
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
              Add the required ETH balance to confirm the order
            </Typography>
            {!disable ? (
              <Link
                to="/confirm?type=protect"
                style={{ textDecoration: "none" }}
              >
                <Button width={400} onClick={loadSc}>
                  Hedge ETH
                </Button>
              </Link>
            ) : (
              <Button width={400} onClick={alert}>
                Hedge ETH
              </Button>
            )}
          </>
        )}
      </div>
      <InfoBox showSetUpLink type="Protect" />
    </>
  );
};

export default Protect;
