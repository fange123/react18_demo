import React from "react";

const C = () => {
  console.log("c组件渲染");
  return (
    <div>
      <button>C组件</button>
    </div>
  );
};

export default React.memo(C);
