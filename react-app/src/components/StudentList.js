import React from "react";
import Student from "./Student";
import styles from "./index.module.css";

const StudentList = (props) => {
  const { list } = props;
  return (
    <table className={styles.table}>
      <caption>学生信息学管理</caption>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>地址</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item) => (
          <Student key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
