import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useState } from "react";

const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("weth");

  return (
    <Select
      value={tokenValue}
      onChange={(e) => setTokenValue(e.target.value)}
      className={`select`}
    >
      <MenuItem value="weth" data-my-value={5}>
        <Sprite id="weth" width={14} height={14} />
        &nbsp;WETH
      </MenuItem>
    </Select>
  );
};

export default TokenModal;
