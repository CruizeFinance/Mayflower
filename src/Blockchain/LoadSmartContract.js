import Web3 from "web3";
import Stoploss from "./Abis/Stoploss.json";
import ERC20 from "./Abis/ERC20.json";

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

const AprroveTokens = async (Contract) => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  let userAddress = accounts[0];
  let method = await Contract?.methods;

  if (userAddress != null) {
    let event = await method
    // calling approve function so that we can work with ERC20
 
      .approve(
        "0xC320537A48d169d6c309b7ADd667F6fC87AF2a58",// this is deployed  address of the main smart contract 
        web3.utils.toBN(1000000000000000000)   // here 1000000000000000000wie  = 0.1eth
      )
      .send({ from: userAddress });
// this work fine there is no problem  in Approve function 
    console.log(event);
  } else {
    console.log("Dickhead you did not connect your wallet");
  }
};

const loadERC20Contract = async () => {
  loadWeb3();
  const web3 = window.web3;
  // loading the ERC20 token 
  scan = new web3.eth.Contract(
    ERC20.abi,
    "0xd0A1E359811322d97991E03f863a0C30C2cF029C" // this the  deployed  address of the smart ERC20 contract 
  );
  /** for developer  only */
  console.log(scan);

  AprroveTokens(scan);
  console.log("successfully get contreact");
};
const loadContract = async () => {
  loadWeb3();
  // loadERC20Contract();
  const web3 = window.web3;
  // loading  the smart contract
  scan = new web3.eth.Contract(
    Stoploss.abi,
    "0xC320537A48d169d6c309b7ADd667F6fC87AF2a58" 
  );
  /** for developer  only */

  console.log(scan);
  console.log("successfully get contreact");
  return scan;
};
export { loadContract, loadWeb3, loadERC20Contract };
