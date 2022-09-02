import React,{ useState,useRef,useEffect } from 'react';
import Some from "./components/Some"



const App = () => {
  const [count,setCount] = useState(0);
  const pRef = useRef(null)
  const someBtnRef = useRef(null)

  useEffect(() => {
    console.log(pRef);
    console.log(someBtnRef);
    someBtnRef.current.changeButtonValue('哈哈哈哈哈')
  },[])

  return (
    <div>
      <p ref={pRef}>count:{count}</p>
      {/* 组件的ref获取方法，使用forwardRef包裹，选取想获取的dom元素的ref */}
      <Some ref={someBtnRef}/>
      <button onClick={()=>setCount(count+1)}>增加</button>

    </div>
  );
};

export default App;
