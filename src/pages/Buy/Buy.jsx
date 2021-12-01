import { Slider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MARKS, VIEW } from "../../utils/constants";
import { InfoBox, InputField, ViewLinks, TokenModal } from "../Sections";
import { Button } from "../../components";
import { useMoralis } from "react-moralis";
import "../pages.scss";
import { useContext, useEffect, useState } from "react";
import { ERC20_ABI } from "../../Blockchain/Abis/ERC20_json_abi";
import { loadContract } from "../../Blockchain/LoadSmartContract";
import { setBlockData } from "../../ContextAPI/ContextApi";

const Buy = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  const {
    price,
    setPrice,
    protectedAmount,
    setProtectedAmount,
    setTotalLimit,web3,address
  } = useContext(setBlockData);
  
  const [totalValue, setTotalValue] = useState(null);
  useEffect(() => setTotalValue(parseFloat(price) * parseFloat(protectedAmount)), [price, protectedAmount]);
  
 
  

    const  approve_usdc = async (_value, _token, addressOfUser) => {
 
    const contract = await new web3.eth.Contract(ERC20_ABI,_token)
    var meth = contract.methods;
    console.log(address);
    if(address!=null){
      await meth.approve('0x04796D80B66544EF9C4A08A5477E35C1632719f9', 
      web3.utils.toBN(_value*1e8)).send({from: addressOfUser ,value: 0}).then(console.log);
      
    } else {
      console.log('Wallet not connected!')
    }
  }

  const approve_Usdc = async (e)=>{
    approve_usdc(price, '0xe22da380ee6B445bb8273C81944ADEB6E8450422', address)
  }




let disable = true;
const input_fill = ()=>{
  window.alert("please fill the proper information before Hedge WETH ")
}

setTotalLimit( price*protectedAmount ) // karan will help us 
useEffect(() => {

if(!price || !protectedAmount){
  disable = true;
}
else {
  disable = false
}

}, [price,protectedAmount])
  return (
    <>
      <TokenModal />
      <ViewLinks map={VIEW} page={"buy"} />
      <InputField
        inputLabel="Buy Prices"
        currency="USDC"
        onChange={(e) =>
          setPrice(e.target.value < 0 ? (e.target.value = 0) : e.target.value)
        }
        tooltip={
          "Order is triggered when the market price of the asset reaches this price. For example - Price Limit of 4200 USDC for ETH with a market price of 4400 USDC"
        }
      />
      {/* <Box sx={{ width: 400 }} className={`slider`}>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={1}
          valueLabelDisplay="auto"
          marks={MARKS}
        />
      </Box> */}
      <InputField
        inputLabel="Buy Amount"
        currency="WETH"
        /* showMaxTag */
        onChange={(e) =>
          setProtectedAmount(
            e.target.value < 0 ? (e.target.value = 0) : e.target.value
          )
        }
        tooltip={
          "The quantity of the asset from your wallet you’d like to use for the order. For example - 0.07 WETH  out of the 0.09 ETH in your wallet."
        }
      />
      <InputField
        value={totalValue}
        inputLabel="Total Limit"
        currency="USDC"
        // onChange={(e) =>
        //   setTotalLimit(
        //     e.target.value < 0 ? (e.target.value = 0) : e.target.value
        //   )
        // }
        tooltip={
          "Total price floor of your asset holding which is the product of the limit and amount. For example - 0.07 WETH  staked with 4200 USDC limit will give 294 USDC as the total limit."
        }
      />
      <div className={`hedge-eth`}>
        {!isAuthenticated ? (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Connect your wallet to continue
            </Typography>
            <Button width={400} onClick={authenticate}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              style={{ color: "var(--gray)", marginBottom: "10px" }}
            >
              Add the required USDC balance to confirm the order
            </Typography>
              <Link to="/confirm?type=buy" style={{ textDecoration: "none" }}>
                <Button width={400} onClick={approve_Usdc} >
                 Buy WETH 
                </Button>
              </Link>
          </>
        )}
      </div>
      <InfoBox
        dialogTwoLabel={"Looking to add Price Protection?"}
        showSetUpLink
        type="Buy"
      />
    </>
  );
};

export default Buy;
