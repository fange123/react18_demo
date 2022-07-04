import React, { useContext } from "react";
import CartContext from "../../../../store/cartContext";
import styles from "./bar.module.css";

const Bar = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={styles.wrap}>
      <div className={styles.price}>{ctx.totalPrice}</div>
      <button className={styles.button}>去支付</button>
    </div>
  );
};

export default Bar;
