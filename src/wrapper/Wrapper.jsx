import { memo } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Wrapper = () => {
  return (
    <Box style={{ height: "100vh" }}>
      <Header />
      <Toolbar />
      <Content />
    </Box>
  );
};

export default memo(Wrapper);
