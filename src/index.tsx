import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "@/App";
// 对css进行重置
// import "normalize.css";
import "./assets/css/index.less";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // 包含严格模式
  // <React.StrictMode>
  // </React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
);
