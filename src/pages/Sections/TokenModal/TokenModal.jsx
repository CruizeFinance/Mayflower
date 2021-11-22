import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useState } from "react";

const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("eth");
  return (
    <Select
      value={tokenValue}
      onChange={(e) => setTokenValue(e.target.value)}
      displayEmpty
      className={`select`}
    >
      <MenuItem value="eth">
        <Sprite id="eth" width={14} height={14} />
        &nbsp;Ethereum
      </MenuItem>
      <MenuItem value="link">
        <Sprite id="link" width={14} height={14} />
        &nbsp;Link
      </MenuItem>
      <MenuItem value="usdc">
        <Sprite id="usdc" width={14} height={14} />
        &nbsp;USDC
      </MenuItem>
      <MenuItem value="wbtc">
        <Sprite id="wbtc" width={14} height={14} />
        &nbsp;WBTC
      </MenuItem>
      <MenuItem value="uni">
        <Sprite id="uni" width={14} height={14} />
        &nbsp;Uniswap
      </MenuItem>
      <MenuItem value="weth">
        <Sprite id="weth" width={14} height={14} />
        &nbsp;WETH
      </MenuItem>
    </Select>
  );
};

export default TokenModal;
