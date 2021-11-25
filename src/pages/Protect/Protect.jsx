import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MARKS, VIEW } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { loadContract } from "../../Blockchain/LoadSmartContract";
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
  } = useContext(setBlockData);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (!price || !protectedAmount || !totalLimit) {
      setDisable(true);
      return;
    } else {
      setDisable(false);
      return;
    }
  }, [price, protectedAmount, totalLimit]);

  // if the input filed is not filled 
 const alert  =  ()=>{
 window.alert("Please fill all the information before  Hedge ETH")

 }
  /** for developer only  */
  console.log(`assets price ${price}`);
  console.log(`assets ProtectedAmount ${protectedAmount}`);
  console.log(`assets totalLimit${totalLimit}`);
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
      <Box sx={{ width: 400 }}>
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
            <Typography variant="body2">
              Connect your wallet to continue
            </Typography>
            <Button width={400} onClick={authenticate}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body2">
              Add the required ETH balance to confirm the order
            </Typography>
            {!disable ? (
              <Link
                to="/confirm?type=protect"
                style={{ textDecoration: "none" }}
              >
                <Button width={400} onClick={loadContract}>
                  Hedge ETH
                </Button>
              </Link>
            ) : (
              <Button width={400} onClick={loadContract} >
                Hedge ETH
              </Button>
            )}
          </>
        )}
      </div>
      <InfoBox showSetUpLink={isAuthenticated} type="Protect" />
    </>
  );
};

export default Protect;
