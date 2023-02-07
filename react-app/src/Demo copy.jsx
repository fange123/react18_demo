import React, { useEffect, useState, useRef } from "react";

const Demo = () => {
  const [contentStyle, setContentStyle] = useState({
    transitionDuration: "0s",
    transform: "translateX(0px)",
    display: "flex",
    backgroundColor: "orange",
  });

  const timer = useRef();

  const start = () => {
    setContentStyle({
      ...contentStyle,
      transitionDuration: "0s",
      transform: "translateX(0px)",
    });

    setTimeout(() => {
      setContentStyle({
        ...contentStyle,
        transitionDuration: "5s",
        transform: "translateX(-550px)",
      });
    }, 100);
  };

  useEffect(() => {
    start();
    timer.current = setInterval(() => {
      start();
    }, 5 * 1000);

    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, []);

  return (
    <div
      style={{
        width: "400px",
        whiteSpace: "nowrap",
        background: "pink",
        float: "right",
        overflow: "hidden",
      }}
    >
      <div style={contentStyle}>
        <p
          style={{
            height: "50px",
          }}
        >
          哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </p>
        <p
          style={{
            marginLeft: "50px",
          }}
        >
          😄哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </p>
      </div>
    </div>
  );
};

export default Demo;
