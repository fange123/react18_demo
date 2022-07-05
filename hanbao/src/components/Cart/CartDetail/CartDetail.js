import React, { useContext, useState } from "react";
import DropBack from "../../UI/DropBack/DropBack";
import styles from "./cartDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetail = () => {
  const ctx = useContext(CartContext);
  const { items, dispatch } = ctx;
  const [showConfirm, setShowConfirm] = useState(false);

  const handelCancel = () => {
    setShowConfirm(false);
  };
  const handelOk = () => {
    dispatch({ type: "clearCart" });
    setShowConfirm(false);
  };
  return (
    <DropBack>
      {/*stopPropagation 防止 遮罩层关闭事件的冒泡 */}
      <div className={styles.wrap} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 className={styles.title}>餐品详情</h2>
          <div className={styles.clear} onClick={() => setShowConfirm(true)}>
            <FontAwesomeIcon icon={faTrash} className={styles.icon} />
            <span>清空购物车</span>
          </div>
        </header>
        <div className={styles.meal_list}>
          {items.map((item) => (
            <Meal key={item.id} mealData={item} noDesc />
          ))}
        </div>

        {showConfirm && (
          <Confirm
            text='确定清空购物车吗'
            onOk={handelOk}
            onCancel={(e) => {
              e.stopPropagation();
              handelCancel();
            }}
          />
        )}
      </div>
    </DropBack>
  );
};

export default CartDetail;
