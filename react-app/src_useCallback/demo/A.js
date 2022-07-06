import React, { useState, useCallback } from "react";
import B from "./B";

const A = () => {
  const [count, setCount] = useState(0);
  console.log("A组件渲染");

  // * useCallback用来创建react中的回调函数
  // * useCallback创建的回调函数不会在函数重新渲染的时候重新创建

  const addCount = () => {
    // ~addCount会随着函数体的重新渲染（count的改变）而重新创建，每次都是一个新的addCount,所以addCount这样的函数
    // ~传给子组件时，会导致子组件的重新渲染
    setCount(count + 1);
  };

  // * useCallback
  // *参数1:回调函数
  // *参数2:依赖的数组
  // *当依赖数组中的变量发现变化时，回调函数才会重新创建
  // *如果不指定依赖数组，回调函数会每次都重新创建，就失去useCallback的意义了
  // *依赖项是一个空数组的时候，就只是在初始化的时候创建一次
  // *一定要将回调函数中用到的变量都放到依赖数组里面，除了（setSate）

  //~但是在这个例子中，使用useCallback和不用效果是一样的，useCallback并没有起到啥效果

  const addCount1 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>A组件</h2>
      <div>{count}</div>
      <button onClick={addCount1}>增加</button>
      <B addCount={addCount1} />
    </div>
  );
};

export default A;
