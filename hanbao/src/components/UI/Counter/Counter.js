import React, { useContext } from "react";
import styles from "./counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";

// * 使用fortawesome  https://fontawesome.com/v6/docs/web/use-with/react/
//? 在react中安装几个依赖
//? npm i --save @fortawesome/fontawesome-svg-core
//? # npm i --save @fortawesome/free-solid-svg-icons
//? npm i --save @fortawesome/free-regular-svg-icons
//? npm i --save @fortawesome/react-fontawesome@latest
//? 安装完引入组件import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//? 引入图标（需要查询自己所需要的,比如官网查到所需的组件及图表手<FontAwesomeIcon icon="fa-solid fa-plus" />），那么引入的图表就会死FaPlus

const Counter = (props) => {
  const ctx = useContext(CartContext);
  const { dispatch } = ctx;
  const { mealData } = props;
  return (
    <div className={styles.wrap}>
      {mealData.amount ? (
        <>
          <button
            className={styles.sub}
            onClick={() =>
              dispatch({ type: "removeItem", payload: { meal: mealData } })
            }
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={styles.count}>{mealData.amount}</span>
        </>
      ) : null}
      <button
        className={styles.add}
        onClick={() => {
          dispatch({ type: "addItem", payload: { meal: mealData } });
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
