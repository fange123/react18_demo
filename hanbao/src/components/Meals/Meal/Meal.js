import React from "react";
import Counter from "../../UI/Counter/Counter";
import styles from "./meal.module.css";

const Meal = (props) => {
  const { img, title, desc, price, amount } = props;
  return (
    <div className={styles.meal}>
      <div className={styles.img_wrap}>
        <img src={img} alt='汉堡图片' />
      </div>
      <div className={styles.wrap}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.price_wrap}>
          <span className={styles.price}>{price}</span>
          <Counter amount={amount} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
