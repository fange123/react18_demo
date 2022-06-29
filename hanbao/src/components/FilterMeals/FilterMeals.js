import React from "react";
import styles from "./filterMeals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilterMeals = (props) => {
  const { filterMeals } = props;

  const handleChange = (e) => {
    const keyword = e.target.value;
    filterMeals(keyword);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.input_wrap}>
        <input
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
