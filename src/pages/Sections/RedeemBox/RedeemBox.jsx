import { Typography } from "@mui/material";
import { Button, Sprite } from "../../../components";
import "../../pages.scss";

const RedeemBox = () => {
  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "8px" }}>
      <Typography variant={"h6"}>Total Redeemable Value</Typography>
      <div>
        <Typography variant={"h5"}>$459.89</Typography>
        <Typography variant={"body2"}>
          <span style={{ color: "var(--green)" }}>+$152.74 (3.80%)</span>
          &nbsp;
          <span>24 H</span>
        </Typography>
      </div>
      <div className={`redeem-details`}>
        <div className={`token-details`}>
          <Typography variant={"body1"}>0.07 ETH</Typography>
          <Typography variant={"body2"}>
            35.76% APY (
            <Sprite id="eth" width={14} height={14} /> ETH)
          </Typography>
        </div>
        <Button>
          Redeem
          <br />
          ETH
        </Button>
      </div>
      <div className={`redeem-details`}>
        <div className={`token-details`}>
          <Typography variant={"body1"}>234.78 USDC</Typography>
          <Typography variant={"body2"}>
            35.76% APY (
            <Sprite id="eth" width={14} height={14} /> USDC)
          </Typography>
        </div>
        <Button>
          Redeem
          <br />
          USDC
        </Button>
      </div>
    </div>
  );
};

export default RedeemBox;
