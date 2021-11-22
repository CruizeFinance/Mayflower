pragma solidity ^0.8.0;

// Working model for how the liquidation function (Stop Loss) should work. All of the information 
// for the swap transaction should be wrapped so that it will self populate with the 
// details of the account corresponding to the wallet address of the connected wallet.

/*
Demo built for rinkeby testnet. 

WETH Rinkeby = 0xc778417e063141139fce010982780140aa0cd5ab
BAT Rinkeby = 0xDA5B056Cfb861282B4b59d29c9B395bcC238D29B
UNIv2 Router Rinkeby = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D

notes: 
You must approve the contract to spend the WETH from the Rinkeby WETH SC directly. 
otherwise the transaction will fail. 
*/

/*  SHORT DESCRIPTION ON HOW TO USE
1) 
Call 'getAmountOutMin()' to get the minimum amount of tokens you will 
recieve if you performed the swap.

2) 
Then call the 'swap()' function in the contract and pass in 'AmountOutMin()'
as one of your parameters. 
*/


//import the ERC20 and Uniswap interfaces needed interface

interface IERC20 {
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}

interface IUniswapV2Router {
  function getAmountsOut(uint256 amountIn, address[] memory path)
    external
    view
    returns (uint256[] memory amounts);
  
  function swapExactTokensForTokens(
  
    uint256 amountIn,
    uint256 amountOutMin,
    address[] calldata path,
    address to,
    uint256 deadline
  ) external returns (uint256[] memory amounts);
}

interface IUniswapV2Pair {
  function token0() external view returns (address);
  function token1() external view returns (address);
  function swap(
    uint256 amount0Out,
    uint256 amount1Out,
    address to,
    bytes calldata data
  ) external;
}

interface IUniswapV2Factory {
  function getPair(address token0, address token1) external returns (address);
}


// ---------------------------- Actual Contract starts here --------------------------------

contract tokenSwap {
    //address of the uniswap v2 router on Rinkeby 
    address private constant UNISWAP_V2_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    
    //address of WETH token on Rinkeby  
    address private constant WETH = 0xc778417e063141139fce010982780140aa0cd5ab;

    // Function to transfer ERC20 tokens to the contract after they have been approved by the depositor  
    function depositToken(uint tokenAmount) public {
        IERC20 token = IERC20(0xc778417E063141139Fce010982780140Aa0cD5Ab);
        token.transferFrom(msg.sender, address(this), tokenAmount);
    }
    
    // The actual swap function, Calling this function will cause the SC to swap the tokens 
   function swap(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOutMin, address _to) external {
    // Approve the the Rinkeby Uniswap v2 Router to spend the coins that are held by the smart contract 
    IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);
    
    // Logic for the optimal path of the swap
    address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
        path = new address[](2);
        path[0] = _tokenIn;
        path[1] = _tokenOut;
        } else {
        path = new address[](3);
        path[0] = _tokenIn;
        path[1] = WETH;
        path[2] = _tokenOut;
        }
        // Calling the swap function from the uniswap V2 router contract on Rinkeby 
        IUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(_amountIn, _amountOutMin, path, _to, block.timestamp);
    }
    
     function getAmountOutMin(address _tokenIn, address _tokenOut, uint256 _amountIn) external view returns (uint256) {
        // Logic to get the optimal path for the swap
        address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
            path = new address[](2);
            path[0] = _tokenIn;
            path[1] = _tokenOut;
        } else {
            path = new address[](3);
            path[0] = _tokenIn;
            path[1] = WETH;
            path[2] = _tokenOut;
        }
        // Calling the .getAmountsOut() univswap v2 router contract 
        uint256[] memory amountOutMins = IUniswapV2Router(UNISWAP_V2_ROUTER).getAmountsOut(_amountIn, path);
        return amountOutMins[path.length -1];  
    }  
}