import React from "react";
import Counter from "../../UI/Counter/Counter";
import styles from "./meal.module.css";

const Meal = () => {
  return (
    <div className={styles.meal}>
      <div className={styles.img_wrap}>
        <img src='/img/meals/1.png' alt='汉堡图片' />
      </div>
      <div className={styles.wrap}>
        <h2 className={styles.title}>汉堡包</h2>
        <p className={styles.desc}>
          色泽红润,口味浓郁,酱香四逸肥而不腻,瘦而不柴
          百吃不腻老少皆宜滋阴之佳品补脑之尤物
        </p>
        <div className={styles.price_wrap}>
          <span className={styles.price}>12</span>
          <Counter amount={1} />
        </div>
      </div>
    </div>
  );
};

export default Meal;
