import Context from "../store/testContext";
import { useContext } from "react";

// ? context使用方式1:
// ? 1.引入context
// ? 2.使用勾子函数useContext()获取context中的数据
// ?   只能在函数组件中使用

//* context.Provider表示生产者，可以使用它来指定context中的数据
//* 通过value来传递数据，子组件(A，C，D)都可以访问
//  <Context.Provider value={{ name: "周三" }}>
//    <A />
//    <C />
//    <D />
//  </Context.Provider>;
//* 通过context获取数据，他会获取离他最近的Provider的数据
//  <Context.Provider value={{ name: "周三" }}>
//    <A />
//  <Context.Provider value={{ name: "李四" }}>
//    <A />
//    <C />
//    <D />
//  </Context.Provider>;
//    <C />
//    <D />
//  </Context.Provider>;
//* 如果没有Provider,会默认获取context的初始值，但是一般没啥用

const B = () => {
  const ctx = useContext(Context);
  return <div>{ctx.name}</div>;
};

export default B;
