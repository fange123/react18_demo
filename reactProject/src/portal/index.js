import React from "react";
import reactDom from "react-dom";
import "./index.css";

const DropBack = () => {
  // * portal可以将组建渲染到页面中的指定位置
  // * 如果想让组件或者元素在跟元素以外的地方渲染，比如遮罩层，可以使用portal传送门
  //? 1.首先在index.htm页面，在root的平级位置添加一个新元素<div id='portal'></div>
  //? 2.修改组建的渲染方式
  //?   -通过ReactDOM.createPortal()作为返回值创建元素
  //?   -参数 1，jsx,想渲染的内容
  //?   -参数 2，目标位置（dom元素）
  const portal = document.querySelector("#portal");
  const jsx = (
    <div className='wrap'>
      <div className='content'>
        <h1>哎嘿～</h1>
        <p>啦啦啦啦啦啦啦啦啦啦啦</p>
      </div>
    </div>
  );
  return reactDom.createPortal(jsx, portal);
};

export default DropBack;
