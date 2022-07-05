import React from "react";
//* context上下文，用于组件之间共享数据
//* 相当于公共的存储数据 的区域，这样组件可以不用通过props就能访问context里面的数据
//? 1.通过react.createContext()创建

const Context = React.createContext({
  name: "hh",
});

export default Context;
