import React,{ useImperativeHandle ,useRef} from 'react';

const Some = React.forwardRef((props,ref) => {
const btnRef = useRef(null)

// useImperativeHandle可以决定使用ref返回哪个dom
  useImperativeHandle(ref,()=>{
    // * 回调函数返回什么，上层ref就接收到什么
    // return '哈哈哈傻子'
    // * 在这个回调函数会返回一个操作dom的方法
    return {
      //返回一个修改value的方法，把要改的成的值通过回调函数传进来，在some组件内部自己改
      changeButtonValue(val){
        btnRef.current.innerHTML = val;
      }

    }
  })
  return (
  <>
   <h2>
      some
    </h2>
    <button ref={btnRef}>someBtn</button>
  </>

  );
})

export default Some;
