import React from "react";
import styles from "./checkoutItem.module.css";
import Counter from "../../../UI/Counter/Counter";

const CheckoutItem = (props) => {
  const { meal } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.img_wrap}>
        <img alt='' src={meal.img} />
      </div>
      <div className={styles.desc}>
        <h2 className={styles.title}>{meal.title}</h2>
        <div className={styles.price_wrap}>
          <Counter mealData={meal} />
          <div className={styles.price}>{meal.price * meal.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
