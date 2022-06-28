import React from "react";
import Meal from "./Meal/Meal";
import styles from "./meals.module.css";

const Meals = () => {
  return (
    <div className={styles.meals}>
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
    </div>
  );
};

export default Meals;
