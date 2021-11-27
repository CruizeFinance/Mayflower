import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { MARKS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "../pages.scss";
import { useContext, useEffect, useState } from "react";

import { loadContract } from "../../Blockchain/LoadSmartContract";

const Buy = () => {
  const { isAuthenticated, authenticate } = useMoralis();




  // if the input filed is not filled
  const alert = () => {
    window.alert("Please fill all the information before  Hedge ETH");
  };
  /** for developer only  */
let disable = true;
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"buy"} />
      <InputField
        inputLabel="Buy Prices"
        currency="USDC"
       
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
        inputLabel="Buy Amount"
        currency="ETH"
        showMaxTag
    
      />
      <InputField
        inputLabel="Total Limit"
        currency="USDC"
       
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
              Add the required USDC balance to confirm the order
            </Typography>
            {disable ? (
              <Link to="/confirm?type=buy" style={{ textDecoration: "none" }}>
                <Button width={400} >
                  Buy ETH
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
      <InfoBox
        dialogTwoLabel={"Looking to add Price Protection?"}
        showSetUpLink
        type="Buy"
      />
    </>
  );
};

export default Buy;
