import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { MARKS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "../pages.scss";
import { useContext, useEffect, useState } from "react";
import { setBlockData } from "../../ContextAPI/ContextAPI";
import { loadContract } from "../../Blockchain/LoadSmartContract";

const Buy = () => {
  const { isAuthenticated } = useMoralis();
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
      <ViewLinks map={VIEW} page={"buy"} />
      <InputField inputLabel="Price Limit" currency="USDC" 
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
      <InputField inputLabel="Protected Amount" currency="ETH" showMaxTag     onChange={(e) =>
          setProtectedAmount(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }/>
      <InputField inputLabel="Total Limit" currency="USDC"    onChange={(e) =>
          setTotalLimit(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }/>
      <div className={`hedge-eth`}>
        <Typography variant="body2">
          Add the required USDC balance to confirm the order
        </Typography>{

          !disable ?(
                 <Link to="/confirm?type=buy" style={{ textDecoration: "none" }}>
          <Button width={400} onClick={loadContract}>Buy ETH</Button>
        </Link>
          ):(
            <Button width={400} onClick={alert} >
                Hedge ETH
              </Button>
          )
        }
 
      </div>
      <InfoBox
        dialogTwoLabel={"Looking to add Price Protection?"}
        showSetUpLink={isAuthenticated}
        type="Buy"
      />
    </>
  );
};

export default Buy;
