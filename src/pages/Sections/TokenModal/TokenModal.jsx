import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useContext, useState } from "react";
import { ASSETS_VALUE } from "../../../utils/constants";

const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("weth");

  const handleClick = (e) => {};
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
