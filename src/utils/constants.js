export const CONTRACT_ADDRESS = "0x04796D80B66544EF9C4A08A5477E35C1632719f9";

export const MARKS = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 25,
    label: "25%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 75,
    label: "75%",
  },
  {
    value: 100,
    label: "100%",
  },
];

export const VIEW = {
  protect: {
    label: "Protect",
    route: "/protect",
  },
  buy: {
    label: "Buy",
    route: "/buy",
  },
};

export const ACTIVITY_HISTORY = [
  {
    type: "Protect",
    currency: "WETH ",
    usdcPriceLimit: 3841.28,
    ethPriceLimit: 0.07,
    orderDate: "14th Sept, 2021",
    orderTime: "18:22 IST",
  },
  
];

export const ASSETS_VALUE = [
  "0xd0A1E359811322d97991E03f863a0C30C2cF029C",

  "link",

  "usdc",

  "wbtc",

  "uni",

  "weth",
];

export const protect_abi2 = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];

export const buy_abi2 = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      },
      {
        name: "_spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];

export const redeem_box_view_balance_abi = [
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

export const redeem_box_withdraw_abi = [
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

export const confirm_details_deposit_stop_abi = [
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

export const confirm_details_deposit_limit_abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "Token_owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "executed",
        type: "bool"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "created",
        type: "bool"
      }
    ],
    name: "AssetInformationUploadedEvent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      }
    ],
    name: "limitBuy_deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      }
    ],
    name: "stopLoss_deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepLimit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepStop",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "assetInformationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "assetInformations",
    outputs: [
      {
        internalType: "address",
        name: "Token_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "balances",
    outputs: [
      {
        internalType: "address",
        name: "_token_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "checkLimit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "checkStop",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "dexRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "interval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "limitOrders",
    outputs: [
      {
        internalType: "address",
        name: "Token_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "stopOrders",
    outputs: [
      {
        internalType: "address",
        name: "Token_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_desired",
        type: "address"
      },
      {
        internalType: "address",
        name: "asset_deposited",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "total_asset_value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dip_amount",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address"
      }
    ],
    name: "viewOrders",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
