import React, { useState } from "react";
import B from "./B";

const A = () => {
  console.log("A组件渲染");
  const [count, setCount] = useState(0);

  // * 父组件发生变化（重新渲染）会影响子组件，孙子组件发生重新渲染
  // * 而子孙组件的有些重新渲染是没必要的

  //* react.memo是对组件进行缓存的，只针对函数式组件，，高阶函数（函数的参数或者函数的返回值是一个函数）
  //*   使用react.memo包装组件，见C.js
  //*   使用react.memo接受一个组件作为参数，并且返回一个包装过的新组件，就会具有缓存功能
  //*   react.memo包装完的组件，只有当props发生变化才会渲染

  //!:一般在小组件没太多必要写 react.memo,除非有很大的组件，不希望无用渲染的时候，可以在导出该组件的时候用react.memo()包裹起来
  return (
    <div>
      <h2>A组件{count}</h2>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
      <B />
    </div>
  );
};

export default A;
