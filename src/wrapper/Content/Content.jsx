import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { Error } from "../../components";
import Routes from "../../Routes/Routes";
import { styles } from "../../styles/styles";
import "./Content.scss";

const Content = () => {
  const classes = styles();
  const { chainId } = useWeb3React();

  return (
    <main className={`main`}>
      <div className={`content ${classes.background}`}>
        {chainId && chainId === 42 ? (
          <Routes />
        ) : (
          <Error message={"Please use the Kovan Test Network"} />
        )}
      </div>
    </main>
  );
};

export default Content;
