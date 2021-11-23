import Web3 from "web3";
import Stoploss from "./Abis/Stoploss.json";

let scan;
const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
const loadContract = async () => {
    loadWeb3()
  const web3 = window.web3;
  // loading  the smart contract
  scan = new web3.eth.Contract(Stoploss.abi, process.env.STOP_LOOST_CONTRACT);
  /** for developer  only */
  console.log(scan);
  console.log("successfully get contreact");
};
export { loadContract,loadWeb3 };