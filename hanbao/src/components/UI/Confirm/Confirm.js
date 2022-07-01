import React from "react";
import DropBack from "../DropBack/DropBack";
import styles from "./confirm.module.css";

const Confirm = (props) => {
  const { text, onCancel, onOk } = props;
  return (
    <DropBack className={styles.drop}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>{text}</h2>
        <div className={styles.btn_wrap}>
          <button className={styles.cancel} onClick={onCancel}>
            取消
          </button>
          <button className={styles.ok} onClick={onOk}>
            确定
          </button>
        </div>
      </div>
    </DropBack>
  );
};

export default Confirm;
