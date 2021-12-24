import { Typography } from "@mui/material";
import "../../pages.scss";

const ProtectDetails = ({ header, details }) => {
  return (
    <div className={`protect-details`}>
      {header ? (
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {header}
        </Typography>
      ) : null}
      {details && details?.length
        ? details?.map((detail, index) => (
            <span key={index}>
              <Typography variant="subtitle1">{detail.label}</Typography>
              <Typography variant="subtitle1">{detail.value}</Typography>
            </span>
          ))
        : null}
    </div>
  );
};

export default ProtectDetails;
