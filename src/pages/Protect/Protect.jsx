import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MARKS, VIEW } from "../../utils/constants";
import "../pages.scss";
import { Button } from "../../components";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

const Protect = (props) => {
  const { isAuthenticated, authenticate } = useMoralis();

  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"protect"} />
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
            <Link to="/confirm?type=protect" style={{ textDecoration: "none" }}>
              <Button width={400}>Hedge ETH</Button>
            </Link>
          </>
        )}
      </div>
      <InfoBox showSetUpLink />
    </>
  );
};

export default Protect;
