import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sprite, Button } from "../../../components";

import "../../pages.scss";
import Web3 from "web3";
import { useMoralis } from "react-moralis";
import useStoreApi from "../../../ContextAPI/StoreApi";
import { setBlockData } from "../../../ContextAPI/ContextApi";

const ConfirmDetails = ({ type }) => {

  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,
    web3,
    address,settype
  } = useContext(setBlockData);
  settype(type)
let dip_amount =  protectedAmount*price;
  //  const [address, setaddress] = useState(null)

  const contractAddress = "0x2547faACe91e713814756aaFA754B89F9cf66ECf";
  const depositStop = async (
    address_USDC,
    assetToDeposit,
    _value,
    dip_amount
  ) => {
    const abi3 = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "created",
            type: "bool",
          },
        ],
        name: "AssetInformationUploadedEvent",
        type: "event",
      },
      {
        inputs: [],
        name: "assetInformationCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "assetInformations",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "balances",
        outputs: [
          {
            internalType: "address",
            name: "_token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amt",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "checkLimit",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "checkStop",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "counter",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "dexRouter",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "interval",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "lastTimeStamp",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
        ],
        name: "limitBuy_deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "limitOrders",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
        ],
        name: "stopLoss_deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "stopOrders",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "upkeepLimit",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "upkeepStop",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_amt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        name: "withdraw",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];

    const contract = await new web3.eth.Contract(abi3, contractAddress);
    var meth = contract.methods;
    console.log(meth)
    if (address != null) {
      let event = await meth
        .stopLoss_deposit(
          address_USDC,
          assetToDeposit,
          web3.utils.toBN(_value * 1e18),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: address, value: 0 });
      console.log(event);

    }

    console.log(address);
  };
  const depositLimit = async (
    addressDesiredAsset,
    USDCToDeposit,
    _value,
    dip_amount,
    addressOfUser
  ) => {
    const abi3 = [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "created",
            type: "bool",
          },
        ],
        name: "AssetInformationUploadedEvent",
        type: "event",
      },
      {
        inputs: [],
        name: "assetInformationCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "assetInformations",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "balances",
        outputs: [
          {
            internalType: "address",
            name: "_token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amt",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "checkLimit",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "checkStop",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "counter",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "dexRouter",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "interval",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "lastTimeStamp",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
        ],
        name: "limitBuy_deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "limitOrders",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
        ],
        name: "stopLoss_deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "stopOrders",
        outputs: [
          {
            internalType: "address",
            name: "Token_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_desired",
            type: "address",
          },
          {
            internalType: "address",
            name: "asset_deposited",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "total_asset_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dip_amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "upkeepLimit",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "upkeepStop",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_amt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        name: "withdraw",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const contract = await new web3.eth.Contract(abi3, contractAddress);
    var meth = contract.methods;
    if (address != null) {
      let event = await meth
        .limitBuy_deposit(
          addressDesiredAsset,
          USDCToDeposit,
          web3.utils.toBN(_value * 1e8),
          web3.utils.toBN(dip_amount * 100000000)
        )
        .send({ from: addressOfUser, value: 0 });
      console.log(event);
    }
  };
  console.log(type);
  const ls = async (e) => {
    // e.preventDefault()
    if (type == "Protect") {
      depositStop(
        "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
        "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
       protectedAmount,
       dip_amount,
        address
      );
    } else {
      depositLimit('0xd0A1E359811322d97991E03f863a0C30C2cF029C',
      '0xe22da380ee6B445bb8273C81944ADEB6E8450422',1000,500, address)
    }

  };

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
          <Typography variant="body2">{price} USDC</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Protected Amount</Typography>
          <Typography variant="body2">{protectedAmount} ETH</Typography>
        </div>
        <div className={`confirm`}>
          <Typography variant="body2">Total Limit</Typography>
          <Typography variant="body2">{price*protectedAmount} USDC</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className={`confirm`}>
          <Typography variant="body2">Transaction Fee</Typography>
          <Typography variant="body2">0.3%</Typography>1000000
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
