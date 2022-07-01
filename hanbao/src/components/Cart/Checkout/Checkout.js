import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";

const Checkout = (props) => {
  const { onHide } = props;
  const checkout = document.querySelector("#checkout");
  const ctx = useContext(CartContext);
  const { totalPrice } = ctx;

  return ReactDOM.createPortal(
    <div className={styles.wrap}>
      <div className={styles.close}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.icon}
          onClick={onHide}
        />
      </div>
      <div className={styles.description}>
        <header className={styles.title}>餐品详情</header>
        <div className={styles.list}>列表</div>
        <footer className={styles.footer}>
          <span className={styles.price}>{totalPrice}</span>
        </footer>
      </div>
    </div>,
    checkout
  );
};

export default Checkout;
