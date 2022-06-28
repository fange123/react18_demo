import React from "react";
import Context from "../store/testContext";

// ? context使用方式1:
// ? 1.引入context
// ? 2.使用context.Consumer组件来创建元素
// ?   Consumer的标签体需要一个回调函数
// ?   它会将context中的数据设置为回调函数的参数，通过参数即可访问context中的数据

const A = () => {
  return (
    <Context.Consumer>
      {(ctx) => {
        return <div>{ctx.name}</div>;
      }}
    </Context.Consumer>
  );
};

export default A;
