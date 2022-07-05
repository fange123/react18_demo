import React, { useState, useEffect } from "react";
import styles from "./filterMeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilterMeals = (props) => {
  const { filterMeals } = props;
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value.trim());
  };

  useEffect(() => {
    // * 如果是发请求，需要性能优化，用户输入完以后再查询（防抖）
    const timeId = setTimeout(() => {
      // * 开启一个定时器的同时，应该把上一个给关掉
      filterMeals(keyword);
    }, 1000);

    // * useEffect的回调函数中，可以返回一个函数
    // * 这个函数可以叫做清理函数，它会在effect下次执行前调用
    // * 它会每次清理旧的effect产生的影响
    return () => clearTimeout(timeId);
  }, [keyword]);

  return (
    <div className={styles.wrap}>
      <div className={styles.input_wrap}>
        <input
          value={keyword}
          onChange={handleChange}
          type='text'
          placeholder='请输入关键字搜索'
          className={styles.input}
        />
        <FontAwesomeIcon icon={faSearch} className={styles.font_icon} />
      </div>
    </div>
  );
};

export default FilterMeals;
