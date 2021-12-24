import {
  Paper,
  Typography,
  Divider,
  InputBase,
} from "@mui/material";
import "../../pages.scss";
import { useState } from "react";

const InputField = ({
  inputLabel,
  currency,
  onMaxClick,
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
            : undefined)
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
        {onMaxClick ? (
          <div className={`max-label`} onClick={onMaxClick}>
            Max
          </div>
        ) : null}
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <div style={{ padding: "10px" }}>
          <Typography variant="subtitle1">{currency}</Typography>
        </div>
      </Paper>
    </span>
  );
};

export default InputField;
