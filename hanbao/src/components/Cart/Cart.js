import React, { useContext, useState, useEffect } from "react";
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

  //TODO:函数体中不能直接修改state，否则会导致死循环，报错，too many render
  // if (ctx.totalAmount === 0) {
  //   setShowDetail(false);
  // }

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetail(false);
      setShowCheckout(false);
    }

    // * 通常在useEffect中用到的变量（自己创建的）都需要写在依赖项里面，像setShowCheckout这种setState是react创建的，它不会发生变化的，所以可以不用把它写在依赖里面
    // * 如果依赖项只写一个空数组，它只会在组件初始化的时候执行一次
  }, [ctx.totalAmount]);

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
      {showDetail && <CartDetail />}
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
