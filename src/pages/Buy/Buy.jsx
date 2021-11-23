import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { MARKS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "../pages.scss";

const Buy = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"buy"} />
      <InputField inputLabel="Price Limit" currency="USDC" />
      <Box sx={{ width: 400 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={1}
          valueLabelDisplay="auto"
          marks={MARKS}
        />
      </Box>
      <InputField inputLabel="Protected Amount" currency="ETH" showMaxTag />
      <InputField inputLabel="Total Limit" currency="USDC" />
      <div className={`hedge-eth`}>
        <Typography variant="body2">
          Add the required USDC balance to confirm the order
        </Typography>
        <Link to="/manage" style={{ textDecoration: "none" }}>
          <Button width={400}>Buy ETH</Button>
        </Link>
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
