import { Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { setBlockData } from "../../../ContextAPI/ContextApi";

const ConfirmDetails = (props) => {
  const navigate = useNavigate();
  // getting context
  const { type, setMetamaskEvent } = useContext(setBlockData);

  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/protect"} onClick={() => setMetamaskEvent(undefined)}>
          <Sprite id="close" width={18} height={18} />
        </Link>
      </div>
      <Typography variant="h5" fontWeight={"bold"}>
        {type}
      </Typography>
      <Typography variant="subtitle1">
        <Sprite id="eth" width={16} height={16} /> ETH
      </Typography>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">
            {type === "Protect" ? "Protected" : "Witdraw"} Amount
          </Typography>
          <Typography variant="body2">0.007 ETH </Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}></div>
      <Button
        className={`full-width`}
        onClick={() => {
          navigate(`/created`);
        }}
      >
        Confirm Order
      </Button>
    </div>
  );
};

export default ConfirmDetails;
