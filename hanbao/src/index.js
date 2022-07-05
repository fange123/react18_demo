import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//* 设置移动端的适配 --除的数值一般是设计图的宽度
document.documentElement.style.fontSize = 100 / 750 + "vw"; //指定视口的宽度
//除以机，适口的宽度就是多少--750
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
