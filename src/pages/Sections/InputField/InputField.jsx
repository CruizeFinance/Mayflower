import {
  Paper,
  IconButton,
  Tooltip,
  Typography,
  Divider,
  InputBase,
  Fade,
} from "@mui/material";
import "../../pages.scss";
import { useState } from "react";
import { Sprite } from "../../../components";

const InputField = ({
  inputLabel,
  currency,
  showMaxTag,
  onChange,
  tooltip,
  value,
}) => {
  const [applyStyles, setApplyStyles] = useState(false);

  return (
    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: 400,
          boxShadow: "none",
          ...(applyStyles
            ? { boxShadow: "rgba(0, 0, 0, 0.87)", border: "1px solid" }
            : undefined),
        }}
        className={`input-field`}
      >
        <div style={{ padding: "10px" }}>
          <Typography variant={"body2"}>{inputLabel}</Typography>
        </div>
        <InputBase
          {...(value ? { value: value } : undefined)}
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "set price limit" }}
          type="number"
          className={`price-input`}
          onChange={onChange}
          onFocus={() => setApplyStyles(true)}
          onBlur={() => setApplyStyles(false)}
        />
        {showMaxTag ? (
          <div className={`max-label`} onClick={() => console.log("max")}>
            Max
          </div>
        ) : null}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <div style={{ padding: "10px" }}>
          <Typography variant="subtitle1">{currency}</Typography>
        </div>
      </Paper>
      <Tooltip
        title={tooltip}
        placement="right-start"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <IconButton style={{ padding: "0px" }}>
          <Sprite id="info" width={12} height={12} />
        </IconButton>
      </Tooltip>
    </span>
  );
};

export default InputField;
