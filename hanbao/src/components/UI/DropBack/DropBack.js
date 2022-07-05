import React from "react";
import styles from "./dropBack.module.css";
import ReactDOM from "react-dom";

const DropBack = (props) => {
  const { className, children } = props;
  const dropBack = document.querySelector("#dropBack");

  return ReactDOM.createPortal(
    <div className={`${styles.wrap} ${className}`}>{children}</div>,
    dropBack
  );
};

export default DropBack;
