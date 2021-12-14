import { Button as MUIButton } from "@mui/material";
import "./Button.scss";

const Button = ({
  type,
  onClick,
  width,
  style,
  className,
  disabled,
  ...props
}) => {
  return (
    <MUIButton
      variant="contained"
      className={`${className || ""} button ${
        type === "secondary" ? "secondary" : ""
      } `}
      color={type || "primary"}
      onClick={!disabled ? onClick : undefined}
      style={{
        ...style,
        width: width || undefined,
      }}
      disabled={disabled}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
