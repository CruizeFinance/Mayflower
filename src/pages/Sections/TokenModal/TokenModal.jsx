import { MenuItem, Select } from "@mui/material";
import { Sprite } from "../../../components";
import { useState } from "react";

const TokenModal = () => {
  const [tokenValue, setTokenValue] = useState("eth");

  return (
    <Select
      value={tokenValue}
      onChange={(e) => setTokenValue(e.target.value)}
      className={`select`}
    >
      <MenuItem value="eth" data-my-value={5}>
        <Sprite id="eth" width={14} height={14} />
        &nbsp;Ethereum
      </MenuItem>
    </Select>
  );
};

export default TokenModal;
