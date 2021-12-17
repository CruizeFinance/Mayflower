import { Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";
import "../../pages.scss";
import { useContext } from "react";
import { setBlockData } from "../../../ContextAPI/ContextApi";

const CreatedDetails = ({ type }) => {
  const navigate = useNavigate();
  const { metamaskEvent, setMetamaskEvent } = useContext(setBlockData);

  return (
    <div className={`dialog`} style={{ gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Order Created</Typography>
        <Link to={"/protect"} onClick={() => setMetamaskEvent(undefined)}>
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
      <Button
        className={`full-width`}
        onClick={() => {
          setMetamaskEvent(undefined);
          navigate(`/manage`);
        }}
        disabled={!(metamaskEvent?.events[0]?.type === "mined")}
      >
        {metamaskEvent ? "View Orders" : "Confirmation Pending"}
      </Button>
    </div>
  );
};

export default CreatedDetails;
