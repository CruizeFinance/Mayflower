import axios from "axios";
import { COINBASEAPI } from "../constants";
let USDC_PRICE_OF_ETH = 0;

const getDipValue = async (userAsset) => {
  
  USDC_PRICE_OF_ETH  =await CoinBaseAPI();
  console.log(USDC_PRICE_OF_ETH*0.85)

  return (USDC_PRICE_OF_ETH*0.85)
};
const CoinBaseAPI = async (userAsset) => {
  try {
    // calling Coin Base API that will return the 1 ETH value in USD 
    const usdcValue = await axios.get(COINBASEAPI);
console.log(usdcValue)
    // getting the value of USD
    return usdcValue?.data?.data?.amount;
  } catch (error) {
    console.log(error);
  }
};
export { getDipValue };
