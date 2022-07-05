import React, { useReducer } from "react";
import styles from "./index.module.css";

//* 为了防止reducer在每次使用useReducer的时候都创建一遍，可以把它放到函数体外面
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};

const Index = () => {
  // const [count, setCount] = useState(0);

  // * Reducer就是用来整合复杂的state的

  // const addCount = () => {
  //   setCount(count + 1);
  // };
  // const reduceCount = () => {
  //   setCount(count - 1);
  // };

  //* useReducer三个参数
  //* 1.reducer:函数,是一个整合函数，所有修改state的方法会写在reducer里面该函数的返回值，会成为新state的值
  //*   reducer在执行时，会收到两个参数，param1时当前最新的state,param2是指令action对象（具体实现啥功能）
  //*   reducer干什么活，由action里面的type决定
  //* 2.initializerArg:初始值

  //* 返回值
  //* [用来获得的state的值，用来修改state的dispatch派发器]
  //* dispatch分发命令，reducer用来执行命令

  const addCount = () => {
    //* 在dispatch里面把指令action传过去
    dispatch({
      type: "add",
    });
  };

  const reduceCount = () => {
    dispatch({
      type: "reduce",
    });
  };

  const [count, dispatch] = useReducer(reducer, 1);
  return (
    <div className={styles.wrap}>
      <button onClick={addCount}>增加</button>
      <h2>{count}</h2>
      <button onClick={reduceCount}>减少</button>
    </div>
  );
};

export default Index;
