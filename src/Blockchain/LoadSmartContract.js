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
  scan = new web3.eth.Contract(Stoploss.abi, 0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d);
  /** for developer  only */
  console.log(scan);
  console.log("successfully get contreact");
};
export { loadContract,loadWeb3 };