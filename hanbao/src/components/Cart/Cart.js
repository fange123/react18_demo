import React, { useContext, useState } from "react";
import styles from "./cart.module.css";
import bagPng from "../../asset/bag.png";
import CartContext from "../../store/cartContext";
import CartDetail from "./CartDetail/CartDetail";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CartContext);
  const { totalAmount, totalPrice } = ctx;
  const [showDetail, setShowDetail] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleDetail = () => {
    if (totalAmount === 0) {
      setShowDetail(false);
    }
    setShowDetail(!showDetail);
  };

  const handleShowCheckout = () => {
    if (totalAmount === 0) return;
    setShowCheckout(true);
  };

  return (
    <div className={styles.wrap} onClick={toggleDetail}>
      {showDetail && <CartDetail setShowDetail={setShowDetail} />}
      {showCheckout && <Checkout onHide={() => setShowCheckout(false)} />}
      <div className={styles.bag}>
        <img src={bagPng} alt='购物车' />
        {totalAmount === 0 ? null : (
          <span className={styles.count}>{totalAmount}</span>
        )}
      </div>
      {totalAmount === 0 ? (
        <p className={styles.no_meal}>未选购商品</p>
      ) : (
        <div className={styles.price}>{totalPrice}</div>
      )}
      <button
        className={`${styles.button} ${
          totalAmount === 0 ? styles.btn_disabled : ""
        }`}
        onClick={handleShowCheckout}
      >
        去结算
      </button>
    </div>
  );
};

export default Cart;
