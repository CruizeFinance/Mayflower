import axios from "axios";
import { COIN_BASE_ASSET_PRICE_URL,APY_API_PATH } from "../constants";
let USDC_PRICE_OF_ETH = 0;

const getDipValue = async (userAsset) => {
  USDC_PRICE_OF_ETH  =await coinBaseAPI();
  return (USDC_PRICE_OF_ETH*0.85)
};
const coinBaseAPI = async (userAsset) => {
 try {
    // calling Coin Base API that will return the 1 ETH value in USD 
    const usdcValue = await axios.get(COIN_BASE_ASSET_PRICE_URL);
    // getting the value of USD
    return usdcValue?.data?.data?.amount;
  } catch (error) {
    console.log(error);
  }
};
const apyAprApi = async()=>{

 try {
    // calling APY APR API for WETH And USDC 
    const apyValue= await axios.get(APY_API_PATH);
    // getting the value of USD
    return apyValue;
  } catch (error) {
    console.log(error);
  }


}

export { getDipValue,apyApi };
