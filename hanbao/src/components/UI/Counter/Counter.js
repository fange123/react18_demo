import React from "react";
import styles from "./counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// * 使用fortawesome  https://fontawesome.com/v6/docs/web/use-with/react/
//? 在react中安装几个依赖
//? npm i --save @fortawesome/fontawesome-svg-core
//? # npm i --save @fortawesome/free-solid-svg-icons
//? npm i --save @fortawesome/free-regular-svg-icons
//? npm i --save @fortawesome/react-fontawesome@latest
//? 安装完引入组件import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//? 引入图标（需要查询自己所需要的,比如官网查到所需的组件及图表手<FontAwesomeIcon icon="fa-solid fa-plus" />），那么引入的图表就会死FaPlus

const Counter = (props) => {
  const { amount } = props;
  return (
    <div className={styles.wrap}>
      {amount ? (
        <>
          <button className={styles.sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={styles.count}>{amount}</span>
        </>
      ) : null}
      <button className={styles.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
