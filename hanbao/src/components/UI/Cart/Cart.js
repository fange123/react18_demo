import React, { useContext } from "react";
import styles from "./cart.module.css";
import bagPng from "../../../asset/bag.png";
import CartContext from "../../../store/cartContext";

const Cart = () => {
  const ctx = useContext(CartContext);
  const { totalAmount, totalPrice } = ctx;
  return (
    <div className={styles.wrap}>
      <div className={styles.bag}>
        <img src={bagPng} alt='购物车' />
        <span className={styles.count}>{totalAmount}</span>
      </div>
      <div className={styles.price}>{totalPrice}</div>
      <button className={styles.button}>去结算</button>
    </div>
  );
};

export default Cart;
