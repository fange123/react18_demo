import React from "react";

const B = (props) => {
  const { addCount } = props;

  console.log("B组件渲染");
  return (
    <div>
      <h2>B组件</h2>
      <button onClick={addCount}>增加A组件</button>
    </div>
  );
};

export default React.memo(B);
