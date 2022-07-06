import React from "react";
import C from "./C";

const B = () => {
  console.log("B组件渲染");
  return (
    <div>
      <h2>B组件</h2>
      <C />
    </div>
  );
};

export default B;
