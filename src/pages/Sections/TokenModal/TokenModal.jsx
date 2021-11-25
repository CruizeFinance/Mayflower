import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useContext, useState } from "react";
import { ASSETS_VALUE } from "../../../utils/constants";
import { setBlockData } from "../../../ContextAPI/ContextAPI";

const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("eth");
  const { setAssetsAddress, assetsAddress } = useContext(setBlockData);
  // getting value from the Menuitem's
  const handleClick = (e) => {
    const { myValue } = e.currentTarget.dataset;
    setAssetsAddress(ASSETS_VALUE[myValue]);
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
      <MenuItem data-my-value={0} value={"eth"} onClick={handleClick}>
        <Sprite id="eth" width={14} height={14} />
        &nbsp;Ethereum
      </MenuItem>
      <MenuItem value="link" data-my-value={1} onClick={handleClick}>
        <Sprite id="link" width={14} height={14} />
        &nbsp;Link
      </MenuItem>
      <MenuItem value="usdc" data-my-value={2} onClick={handleClick}>
        <Sprite id="usdc" width={14} height={14} />
        &nbsp;USDC
      </MenuItem>
      <MenuItem value="wbtc" data-my-value={3} onClick={handleClick}>
        <Sprite id="wbtc" width={14} height={14} />
        &nbsp;WBTC
      </MenuItem>
      <MenuItem value="uni" data-my-value={4} onClick={handleClick}>
        <Sprite id="uni" width={14} height={14} />
        &nbsp;Uniswap
      </MenuItem>
      <MenuItem value="weth" data-my-value={5} onClick={handleClick}>
        <Sprite id="weth" width={14} height={14} />
        &nbsp;WETH
      </MenuItem>
    </Select>
  );
};

export default TokenModal;
