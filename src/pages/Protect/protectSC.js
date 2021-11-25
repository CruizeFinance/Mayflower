import Web3 from 'web3';
import { loadWeb3 } from "../../Blockchain/LoadSmartContract";

// Only deposit WETH using this function as the decimal conversion will be off 
// for other assets that do not have the same # of decimals.
const stopDeposit = async (USDC_address, assetToDeposit, value, dip, userAddress) => {
    loadWeb3();
    const web3 = window.web3;
    const abi = [
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
        "inputs": [
            {
                "internalType": "bytes",
                "name": "checkData",
                "type": "bytes"
            }
        ],
        "name": "checkUpkeep",
        "outputs": [
            {
                "internalType": "bool",
                "name": "upkeepNeeded",
                "type": "bool"
            },
            {
                "internalType": "bytes",
                "name": "performData",
                "type": "bytes"
            }
        ],
        "stateMutability": "nonpayable",
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
                "internalType": "bytes",
                "name": "performData",
                "type": "bytes"
            }
        ],
        "name": "performUpkeep",
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
    ]
    const address_main = '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d';
    const contractMain = await new web3.eth.contract(abi, address_main);
    const valueWei = web3.utils.toBN(web3.utils.toWei(value, 'ether'));
    const convertDip = dip * 1e8;
    await contractMain.methods.stopLoss_deposit(
        USDC_address, 
        assetToDeposit, 
        valueWei, 
        convertDip).send({from: userAddress , value:0}).then(console.log);
    console.log('SC function has been called');
};


const approve_WETH = async ( _value, userAddress) => {
    loadWeb3();
    const web3 = window.web3;
    const ERC20address = '0xd0A1E359811322d97991E03f863a0C30C2cF029C';
   
    const ERCabi = [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }
    ]
    const _wei = web3.utils.toWei(_value);
    const contractERC20 = await new web3.eth.Contract(ERCabi, ERC20address);
    const ERC20 = contractERC20.methods;
    await ERC20.approve(
        '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d',
        _wei).send({from: userAddress, vlaue:0});
    console.log('approve()  function has been called');
    
}

const approve_USDC = async ( _value, userAddress) => {
    loadWeb3();
    const web3 = window.web3;
    const ERC20address = '0xe22da380ee6B445bb8273C81944ADEB6E8450422';
   
    const ERCabi = [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }
    ]
    const _wei = _value * 1e6;
    const contractERC20 = await new web3.eth.Contract(ERCabi, ERC20address);
    const ERC20 = contractERC20.methods;
    await ERC20.approve(
        '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d',
        _wei).send({from: userAddress, vlaue:0});
    console.log('approve()  function has been called');
    
}

// Only deposit USDC using this address due to the 6 decimal place conversion.
const limitDeposit = async(assetToBuy_address, StableCoinAddress, value, dip, userAddress) => {
    loadWeb3();
    const web3 = window.web3;
    const abi = [
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
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "checkData",
                    "type": "bytes"
                }
            ],
            "name": "checkUpkeep",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "upkeepNeeded",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "name": "performUpkeep",
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
        ]
    const address_main = '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d';
    const contractMain = await new web3.eth.contract(abi, address_main);
    const valueWei = value * 1e6;
    const convertedDip = dip * 1e8;

    await contractMain.methods.limitBuy_deposit(
        assetToBuy_address,
        StableCoinAddress,
        valueWei,
        convertedDip
    ).send({from: userAddress, value:0});
}


const withdraw = async(addressOfUser) => {
    loadWeb3();
    const web3 = window.web3;
    const abi = [
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
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "checkData",
                    "type": "bytes"
                }
            ],
            "name": "checkUpkeep",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "upkeepNeeded",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "name": "performUpkeep",
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
        ]
    const address_main = '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d';
    const contractMain = await new web3.eth.contract(abi, address_main);
    const meth = contractMain.methods;
    const reciept = await meth.balances(addressOfUser).call();
    await meth.withdraw(
        reciept._amt,
        reciept._token
    ).send({from: addressOfUser, value: 0});
}

const viewBalances = async(addressOfUser) => {
    loadWeb3();
    const web3 = window.web3;
    const abi = [
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
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "checkData",
                    "type": "bytes"
                }
            ],
            "name": "checkUpkeep",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "upkeepNeeded",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "internalType": "bytes",
                    "name": "performData",
                    "type": "bytes"
                }
            ],
            "name": "performUpkeep",
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
        ]
    const address_main = '0x72D28BCa958f45aEC793df2E62a1b19a9C4c4d4d';
    const contractMain = await new web3.eth.contract(abi, address_main);
    const meth = contractMain.methods;
    const reciept = await meth.balances(addressOfUser).call();
    return (reciept._token, reciept._amt);
}


export { stopDeposit, approve_WETH, limitDeposit, approve_USDC, withdraw, viewBalances };