import React from "react";
import Meal from "./Meal/Meal";
import styles from "./meals.module.css";

const Meals = (props) => {
  const { mealData } = props;
  return (
    <div className={styles.meals}>
      {mealData.map((item) => (
        <Meal key={item.id} mealData={item} />
      ))}
    </div>
  );
};

export default Meals;
