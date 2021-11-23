import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";

const ConfirmDetails = ({ type }) => {
  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/"}>
          <Sprite id="close" width={18} height={18} />
        </Link>
      </div>
      <Typography variant="h5" fontWeight={"bold"}>
        {type}
      </Typography>
      <Typography variant="subtitle1">
        <Sprite id="eth" width={16} height={16} /> ETH (Ether)
      </Typography>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Price Limit</Typography>
          <Typography variant="body2">3289.34 USDC</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Protected Amount</Typography>
          <Typography variant="body2">0.03 ETH</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Total Limit</Typography>
          <Typography variant="body2">98.86 USDC</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Transaction Fee</Typography>
          <Typography variant="body2">0.3%</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Slippage Allowed</Typography>
          <Typography variant="body2">0.5%</Typography>
        </div>
      </div>
      <Link
        to={`/created?type=${type?.toLowerCase()}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button className={`full-width`}>Confirm Order</Button>
      </Link>
    </div>
  );
};

export default ConfirmDetails;
