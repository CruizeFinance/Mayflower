import { Button as MUIButton } from "@mui/material";
import "./Button.scss";

const Button = ({ type, onClick, width, style, className, ...props }) => {
  return (
    <MUIButton
      variant="contained"
      className={`${className || ""} button ${
        type === "secondary" ? "secondary" : ""
      } `}
      color={type || "primary"}
      onClick={onClick}
      style={{ ...style, width: width || undefined }}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
