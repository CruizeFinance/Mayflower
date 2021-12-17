import { Typography } from "@mui/material";
import { ACTIVITY_HISTORY } from "../../../utils/constants";
import { Sprite } from "../../../components";
import "../../pages.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { _getCurrentDatetime } from "../../../utils/utilities";

const HistoryBox = () => {
  const [showOptions, setShowOptions] = useState(null);
  const handleHistoryActivity = (i) => {
    if (showOptions === i) {
      setShowOptions(null);
      return;
    }
    setShowOptions(i);
  };
  const { price, protectedAmount, type } = useContext(setBlockData);

  const [currentDateTime, setCurrentDateTime] = useState(
    _getCurrentDatetime().toString()
  );

  return (
    <div className={`history`}>
      <div className={`history-row`} style={{ marginBottom: "0" }}>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-1`}
        >
          Type
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-2`}
        >
          Price Limit
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-3`}
        >
          Order Date
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-4`}
        >
          &nbsp;
        </Typography>
      </div>
      <div className={`results-area`}>
        {ACTIVITY_HISTORY.map((activity, index) => (
          <div className={`history-row result`} key={`${type} - ${index}`}>
            <div className={`col-1`}>
              <Typography variant={"body1"}>{type}</Typography>
              <Typography variant={"body2"}>{activity.currency}</Typography>
            </div>
            <div className={`col-2`}>
              <Typography variant={"body1"}>{price} USDC</Typography>
              <Typography variant={"body2"}>{protectedAmount} WETH</Typography>
            </div>
            <div className={`col-3`}>
              <Typography variant={"body1"}>
                {currentDateTime.split(" ")[0]}
              </Typography>
              <Typography variant={"body2"}>
                {currentDateTime.split(" ")[1]}
              </Typography>
            </div>
            <div
              className={`col-4`}
              onClick={() => handleHistoryActivity(index)}
              style={{ cursor: "pointer" }}
            >
              <Sprite id="history-info" width={3} height={14} />
              <span>&nbsp;</span>
            </div>
            {showOptions === index ? (
              <div className={`history-activity`}>
                <Link
                  to="/protect"
                  style={{
                    fontSize: "14px",
                    textDecoration: "none"
                  }}
                >
                  Modify Order
                </Link>
                <Link
                  to="/protect"
                  style={{ fontSize: "14px", textDecoration: "none" }}
                >
                  Cancel Order
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBox;
