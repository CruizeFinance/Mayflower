import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { Sprite, Button } from "../../components";
import "../pages.scss";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";

const Created = (props) => {
  const navigate = useNavigate();
  const { active } = useWeb3React();
  const { type, setMetamaskEvent } = useContext(setBlockData);

  /* redirect back to home, if the wallet is not connected. */
  useEffect(() => {
    if (!active) navigate(`/`);
  }, [active]);

  return (
    <>
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
            <Sprite id="eth" width={16} height={16} /> 0.007 (Ether)
          </Typography>
        </div>
        <Button
          className={`full-width`}
          onClick={() => {
            setMetamaskEvent(undefined);
            navigate(`/protect`);
          }}
        >
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default Created;
