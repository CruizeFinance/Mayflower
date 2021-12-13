import { Button } from "../../../components";
import "../../pages.scss";
import { useContext, useEffect, useState } from "react";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import { WETH_ADDRESS } from "../../../utils/constants";
import { useWeb3React } from "@web3-react/core";

const RedeemBox = ({ type }) => {
  const { stopLoos_Contract } = useContext(setBlockData);
  const { account } = useWeb3React();
  const [withdraw_Token, setwithdraw_Token] = useState();

  /**
   * @function viewBalances - this function will return the asset's value  that is associate with the user address.
   * @param {user wallet address } addressOfUser
   * @returns it will return the asset's value that is associate with the user  address.
   */
  const viewBalances = async (addressOfUser) => {
    var meth = stopLoos_Contract.methods;
    const reciept = await meth.balances(addressOfUser).call();
    return reciept;
  };

  /**
   * @function withdraw  - this will withdraw the asset's that is associate to user address e.i WETH , USDC .
   * @param {user wallet address} addressOfUser
   */
  const withdraw = async (addressOfUser) => {
    const reciept = await viewBalances(addressOfUser);
    var meth = stopLoos_Contract.methods;
    await meth
      .withdraw(reciept._amt, reciept._token)
      .send({ from: addressOfUser, value: 0 });
  };

  /**
   * @function getBalanceInfo -  will proived the information about the user asset's  value that is belong to user account
   * i.e.
   * 1.  amount  - value that user have in our Smart contract .
   * 2.  token - the asset's address that user currently have on Smart  contract .
   * @dev stopLoos_Contract -  this contain's   our smart contract .
   */
  const getBalanceInfo = async () => {
    var meth = stopLoos_Contract.methods;
    // meth -  this variable have  all the method that our Smart contract have .
    let userAssetsInfo = await meth.balances(account).call();
    // setting up the token address that  is associate with user in our Smart contract.
    setwithdraw_Token(userAssetsInfo._token);
  };

  useEffect(() => {
    getBalanceInfo();
  }, []);

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
      {/* {type === "Protect" ? ( */}
      <div className={`redeem-details`}>
        {/* <div className={`token-details`}>
            <Typography variant={"body1"}>{Convert_toWei(userBalance,Math.pow(10,18))} WETH</Typography>
            <Typography variant={"body2"}>
              35.76% APY (
              <Sprite id="eth" width={14} height={14} /> WETH)
            </Typography>
          </div> */}
        <Button onClick={() => withdraw(account)}>
          Redeem
          <br />
          {withdraw_Token === WETH_ADDRESS ? "WETH" : "USDC"}
        </Button>
      </div>
      {/* ) : (
        <div className={`redeem-details`}> */}
      {/* <div className={`token-details`}>
            <Typography variant={"body1"}>{Convert_toWei(userBalance)} USDC</Typography>
            <Typography variant={"body2"}>
              35.76% APY (
              <Sprite id="eth" width={14} height={14} />{" "}
              WETH )
            </Typography>
          </div> */}
      {/* <Button width={100} onClick={redeem}>
            Redeem
            <br />
            Asset
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default RedeemBox;
