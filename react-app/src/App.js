import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    //* 初始化 的时候发请求
    //* fetch（）用来向服务器发请求，是ajax升级版
    //* 两个参数：1，请求地址；2，请求信息(可省略)

    fetch("http://localhost:1337/api/students")
      .then((res) => {
        //* res是响应信息,  res.json()是需要拿到的数据信息，但是它是个promise
        return res.json(); //* 该方法可以把响应来的json转换成js对象
      })
      .then((res) => {
        setList(res.data);
      })
      .catch();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StudentList list={list} />
    </div>
  );
};

export default App;
