import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../components/Sprite/cruize.svg";
import { styles } from "../../styles/styles";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "./Header.scss";

const Header = () => {
  const classes = styles();

  const { isAuthenticated, authenticate, user } = useMoralis();

  return (
    <AppBar
      position="fixed"
      className={`${classes.appBar} ${classes.background}`}
    >
      <Toolbar className={`${classes.toolBar}`}>
        <img src={logo} alt="logo" />
        {!isAuthenticated ? (
          <Button type="secondary" onClick={authenticate}>
            Connect Wallet
          </Button>
        ) : (
          <Button type="secondary" className={`details`}>
            <div className={`add`}>
              <Typography style={{ lineHeight: 1 }} variant="body2">
                {user?.attributes?.accounts[0].slice(0, 8)}...
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
                    marginRight: "2px",
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
