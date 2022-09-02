import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';

const Demo = () => {
  const divRef = useRef(null)
  const [show,setShow] = useState(false)

  // !:在react17中 useEffect会有明显的闪烁，但是18中没有太大的区别


  useEffect(()=> {
    console.log('useEffect',divRef.current);
    if(!divRef.current) return;
    divRef.current.style.marginTop = "200px"
  },[show])


  useLayoutEffect(()=> {
    console.log('useEffect', divRef.current)
    if(!divRef.current) return;
    divRef.current.style.marginTop = "200px"
  },[show])

  return (
    <div>
      app
      <hr />
      <button onClick={()=>setShow(!show)}>显示/隐藏</button>
      {
        show && <div style={{width: 100, height:100,backgroundColor:'pink'}}  ref={divRef}/>
      }


    </div>
  );
};

export default Demo;
