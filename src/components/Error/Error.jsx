import { Typography } from "@mui/material";
import { Button } from "..";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";

const Error = ({ message, action }) => {
  const { connect_to_user_wallet } = useContext(setBlockData);

  return (
    <>
      <Typography variant="h5">{message}</Typography>
      {action ? (
        <Button
          onClick={
            action === "home"
              ? () => (window.location.href = "/")
              : action === "reload"
              ? () => window.location.reload()
              : action === "connect"
              ? connect_to_user_wallet
              : undefined
          }
        >
          {action === "home"
            ? "Back to Home"
            : action === "reload"
            ? "Reload"
            : action === "connect"
            ? "Connect Wallet"
            : ""}
        </Button>
      ) : null}
    </>
  );
};

export default Error;
