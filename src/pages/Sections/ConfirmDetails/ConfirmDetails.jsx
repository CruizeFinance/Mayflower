import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";

import "../../pages.scss";
import Web3 from "web3";
import { useMoralis } from "react-moralis";
import useStoreApi from "../../../ContextAPI/StoreApi";

const ConfirmDetails = ({ type }) => {
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
 
  const [web3, setweb3] = useState();
  const loadContract = async () => {
    loadWeb3();
    const web = window.web3;
    // loading  the smart contract
    // scan = new web3.eth.Contract(Stoploss.abi, process.env.STOP_LOOST_CONTRACT);
    /** for developer  only */
    // console.log(scan);
    const accounts = await web.eth.getAccounts();
    setaddress(accounts[0])
    setweb3(web);

    console.log("successfully get contreact");
  };
  useEffect(() => {
    loadWeb3();
    loadContract();
  }, []);
 const [address, setaddress] = useState(null)
  const contractAddress = '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d';
  const depositStop = async (address_USDC, assetToDeposit, _value,dip_amount) => {
    const abi3 = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "Token_owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "created",
            "type": "bool"
          }
        ],
        "name": "AssetInformationUploadedEvent",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "assetInformationCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "assetInformations",
        "outputs": [
          {
            "internalType": "address",
            "name": "Token_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "balances",
        "outputs": [
          {
            "internalType": "address",
            "name": "_token_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amt",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "checkLimit",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "checkStop",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "counter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "dexRouter",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "interval",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "lastTimeStamp",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          }
        ],
        "name": "limitBuy_deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "limitOrders",
        "outputs": [
          {
            "internalType": "address",
            "name": "Token_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          }
        ],
        "name": "stopLoss_deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "stopOrders",
        "outputs": [
          {
            "internalType": "address",
            "name": "Token_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_desired",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "asset_deposited",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "total_asset_value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dip_amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "upkeepLimit",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "upkeepStop",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amt",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "withdraw",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const contract = await new web3.eth.Contract(abi3, contractAddress);
    var meth = contract.methods;
    if (address!=null) {
      await meth.stopLoss_deposit(
        address_USDC,
        assetToDeposit,
        web3.utils.toBN(_value*1e18),
        web3.utils.toBN(dip_amount*100000000)
      ).send({from: address, value:0})
    }
  }
  const ls = async (e)=>{
    e.preventDefault()
    depositStop('0xe22da380ee6B445bb8273C81944ADEB6E8450422',
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',0.001,5000, address)
   
  }
  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "10px" }}>
      <div className={`confirm`}>
        <Typography variant="subtitle1">Confirm Order</Typography>
        <Link to={"/"}>
          <Sprite id="close" width={18} height={18} />
        </Link>
      </div>
      <Typography variant="h5" fontWeight={"bold"}>
        {type}
      </Typography>
      <Typography variant="subtitle1">
        <Sprite id="eth" width={16} height={16} /> ETH (Ether)
      </Typography>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Price Limit</Typography>
          <Typography variant="body2">3289.34 USDC</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Protected Amount</Typography>
          <Typography variant="body2">0.03 ETH</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Total Limit</Typography>
          <Typography variant="body2">98.86 USDC</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Transaction Fee</Typography>
          <Typography variant="body2">0.3%</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Slippage Allowed</Typography>
          <Typography variant="body2">0.5%</Typography>
        </div>
      </div>
      <Link
        to={`/created?type=${type?.toLowerCase()}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button className={`full-width`} onClick={ls}>
          Confirm Order
        </Button>
      </Link>
    </div>
  );
};

export default ConfirmDetails;
