import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";

import { MoralisProvider } from "react-moralis";
import { StoreProvider } from "./ContextAPI/Store";
import dotenv from "dotenv";
dotenv.config()

// we need to hard code appId and serverURL
ReactDOM.render(
  <MoralisProvider
    appId="8PTpuPJlBziISOTScCHGfrKiunyea2t1Cr2PmWhi"
    serverUrl="https://inmtlgdrn2u9.moralishost.com:2053/server"
  >
    <StoreProvider>
      <App />
    </StoreProvider>
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
