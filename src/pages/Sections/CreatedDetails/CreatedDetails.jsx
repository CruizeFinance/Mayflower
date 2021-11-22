import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";

const CreatedDetails = ({ type }) => {
  return (
    <div className={`dialog`} style={{ gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Order Created</Typography>
        <Link to={"/"}>
          <Sprite id="close" width={18} height={18} />
        </Link>
      </div>
      <div className={`order-details`}>
        <Typography variant="h5">{type}</Typography>
        <Typography variant="h6">
          <Sprite id="eth" width={16} height={16} /> ETH (Ether)
        </Typography>
        <Typography variant="subtitle2">
          Your orders will only get executed if the funds are present in your
          wallet at the time of execution.
        </Typography>
      </div>
      <Link to="/manage" style={{ textDecoration: "none", width: "100%" }}>
        <Button className={`full-width`}>View Orders</Button>
      </Link>
    </div>
  );
};

export default CreatedDetails;
