import React,{ useEffect } from 'react';

const EffectAsync = () => {

  //! 如果 useEffect 第一个参数传入 async，返回值则变成了 Promise，会导致 react 在调用销毁函数的时候报错**。
// *  由于 useEffect 是在函数式组件中承担执行副作用操作的职责，
// *  它的返回值的执行操作应该是可以预期的，而不能是一个异步函数，所以不支持回调函数 async...await 的写法。

//*  我们可以将 async...await 的逻辑封装在 useEffect 回调函数的内部，
//*  这就是 ahooks useAsyncEffect 的实现思路，而且它的范围更加广，
//*  它支持的是所有的异步函数，包括 generator function。

  useEffect(async() =>{
    // !:错误写法
    const res = await new Promise(resolve =>resolve('ok'))
    console.log(res);
  },[])
  return (
    <div>

    </div>
  );
};

export default EffectAsync;
