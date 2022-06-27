import React from "react";
import styles from "./App.module.css";
import A from "./components/A";
import B from "./components/B";

//!: import './App.css' 全局引入样式，会暴露给所有组件，不仅仅是子组件，如果类名一样，就容易出问题，后面的组件的同名类会覆盖前面组件的同名类

//~ css 模块化 的方式引入css样式
//? 1.创建xxx.modules.css的css模块的样式文件，必须写module
//? 2.在组建中通过import styles from "./App.module.css";方法引入
//? 3.通过styles来设置类

const App = () => {
  return (
    <div className={styles.p1}>
      app
      <A />
      <B />
    </div>
  );
};

export default App;
