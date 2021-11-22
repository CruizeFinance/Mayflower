//https://docs.aave.com/developers/the-core-protocol/addresses-provider
pragma solidity ^0.8.0;

import 'https://github.com/aave/protocol-v2/blob/ice/mainnet-deployment-03-12-2020/contracts/interfaces/ILendingPoolAddressesProvider.sol';
import 'https://github.com/aave/protocol-v2/blob/ice/mainnet-deployment-03-12-2020/contracts/interfaces/ILendingPool.sol';

interface IaToken {
    function balanceOf(address _user) external view returns (uint256);
    function redeem(uint _amount) external;
}

interface IAaveLendingPool {
    function deposit(
        address _reserve,
        uint256 _amount, 
        uint16 _referralCose
        ) external;
}


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

contract AAVE2 {
    
    //TODO Implement lending pool provider to fetch data automatically.
    
    //IlendingPoolAddressProvider provider = IlendingPoolAddressProvider();
    //IlendingPool public lendingPool = ILendingPool(provider.getLendingPool());
    
    // For Kovan TestNet
    IERC20 public USDT = IERC20(0xe22da380ee6B445bb8273C81944ADEB6E8450422);
    ILendingPool public lendingPool = ILendingPool(0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe);
    
    function amount() public view returns(uint256) {
        return(USDT.balanceOf(address(this)));
    }
    
    function approveStake(uint _amt) external {
        USDT.approve(0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe,_amt);
    } 
    
    function deposit(uint _amt) external {
        USDT.transferFrom(msg.sender, address(this), _amt);
    }
    
    function stake(uint256 _amt) external {
        
        uint16 referral = 0;
        
        lendingPool.deposit(address(USDT), _amt, address(this), referral);
    }
    
    function withdrawToSC(uint256 _amt) external {
        lendingPool.withdraw(address(USDT),_amt, address(this));
    }


    function Stake(address assetToStake, uint256 _amt) public {
        // For Kovan TestNet
        IERC20  token = IERC20(assetToStake);
        ILendingPool lendingPool = ILendingPool(0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe);
        token.approve(0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe, _amt);
        uint16 referral = 0;
        lendingPool.deposit(address(USDT), _amt, address(this), referral);
    }
    

}
