import { Typography } from "@mui/material";
import { Button, Sprite } from "../../../components";
import "../../pages.scss";
import Web3 from "web3";
import { useState, useEffect, useContext } from "react";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { Convert_toWei } from "../../../utilities/utilities";
const RedeemBox = () => {
  const contractAddress = "0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d";
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    totalLimit,
    setTotalLimit,
    web3,
    address,
    type,
  } = useContext(setBlockData);
  console.log(type)
  const [userBalance, setuserBalance] = useState("");
  console.log(address);

  const viewBalances = async (addressOfUser) => {
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
    const reciept = await meth.balances(addressOfUser).call();
    console.log(reciept);

    return reciept;
  };
  const withdraw = async (addressOfUser) => {
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
    const reciept = await viewBalances(addressOfUser);
    var meth = contract.methods;
    //console.log(reciept.result);
    console.log(reciept._amt);
    console.log(reciept._token);

    await meth
      .withdraw(reciept._amt, reciept._token)
      .send({ from: addressOfUser, value: 0 });
  };

  const getUserBalance = async () => {
    let Balance_info = await viewBalances(address);
    setuserBalance(Balance_info);
  };
  useEffect(() => {
    getUserBalance();
  }, []);
  const redeem = async (e) => {
    withdraw(address);
  };
  console.log('user Balance '+ userBalance);
  // convert to eth from Wei

  return (
    <div className={`dialog`} style={{ alignItems: "flex-start", gap: "8px" }}>
      {/* <Typography variant={"h6"}>Total Redeemable Value</Typography> */}
      {/* removed it for now  */}
      {/* <div>
        <Typography variant={"h5"}>$459.89</Typography>
        <Typography variant={"body2"}>
          <span style={{ color: "var(--green)" }}>+$152.74 (3.80%)</span>
          &nbsp;
          <span>24 H</span>
        </Typography>
      </div> */}
      {type === "Protect" ? (
        <div className={`redeem-details`}>
          {/* <div className={`token-details`}>
            <Typography variant={"body1"}>{Convert_toWei(userBalance,Math.pow(10,18))} WETH</Typography>
            <Typography variant={"body2"}>
              35.76% APY (
              <Sprite id="eth" width={14} height={14} /> WETH)
            </Typography>
          </div> */}
          <Button  onClick={redeem}>
            Redeem
            <br />
            Asset
          </Button>
        </div>
      ) : (
        <div className={`redeem-details`}>
          {/* <div className={`token-details`}>
            <Typography variant={"body1"}>{Convert_toWei(userBalance)} USDC</Typography>
            <Typography variant={"body2"}>
              35.76% APY (
              <Sprite id="eth" width={14} height={14} />{" "}
              WETH )
            </Typography>
          </div> */}
          <Button width={100} onClick={redeem}  >
            Redeem
            <br />
            Asset
          </Button>
        </div>
      )}
    </div>
  );
};

export default RedeemBox;
