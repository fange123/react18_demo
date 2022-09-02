import React,{ useState,useMemo } from 'react';
import Some from "./components/Some"

const sum = (a,b) => {
  console.log("sum函数执行了");
  return a+b;
}

const App = () => {
  const [count,setCount] = useState(0);
  let a = 10,b = 20
   if(count === 10){
    a = 11
  }
  // const result = sum(123,456) //*每次组件重新渲染，都会导致sum方法创新执行

  //* useMemo缓存的是函数的结果，添加依赖项
  const result = useMemo(()=> sum(123,456),[])

  //* useMemo还可以缓存组件
  const sumEle = useMemo(()=> <Some a={a} b={b}/>,[a,b])



  return (
    <div>
      <p>result:{result}</p>
      <p>count:{count}</p>
      {sumEle}

      <button onClick={()=>setCount(count+1)}>增加</button>

    </div>
  );
};

export default App;
