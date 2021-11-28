import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useContext, useState } from "react";
import { ASSETS_VALUE } from "../../../utils/constants";


const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("weth");

  // getting value from the Menuitem's
  const handleClick = (e) => {
    // const { myValue } = e.currentTarget.dataset;
    // setAssetsAddress(ASSETS_VALUE[myValue]);
  };
  // comment out this to see reuslt  |-->
  // console.log(assetsAddress);
  return (
    <Select
      value={tokenValue}
      onChange={(e) => setTokenValue(e.target.value)}
      displayEmpty
      className={`select`}
    >

        <MenuItem value="weth" data-my-value={5} onClick={handleClick}>
        <Sprite id="weth" width={14} height={14} />
        &nbsp;WETH
      </MenuItem>

      <MenuItem value="usdc" data-my-value={2} onClick={handleClick}>
        <Sprite id="usdc" width={14} height={14} />
        &nbsp;USDC
      </MenuItem>
    
    
    </Select>
  );
};

export default TokenModal;
