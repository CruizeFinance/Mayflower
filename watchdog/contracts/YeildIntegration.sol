pragma solidity ^0.8.0;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol';

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

contract AaveYeild {
    IERC20 public dai = IERC20();
    IaToken public IaToken();
    IAaveLendingPool public aaveLendingPool = IAaveLendingpool();

    mapping(address => uint256) public userSepositedDai;

    constructor() public {
        // Approve spend function 
        dai.approve(address(aaveLendingPool), type(uint256) max);
    }

    function userDepositDai(uint256 _amountInDai) external {
        userDepositedDai[msg.sender] = _amountInDai;
        // Require the DAI transferFrom
        require(dai.transferFrom(
            msg.sender, 
            address(this
            ), _amountInDai), 'DAI Transfer failed!')
        aaveLendingPool.deposit(address(dai), _amountInDai, 0);
    }

    function userWithdrawDai(uint _amountInDai) external {
        require(userDepositedDai[msg.sender] >= _amountInDai,
        "DAI Transfer Failed"
        );

        userDepositedDai[msg.sender] = userDepositedDai[msg.sender] - _amountInDai;
    }
}