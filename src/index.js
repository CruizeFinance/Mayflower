import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
import dotenv  from 'dotenv'
import { MoralisProvider } from "react-moralis";
dotenv.config()
ReactDOM.render(
  <MoralisProvider appId="" serverUrl="">
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
