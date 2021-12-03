import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../components/Sprite/cruize.svg";
import { styles } from "../../styles/styles";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "./Header.scss";
import {useContext} from 'react'
import {setBlockData} from '../../ContextAPI/ContextApi'
import Web3 from "web3";
const Header = () => {
  const classes = styles();

  // const { isAuthenticated, authenticate, user } = useMoralis();
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,web3,address, setweb3,setaddress
  } = useContext(setBlockData);
  const loadWeb3 = async () => {
  
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); 
    }}


  const loadContract = async () => {
    loadWeb3()
    const web1 = window.web3;
    setweb3(web1)
  let accounts =  await web1.eth.getAccounts()
  console.log(accounts)
  setaddress(accounts[0]);

  };
  return (
    <AppBar
      position="fixed"
      className={`${classes.appBar} ${classes.background}`}
    >
      <Toolbar className={`${classes.toolBar}`}>
        <img src={logo} alt="logo" />
        {!address ? (
          <Button type="secondary" onClick={loadContract}>
            Connect Wallet
          </Button>
        ) : (
          <Button type="secondary" className={`details`}>
            <div className={`add`}>
              <Typography style={{ lineHeight: 1 }} variant="body2">
                {address}...
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
