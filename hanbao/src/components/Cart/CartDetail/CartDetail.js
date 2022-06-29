import React, { useContext } from "react";
import DropBack from "../../UI/DropBack/DropBack";
import styles from "./cartDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/Meal";

const CartDetail = () => {
  const ctx = useContext(CartContext);
  const { items } = ctx;
  return (
    <DropBack>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 className={styles.title}>餐品详情</h2>
          <div className={styles.clear}>
            <FontAwesomeIcon icon={faTrash} className={styles.icon} />
            <span>清空购物车</span>
          </div>
        </header>
        <div className={styles.meal_list}>
          {items.map((item) => (
            <Meal key={item.id} mealData={item} noDesc />
          ))}
        </div>
      </div>
    </DropBack>
  );
};

export default CartDetail;
