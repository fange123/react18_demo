import React,{useInsertionEffect,useEffect,useLayoutEffect,useRef} from 'react';

// * 是三个effect--- 执行时间不一样--在某些方面(动态插入样式)，性能也会不一样
// # 组件挂载
// # state变化
// ? useInsertionEffect
// # dom改变
// ? useLayoutEffect,
// # 绘制屏幕
// ? useEffect


//!:开发过程中首选useEffect,如果在做某些样式效果的时候出现了闪烁的问题，就换其他的试试

const App = () => {

  const pRef = useRef(null)

useEffect(() => {
  console.log('useEffect',pRef);
},[])

useLayoutEffect(() => {
  console.log('useLayoutEffect',pRef);
},[])

useInsertionEffect(() => {
  console.log('useInsertionEffect',pRef);//获取不到ref，因为dom还没有生成
},[])

  return (
    <div>
      <p ref={pRef}>app</p>
    </div>
  );
};

export default App;
