import { Typography } from "@mui/material";
import { ACTIVITY_HISTORY } from "../../../utils/constants";
import { Sprite } from "../../../components";
import "../../pages.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const HistoryBox = () => {
  const [showOptions, setShowOptions] = useState(null);
  const handleHistoryActivity = (i) => {
    if (showOptions === i) {
      setShowOptions(null);
      return;
    }
    setShowOptions(i);
  };

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
          Type
        </Typography>
      </div>
      <div className={`results-area`}>
        {ACTIVITY_HISTORY.map((activity, index) => (
          <div
            className={`history-row result`}
            key={`${activity.type} - ${index}`}
          >
            <div className={`col-1`}>
              <Typography variant={"body1"}>{activity.type}</Typography>
              <Typography variant={"body2"}>{activity.currency}</Typography>
            </div>
            <div className={`col-2`}>
              <Typography variant={"body1"}>
                {activity.usdcPriceLimit} USDC
              </Typography>
              <Typography variant={"body2"}>
                {activity.ethPriceLimit} ETH
              </Typography>
            </div>
            <div className={`col-3`}>
              <Typography variant={"body1"}>{activity.orderDate}</Typography>
              <Typography variant={"body2"}>{activity.orderTime}</Typography>
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
                  to="/"
                  style={{
                    fontSize: "14px",
                    textDecoration: "none"
                  }}
                >
                  Modify Order
                </Link>
                <Link
                  to="/"
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
