import { Button } from "../../../components";
import "../../pages.scss";
import { useContext } from "react";
import { setBlockData } from "../../../ContextAPI/ContextApi";
import {
  CONTRACT_ADDRESS,
  redeem_box_view_balance_abi,
  redeem_box_withdraw_abi
} from "../../../utils/constants";
import { useWeb3React } from "@web3-react/core";

const RedeemBox = () => {
  const { type } = useContext(setBlockData);
  const { account, library } = useWeb3React();

  const viewBalances = async (addressOfUser) => {
    const contract = await new library.eth.Contract(
      redeem_box_view_balance_abi,
      CONTRACT_ADDRESS
    );
    var meth = contract.methods;
    const reciept = await meth.balances(addressOfUser).call();

    return reciept;
  };
  const withdraw = async (addressOfUser) => {
    const contract = await new library.eth.Contract(
      redeem_box_withdraw_abi,
      CONTRACT_ADDRESS
    );
    const reciept = await viewBalances(addressOfUser);
    var meth = contract.methods;

    await meth
      .withdraw(reciept._amt, reciept._token)
      .send({ from: addressOfUser, value: 0 });
  };

  const redeem = async (e) => {
    withdraw(account);
  };

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
          <Button onClick={redeem}>
            Redeem
            <br />
            Asset
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
