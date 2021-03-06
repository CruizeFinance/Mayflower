import { IconButton, Tooltip, Typography, Fade } from "@mui/material";
import { Sprite } from "../../../components";
import { Link } from "react-router-dom";
import "../../pages.scss";

const InfoBox = ({ hideDialogOne, dialogTwoLabel, showSetUpLink, type }) => {
  return (
    <>
      {!hideDialogOne ? (
        <div className={`dialog`}>
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            Real time rates of interest earned{" "}
            <Tooltip
              title="APY is based on the latest yield as generated by the underlying protocols. Payouts are distributed every week on staked assets. CRUIZE token distribution is referred to the entire pool."
              placement="right-start"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <IconButton style={{ padding: "0px" }}>
                <Sprite id="info" width={12} height={12} />
              </IconButton>
            </Tooltip>
          </Typography>
          <div className={`details`}>
            <Typography variant={"body2"}>
              <b>WETH APY</b>&nbsp;(before conversion)&nbsp;<b>- 12.78%</b>
            </Typography>
            <Typography variant={"body2"}>
              <b>USDC APY</b>&nbsp;(after conversion)&nbsp;<b>- 22.37%</b>
            </Typography>
            <Typography variant={"body2"}>
              <b>+ additional CRUIZE rewards</b>
            </Typography>
          </div>
        </div>
      ) : null}
      <div className={`dialog`}>
        <Typography variant={"subtitle1"}>
          {dialogTwoLabel || "Looking to buy a dip at price drops?"}
        </Typography>
        {showSetUpLink ? (
          <Link
            style={{
              textDecoration: "underline",
              fontSize: "14px",
              color: "var(--primary)"
            }}
            to={`/${type === "Protect" ? "buy" : ""}`}
          >
            Set Up Now
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default InfoBox;
