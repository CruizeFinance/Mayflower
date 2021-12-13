import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../components/Sprite/cruize.svg";
import { styles } from "../../styles/styles";
import { Button } from "../../components";
import "./Header.scss";
import { useWeb3React } from "@web3-react/core";
import { injectors } from "../../wallet/connectors";
import { useContext } from "react";
import { setBlockData } from "../../ContextAPI/ContextApi";

const Header = () => {
  const classes = styles();
  const { active, account } = useWeb3React();
  const { connect_to_user_wallet } = useContext(setBlockData);

  return (
    <AppBar
      position="fixed"
      className={`${classes.appBar} ${classes.background}`}
    >
      <Toolbar className={`${classes.toolBar}`}>
        <img src={logo} alt="logo" />
        {!active ? (
          <Button type="secondary" onClick={connect_to_user_wallet}>
            Connect Wallet
          </Button>
        ) : (
          <Button type="secondary" className={`details`}>
            <div className={`add`}>
              <Typography style={{ lineHeight: 1 }} variant="body2">
                {account.substring(0, 8)}...
              </Typography>
              <Typography
                style={{ lineHeight: 1 }}
                variant="body2"
                color="var(--green)"
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    marginRight: "2px"
                  }}
                />
                Connected
              </Typography>
            </div>
            <img
              src={"assets/images/user.png"}
              alt="user"
              width={25}
              height={25}
            />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
