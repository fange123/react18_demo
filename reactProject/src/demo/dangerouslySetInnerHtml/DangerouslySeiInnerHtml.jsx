import React from 'react';

// ~ dangerouslySetInnerHTML相当于浏览器dom中的innerHTML
// 它应该是一个带有传递给__html 键的对象dangerouslySetInnerHTML 。
// 除此之外，使用dangerouslySetInnerHTML 属性的元素不应该有任何孩子
// 因此要使用<div> 元素作为自闭标签

//!不安全，可能发生xss跨站脚本攻击，可以利用净化html的工具：最受欢迎的HTML净化工具是DOMPurify。

const DangerouslySeiInnerHtml = () => {
  const fn = ()=>'<span>哈哈哈哈哈<b style="color:red">你好</b></span>'
  return (
    // * 当使用dangerouslySetInnerHTML ，React就会意识到HTML标签（该标签的渲染内容是动态的），并正确渲染它们
    <div dangerouslySetInnerHTML={{__html:fn()}}/>

  );
};

export default DangerouslySeiInnerHtml;
