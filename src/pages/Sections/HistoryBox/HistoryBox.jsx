import { Typography } from "@mui/material";
import { ACTIVITY_HISTORY } from "../../../utils/constants";
import { Sprite } from "../../../components";
import "../../pages.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import {_getCurrentDatetime} from "../../../utilities/datetime_utilities";


const HistoryBox = () => {
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,web3,address
  } = useContext(setBlockData);
  console.log('History Box: ', price, protectedAmount, totalLimit, address);
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  // console.log('contract address', contractAddress);
  // const contractAddress = "0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d";
  const current_datetime = _getCurrentDatetime().toString();
  console.log('current datetime', current_datetime);
  const viewOrders = async (addressOfUser) => {
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
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "viewOrders",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const contract = await new web3.eth.Contract(abi3, contractAddress);
    var meth = contract.methods;
    const result = await meth.viewOrders(addressOfUser).call();
    console.log('Viewing Orders of user_address: ', address);
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
    return result;
  }

  let all_orders = viewOrders(address);
  console.log("orders: ", all_orders);

  const [showOptions, setShowOptions] = useState(null);
  const handleHistoryActivity = (i) => {
    if (showOptions === i) {
      setShowOptions(null);
      return;
    }
    setShowOptions(i);
  };

  return (
    <div className={`history`}>
      <div className={`history-row`} style={{ marginBottom: "0" }}>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-1`}
        >
          Type
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-2`}
        >
          Price Limit
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-3`}
        >
          Order Date
        </Typography>
        <Typography
          variant={"body1"}
          style={{ color: "var(--gray)" }}
          className={`col-4`}
        >
          Type
        </Typography>
      </div>
      <div className={`results-area`}>
        {ACTIVITY_HISTORY.map((activity, index) => (
          <div
            className={`history-row result`}
            key={`${activity.type} - ${index}`}
          >
            <div className={`col-1`}>
              <Typography variant={"body1"}>{activity.type}</Typography>
              <Typography variant={"body2"}>{activity.currency}</Typography>
            </div>
            <div className={`col-2`}>
              <Typography variant={"body1"}>
                {price*protectedAmount} USDC
              </Typography>
              <Typography variant={"body2"}>
                {protectedAmount} ETH
              </Typography>
            </div>
            <div className={`col-3`}>
              <Typography variant={"body1"}>{current_datetime.split(' ')[0]}</Typography>
              <Typography variant={"body2"}>{current_datetime.split(' ')[1]}</Typography>
            </div>
            <div
              className={`col-4`}
              onClick={() => handleHistoryActivity(index)}
              style={{ cursor: "pointer" }}
            >
              <Sprite id="history-info" width={3} height={14} />
              <span>&nbsp;</span>
            </div>
            {showOptions === index ? (
              <div className={`history-activity`}>
                <Link
                  to="/"
                  style={{
                    fontSize: "14px",
                    textDecoration: "none"
                  }}
                >
                  Modify Order
                </Link>
                <Link
                  to="/"
                  style={{ fontSize: "14px", textDecoration: "none" }}
                >
                  Cancel Order
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};



export default HistoryBox;
