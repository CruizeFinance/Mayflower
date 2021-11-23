import {
  Paper,
  IconButton,
  Typography,
  Divider,
  InputBase
} from "@mui/material";
import "../../pages.scss";

const InputField = ({ inputLabel, currency, showMaxTag, onChange }) => {
  return (
    <Paper
      sx={{ display: "flex", alignItems: "center", width: 400 }}
      className={`input-field`}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Typography variant={"body2"}>{inputLabel}</Typography>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ "aria-label": "set price limit" }}
        type="number"
        className={`price-input`}
        onChange={onChange}
      />
      {showMaxTag ? <div className={`max-label`}>Max</div> : null}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <Typography variant="subtitle1">{currency}</Typography>
      </IconButton>
    </Paper>
  );
};

export default InputField;
